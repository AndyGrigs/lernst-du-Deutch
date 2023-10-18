import { useState } from "react";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      {/* Hier können Sie die Navigationsleiste gestalten */}
      <nav>
        <ul>
          <li>
            <a href="/">Startseite</a>
          </li>
          <li>
            <a href="/über-uns">Über uns</a>
          </li>
          <li>
            <a href="/kontakt">Kontakt</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Main: React.FC = () => {
  return (
    <div className="main">
      {/* Hier können Sie den Hauptinhalt Ihrer Website einfügen */}
      <h1>Willkommen auf unserer Website</h1>
      <p>Hier ist der Hauptinhalt der Website...</p>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="footer">
      {/* Hier können Sie die Firmeninformationen einfügen */}
      <p>Firmenname</p>
      <p>Adresse</p>
      <p>Kontaktinformationen</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
