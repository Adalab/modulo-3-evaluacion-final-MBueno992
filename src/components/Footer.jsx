import '../scss/layout/Footer.scss';
import shield from '../images/escudo.png';
import adalab from '../images/favicon.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={shield} alt="Colegio Hogwarts" className="footer__shield" />
      </Link>
      <p className="footer__text">
        Registro de magos y muggles de Harry Potter ¿y tú, te consideras mago o
        muggle?
      </p>
      <nav className="footer__nav">
        Contacto
        <ul className="footer__nav--list">
          <li>
            <a
              href="https://www.linkedin.com/in/mbueno992/"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MBueno992"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              <i className="fa-brands fa-github-alt"></i>
            </a>
          </li>
          <li>
            <a href="https://adalab.es/" target="_blank" rel="noreferrer">
              <img src={adalab} alt="Adalab" className="footer__nav--logo" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
