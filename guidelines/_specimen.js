/* Reads the ACTUAL computed value of a token and prints it beneath the swatch,
   so a specimen stays truthful after a brand swap instead of showing whatever
   hex was hard-coded when it was written. */
(function () {
  function resolve(el, token) {
    const probe = document.createElement('span');
    probe.style.color = `var(${token})`;
    probe.style.display = 'none';
    el.appendChild(probe);
    const v = getComputedStyle(probe).color;
    probe.remove();
    return v;
  }

  function toHex(rgb) {
    const m = /rgba?\(([^)]+)\)/.exec(rgb);
    if (!m) return rgb;
    const p = m[1].split(',').map((x) => parseFloat(x.trim()));
    const a = p.length > 3 ? p[3] : 1;
    const hex = '#' + p.slice(0, 3).map((n) => Math.round(n).toString(16).padStart(2, '0')).join('');
    return a < 1 ? `${hex} · ${Math.round(a * 100)}%` : hex;
  }

  window.DSSpecimen = {
    /** Fill every [data-token] element and label it with its resolved value. */
    paint: function () {
      document.querySelectorAll('[data-token]').forEach((el) => {
        const token = el.getAttribute('data-token');
        const fill = el.querySelector('.g-fill');
        if (fill) fill.style.background = `var(${token})`;
        const hex = el.querySelector('.g-hex');
        if (hex && !hex.textContent.trim()) hex.textContent = toHex(resolve(el, token));
      });
    },
    /** Build swatch markup from a list of [token, label] pairs. */
    swatches: function (target, pairs, columns) {
      const host = document.querySelector(target);
      host.style.display = 'grid';
      host.style.gridTemplateColumns = `repeat(${columns || pairs.length}, minmax(0, 1fr))`;
      host.style.gap = '8px';
      host.innerHTML = pairs.map(([token, label]) =>
        `<div class="g-chip" data-token="${token}">
           <div class="g-fill"></div>
           <div class="g-label">${label}</div>
           <div class="g-hex"></div>
         </div>`).join('');
      this.paint();
    },
  };
})();
