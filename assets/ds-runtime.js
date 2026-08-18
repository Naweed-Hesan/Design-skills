/* ds-runtime — loads the design system into a global `DS`, then mounts a kit.
 *
 *   DSMount({ root: '../../', files: ['data.js', 'App.jsx'], render: 'App' })
 *
 * `root` is the path from the html file back to the design system root.
 * `files` are relative to the html file and load in order, sharing one scope.
 * `render` names the component to mount into #root.
 *
 * Requires React, ReactDOM and @babel/standalone on the page.
 *
 * How scoping works, since it is the non-obvious part:
 *
 *   · Each COMPONENT file is evaluated in its own scope. They must be —
 *     several of them declare a top-level `const SIZES` or `TONES`, which
 *     would collide if everything shared one scope.
 *   · Each is wrapped in `with (DS)`, so a component referencing a sibling
 *     (Dialog using Button) resolves it off DS at render time rather than
 *     at definition time. That makes load order irrelevant between
 *     components.
 *   · KIT files share a single scope with each other, so data.js can define
 *     something App.jsx uses directly. They are also wrapped in `with (DS)`,
 *     which is why a screen can say `<Card>` with no import.
 */
(function () {
  'use strict';

  var MANIFEST = [
    'core/Icon', 'core/Button', 'core/IconButton', 'core/Input', 'core/Textarea',
    'core/Select', 'core/Checkbox', 'core/Switch', 'core/Field',

    'display/Card', 'display/Badge', 'display/Tag', 'display/Avatar', 'display/KeyCap',
    'display/EmptyState', 'display/Skeleton', 'display/Divider',

    'navigation/Tabs', 'navigation/SegmentedControl', 'navigation/SidebarNav',
    'navigation/Breadcrumb', 'navigation/Pagination', 'navigation/ContextMenu',

    'feedback/Toast', 'feedback/Banner', 'feedback/Dialog', 'feedback/Tooltip',
    'feedback/ProgressBar',

    'data/LineChart', 'data/BarChart', 'data/Sparkline', 'data/DonutChart',
    'data/MetricCard', 'data/DataTable', 'data/ActivityFeed',

    'media/MasonryGrid', 'media/MediaCard', 'media/DropZone', 'media/Lightbox',
    'media/ColorSwatchSet',

    'shell/PageHeader', 'shell/Toolbar', 'shell/FilterBar', 'shell/StatusPill',

    'marketing/Hero', 'marketing/FeatureGrid', 'marketing/PricingCard',
    'marketing/LogoWall', 'marketing/Testimonial', 'marketing/CTABanner',
    'marketing/FAQItem', 'marketing/StatStrip'
  ];

  var DS = (window.DS = window.DS || {});

  /* Strip module syntax so the source can be evaluated as a plain script,
     and collect the names the file means to export. */
  function demodularise(src) {
    var names = [];
    var m;

    /* Names the file explicitly exports. Matched on the ORIGINAL source,
       before the export keywords are stripped. */
    var exportRe = /^\s*export\s+(?:default\s+)?(?:function|const|let|var|class)\s+([A-Za-z_$][\w$]*)/gm;
    while ((m = exportRe.exec(src))) {
      if (names.indexOf(m[1]) === -1) names.push(m[1]);
    }

    /* A file with no export syntax at all — a kit screen, say — falls back
       to its top-level capitalised declarations. Without this fallback a
       component written without `export` would silently never register. */
    if (!names.length) {
      var bareRe = /^(?:function|const|let|var|class)\s+([A-Z][\w$]*)/gm;
      while ((m = bareRe.exec(src))) {
        if (names.indexOf(m[1]) === -1) names.push(m[1]);
      }
    }

    var out = src
      .replace(/^\s*import\s+[^;]*?;?\s*$/gm, '')
      .replace(/^\s*export\s+default\s+/gm, '')
      .replace(/^\s*export\s+(function|const|let|var|class)\s+/gm, function (_m, kw) {
        return kw + ' ';
      });

    return { code: out, names: names };
  }

  function compile(src, path) {
    try {
      return window.Babel.transform(src, {
        presets: [['react', { runtime: 'classic' }]],
        filename: path,
        sourceMaps: false
      }).code;
    } catch (e) {
      throw new Error('ds-runtime: could not compile ' + path + ' — ' + e.message);
    }
  }

  function fetchText(url) {
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error('ds-runtime: ' + r.status + ' fetching ' + url);
      return r.text();
    });
  }

  function evalComponent(src, path) {
    var parsed = demodularise(src);
    if (!parsed.names.length) return;
    var body =
      'with (DS) {\n' +
      compile(parsed.code, path) +
      '\nreturn {' +
      parsed.names
        .map(function (n) {
          return n + ': typeof ' + n + ' !== "undefined" ? ' + n + ' : undefined';
        })
        .join(',') +
      '};\n}';

    var factory;
    try {
      factory = new Function('React', 'DS', body);
    } catch (e) {
      throw new Error('ds-runtime: syntax error in ' + path + ' — ' + e.message);
    }
    var exported = factory(window.React, DS);
    Object.keys(exported).forEach(function (k) {
      if (exported[k] !== undefined) DS[k] = exported[k];
    });
  }

  function showError(err) {
    var el = document.getElementById('root') || document.body;
    el.innerHTML =
      '<pre style="margin:0;padding:20px;font:12px/1.5 ui-monospace,Menlo,monospace;' +
      'color:#A83A2E;white-space:pre-wrap">' +
      String((err && err.message) || err).replace(/[<&]/g, function (c) {
        return c === '<' ? '&lt;' : '&amp;';
      }) +
      '</pre>';
    /* eslint-disable-next-line no-console */
    console.error(err);
  }

  window.DSMount = function DSMount(opts) {
    opts = opts || {};
    var root = opts.root || './';
    var files = opts.files || [];
    var renderName = opts.render || 'App';

    if (!window.React || !window.ReactDOM) {
      return showError(new Error('ds-runtime: React and ReactDOM must load before DSMount'));
    }
    if (!window.Babel) {
      return showError(new Error('ds-runtime: @babel/standalone must load before DSMount'));
    }

    var componentUrls = MANIFEST.map(function (p) {
      return { url: root + 'components/' + p + '.jsx', path: p };
    });

    Promise.all(
      componentUrls.map(function (c) {
        return fetchText(c.url).then(
          function (t) {
            return { path: c.path, src: t };
          },
          function () {
            return null; /* a component absent from disk is skipped, not fatal */
          }
        );
      })
    )
      .then(function (loaded) {
        loaded.forEach(function (c) {
          if (c) evalComponent(c.src, c.path);
        });
        return Promise.all(files.map(fetchText));
      })
      .then(function (sources) {
        /* Kit files share one scope, so later files see earlier ones. */
        var combined = sources
          .map(function (s, i) {
            return compile(demodularise(s).code, files[i]);
          })
          .join('\n;\n');

        var body =
          'with (DS) {\n' +
          combined +
          '\nreturn typeof ' + renderName + ' !== "undefined" ? ' + renderName +
          ' : DS.' + renderName + ';\n}';

        var Component = new Function('React', 'DS', body)(window.React, DS);
        if (!Component) {
          throw new Error('ds-runtime: no component named "' + renderName + '" was found');
        }

        var mount = document.getElementById('root');
        var el = window.React.createElement(Component);
        if (window.ReactDOM.createRoot) window.ReactDOM.createRoot(mount).render(el);
        else window.ReactDOM.render(el, mount);
      })
      .catch(showError);
  };
})();
