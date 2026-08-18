const { Hero, FeatureGrid, PricingCard, LogoWall, Testimonial, CTABanner, FAQItem, StatStrip,
        Button, Avatar, Icon, Divider } = DS;

/* One rhythm for the whole page: sections carry no vertical padding and the
   wrapper's gap sets the spacing, so paddings never stack into a dead band. */
function Section({ children, style }) {
  return <section style={{ padding: '0 var(--space-6)', ...style }}>{children}</section>;
}

function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-11)', paddingBottom: 'var(--space-11)' }}>
      <Hero
        eyebrow="Now with colour search"
        title="Every image you save, in one place"
        lead="Save from any page in one click. Find it again in seconds — by colour, by source, or by the words you tagged it with."
        actions={<>
          <Button variant="primary" size="lg">Get started</Button>
          <Button size="lg">See how it works</Button>
        </>}
        note="Free for 250 saves. No card required." />

      <Section>
        <LogoWall label="Trusted by design teams at" logos={[
          { name: 'Northwind' }, { name: 'Acme' }, { name: 'Initech' },
          { name: 'Umbrella' }, { name: 'Soylent' }, { name: 'Hooli' },
        ]} />
      </Section>

      <Section>
        <StatStrip stats={[
          { value: '2.4m', label: 'Images saved' },
          { value: '18k', label: 'Active people' },
          { value: '99.9%', label: 'Uptime' },
        ]} />
      </Section>

      <Section>
        <FeatureGrid features={[
          { icon: <Icon name="zap" size={18} />, title: 'One-click saving',
            description: 'Save any image from any page without leaving it.' },
          { icon: <Icon name="search" size={18} />, title: 'Search that works',
            description: 'Find anything by colour, source, or the words you tagged it with.' },
          { icon: <Icon name="layers" size={18} />, title: 'Boards that stay tidy',
            description: 'Drag between boards. Nothing is ever filed in two places at once.' },
        ]} />
      </Section>

      <Section>
        <div style={{ maxWidth: 'var(--marketing-max)', margin: '0 auto' }}>
          <Testimonial size="lg"
            quote="We stopped losing references the week we switched. That is the whole review."
            name="Ada Lovelace" role="Design lead, Acme"
            avatar={<Avatar name="Ada Lovelace" size="lg" />} />
        </div>
      </Section>

      <Section>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 14, maxWidth: 'var(--marketing-max)', margin: '0 auto', alignItems: 'stretch',
        }}>
          <PricingCard name="Free" price="$0" period=""
            description="For trying it out."
            action={<Button fullWidth size="lg">Get started</Button>}
            features={['250 saves', 'Basic search',
                       { label: 'Colour search', included: false },
                       { label: 'Shared boards', included: false }]}
            note="No card required." />

          <PricingCard name="Pro" price="$24" featured badge="Most popular"
            description="For people who save every day."
            action={<Button variant="primary" fullWidth size="lg">Start free trial</Button>}
            features={['Unlimited saves', 'Colour search', 'Shared boards',
                       { label: 'Priority support', included: false }]}
            note="Billed monthly. Cancel any time." />

          <PricingCard name="Team" price="$18" period="/user/mo"
            description="For teams sharing a library."
            action={<Button fullWidth size="lg">Contact sales</Button>}
            features={['Everything in Pro', 'Colour search', 'Shared boards', 'Priority support']}
            note="Billed annually." />
        </div>
      </Section>

      <Section>
        <div style={{ maxWidth: 'var(--prose-max)', margin: '0 auto' }}>
          <h2 style={{ marginBottom: 8 }}>Questions</h2>
          <FAQItem question="What happens when I hit the free limit?" defaultOpen>
            Saving stops until you upgrade or delete some saves. Nothing is deleted for you,
            and everything you already saved stays available.
          </FAQItem>
          <FAQItem question="Can I cancel any time?">
            Yes, and you keep access until the end of the period you paid for.
          </FAQItem>
          <FAQItem question="Can I get my data out?">
            Any time, as a zip of the original files plus a json file of your boards and tags.
          </FAQItem>
        </div>
      </Section>

      <Section>
        <CTABanner
          title="Start saving in about a minute"
          description="Install the extension, save your first image, and see if it sticks."
          actions={<Button size="lg" style={{ background: 'var(--surface-raised)', color: 'var(--accent-text)', border: 0 }}>
            Get started
          </Button>}
          note="Free for 250 saves. No card required." />
      </Section>
    </div>
  );
}
