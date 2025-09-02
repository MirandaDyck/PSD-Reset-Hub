import React from "react";

export default function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="container">
          <div className="topbar">
            <img
              className="gc-sig"
              src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg"
              alt="Government of Canada"
            />
            <a className="catalogue-link" href="http://gccatalogue.alpha.canada.ca/">
              GC Catalogue <span className="alpha">Alpha</span>
            </a>
          </div>

          {/* Breadcrumbs */}
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="#">Home</a><span className="sep">&gt;</span>
            <a href="#">GC Catalogue (alpha)</a><span className="sep">&gt;</span>
            <span aria-current="page">Policy on Service and Digital reset</span>
          </nav>
        </div>
      </header>

      {/* Hero (top blue banner) */}
      <section className="hero">
        <div className="container hero-wrap">
          <div className="hero-text">
            <h1 className="hero-title">Modernizing the Policy on Service and Digital</h1>
            <p className="hero-tag">Resetting policy for a digital future</p>
          </div>
          {/* Top-right logo (icon only) */}
          <img className="hero-logo" src="/logo-no-text.png" alt="PSD Reset Logo" />
        </div>
      </section>

      {/* Main content */}
      <main className="container main" id="main" role="main">
        {/* On this page card */}
        <nav className="onpage" aria-label="On this page">
          <div className="label">On this page</div>
          <ul>
            <li><a href="#why-change">Why Change is Needed</a></li>
            <li><a href="#about-policy">About Policy on Service and Digital</a></li>
            <li><a href="#stay-tuned">Stay Tuned</a></li>
          </ul>
        </nav>

        {/* Intro */}
        <section id="intro">
          <p>
            The Office of the Chief Information Officer (OCIO) at Treasury Board of Canada Secretariat (TBS)
            is modernizing the Policy on Service and Digital (PSD). This reset is a whole-of-government shift
            in how services are designed, funded and delivered.
          </p>
        </section>

        {/* Why Change */}
        <section id="why-change">
          <h2>Why Change is Needed</h2>
          <p>
            Canadians expect government services that are simple, secure, and easy to use. But too often, outdated
            systems and rules make services harder to deliver -- and harder for people to access.
          </p>
          <p>The reset of the PSD is about changing that. It will:</p>
          <ul>
            <li><strong>Build stronger digital foundations:</strong> Modern infrastructure connecting departments and services.</li>
            <li><strong>Focus on outcomes, not process:</strong> Less red tape, more real results for Canadians.</li>
            <li><strong>Lay a foundation for the future:</strong> Keep Canada in control of its data, technology, and talent.</li>
          </ul>
        </section>

        {/* About Policy */}
        <section id="about-policy">
          <h2>About Policy on Service and Digital</h2>
          <p>
            The Policy on Service and Digital (PSD) is the Government of Canada's main policy for how services are designed
            and delivered. It sets expectations for departments on client experience and digital infrastructure so services
            work better for people.
          </p>
          <ul>
            <li>Simple, secure, easy-to-use services for Canadians</li>
            <li>Stronger digital foundations so systems work together</li>
            <li>Better outcomes by reducing red tape</li>
            <li>A future-ready policy protecting Canada's control over data and technology</li>
          </ul>
          <p>
            The PSD reset is more than a policy update -- it is about creating a digital government that works for today and is ready for tomorrow.
          </p>
        </section>
      </main>

      {/* Bottom blue banner (full-width) — text left, logo right */}
      <section id="stay-tuned" className="cta" aria-labelledby="stay-title">
        <div className="container cta-wrap">
          <div className="cta-copy">
            <h2 id="stay-title" className="cta-title">Stay tuned</h2>
            <p className="cta-text">
              Keep checking the page for updates. For more info, email{" "}
              <a href="mailto:PSDReset-PSNreinitialisee@tbs-sct.gc.ca">
                PSDReset-PSNreinitialisee@tbs-sct.gc.ca
              </a>.
            </p>
          </div>
          <img className="cta-logo" src="/image.png" alt="Policy on Service and Digital Reset logo" />
        </div>
      </section>

      {/* Footer */}
      <footer className="container footer">
        <p style={{ margin: 0 }}>
          The GC Catalogue is a collaboration between the Office of the Chief Information Officer of Canada and Service Canada.
          Share your thoughts: <a href="mailto:servicedigital-servicesnumerique@tbs-sct.gc.ca">servicedigital-servicesnumerique@tbs-sct.gc.ca</a>
        </p>
        <img
          className="wmms"
          src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg"
          alt="Symbol of the Government of Canada"
        />
      </footer>
    </div>
  );
}
