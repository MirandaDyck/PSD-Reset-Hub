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
              src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-fr.svg"
              alt="Government of Canada"
            />
            <a className="catalogue-link" href="http://gccatalogue.alpha.canada.ca/">
              Catalogue GC <span className="alpha">Alpha</span>
            </a>
          </div>

          {/* Breadcrumbs */}
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="#">Accueil</a><span className="sep">></span>
            <a href="#">Catalogue GC (alpha)</a><span className="sep">></span>
            <span aria-current="page">Réinitialisation de la Politique sur les services et le numérique</span>
          </nav>
        </div>
      </header>

      {/* Hero (top blue banner) */}
      <section className="hero">
        <div className="container hero-wrap">
          <div className="hero-text">
            <h1 className="hero-title">Modernisation de la Politique sur les services et le numérique</h1>
            <p className="hero-tag">Réinitialiser la politique pour un avenir numérique</p>
          </div>
          {/* Top-right logo (icon only) */}
          <img className="hero-logo" src="/logo-no-text.png" alt="Logo de réinitialisation PSN" />
        </div>
      </section>

      {/* Main content */}
      <main className="container main" id="main" role="main">
        {/* On this page card */}
        <nav className="onpage" aria-label="On this page">
          <div className="label">Sur cette page</div>
          <ul>
            <li><a href="#why-change">Pourquoi un changement est nécessaire</a></li>
            <li><a href="#about-policy">À propos de la Politique sur les services et le numérique</a></li>
            <li><a href="#stay-tuned">Restez à l'écoute</a></li>
          </ul>
        </nav>

        {/* Intro */}
        <section id="intro">
          <p>
            Le Bureau du dirigeant principal de l'information (DPI) du Secrétariat du Conseil du Trésor du Canada (SCT)
            modernise la Politique sur les services et le numérique (PSN). Cette réinitialisation représente un changement
            pangouvernemental dans la façon dont les services sont conçus, financés et livrés.
          </p>
        </section>

        {/* Why Change */}
        <section id="why-change">
          <h2>Pourquoi un changement est nécessaire</h2>
          <p>
            Les Canadiens s'attendent à des services gouvernementaux simples, sécurisés et faciles à utiliser. Mais trop souvent, 
            les systèmes et règles désuets rendent les services plus difficiles à livrer -- et plus difficiles d'accès pour les gens.
          </p>
          <p>La réinitialisation de la PSN vise à changer cela. Elle permettra de :</p>
          <ul>
            <li><strong>Construire des fondations numériques plus solides :</strong> Infrastructure moderne reliant les ministères et services.</li>
            <li><strong>Se concentrer sur les résultats, pas sur les processus :</strong> Moins de bureaucratie, plus de vrais résultats pour les Canadiens.</li>
            <li><strong>Jeter les bases de l'avenir :</strong> Garder le Canada en contrôle de ses données, sa technologie et ses talents.</li>
          </ul>
        </section>

        {/* About Policy */}
        <section id="about-policy">
          <h2>À propos de la Politique sur les services et le numérique</h2>
          <p>
            La Politique sur les services et le numérique (PSN) est la principale politique du gouvernement du Canada sur la façon 
            dont les services sont conçus et livrés. Elle établit les attentes pour les ministères concernant l'expérience client 
            et l'infrastructure numérique afin que les services fonctionnent mieux pour les gens.
          </p>
          <ul>
            <li>Services simples, sécurisés et faciles à utiliser pour les Canadiens</li>
            <li>Fondations numériques plus solides pour que les systèmes fonctionnent ensemble</li>
            <li>De meilleurs résultats en réduisant la bureaucratie</li>
            <li>Une politique prête pour l'avenir protégeant le contrôle du Canada sur ses données et sa technologie</li>
          </ul>
          <p>
            La réinitialisation de la PSN est plus qu'une mise à jour de politique -- il s'agit de créer un gouvernement numérique 
            qui fonctionne pour aujourd'hui et qui est prêt pour demain.
          </p>
        </section>
      </main>

      {/* Bottom blue banner (full-width) — text left, logo right */}
      <section id="stay-tuned" className="cta" aria-labelledby="stay-title">
        <div className="container cta-wrap">
          <div className="cta-copy">
            <h2 id="stay-title" className="cta-title">Restez à l'écoute</h2>
            <p className="cta-text">
              Continuez à vérifier la page pour les mises à jour. Pour plus d'informations, envoyez un courriel à{" "}
              <a href="mailto:PSDReset-PSNreinitialisee@tbs-sct.gc.ca">
                PSDReset-PSNreinitialisee@tbs-sct.gc.ca
              </a>.
            </p>
          </div>
          <img className="cta-logo" src="/image.png" alt="Logo de réinitialisation de la Politique sur les services et le numérique" />
        </div>
      </section>

      {/* Footer */}
      <footer className="container footer">
        <p style={{ margin: 0 }}>
          Le Catalogue GC est une collaboration entre le Bureau du dirigeant principal de l'information du Canada et Service Canada.
          Partagez vos réflexions : <a href="mailto:servicedigital-servicesnumerique@tbs-sct.gc.ca">servicedigital-servicesnumerique@tbs-sct.gc.ca</a>
        </p>
        <img
          className="wmms"
          src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg"
          alt="Symbole du gouvernement du Canada"
        />
      </footer>
    </div>
  );
}
