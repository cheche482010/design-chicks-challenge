import React from 'react';
import './css/Footer.css';
import logoChick from './img/logo-chick.svg';
import visa from './img/visa.svg';
import mastercard from './img/mastercard.svg';
import skrill from './img/skrill.svg';
import crypto from './img/crypto.svg';
import amex from './img/amex.svg';
import face from './img/face.png';
import insta from './img/insta.png';
import twi from './img/twi.png';
import dis from './img/dis.png';

const FooterImage = ({ src }) => (
  <div className="image-container">
    <img alt="" src={src} />
  </div>
);

const SocialIcon = ({ src }) => (
  <img alt="icon" className="icono" src={src} />
);

const FooterColumn = ({ children }) => (
  <div className="footer-column">{children}</div>
);

const FooterLink = ({ text }) => (
  <p className="color-p">{text}</p>
);

const StarBox = () => (
  <div className="star-box">
    <i className="fas fa-star"></i>
  </div>
);

const Footer = () => {
  return (
    <footer>
      <div className="footer-ima" style={{ margin: 'auto' }}>
        <FooterImage src={visa} />
        <FooterImage src={mastercard} />
        <FooterImage src={amex} />
        <FooterImage src={skrill} />
        <FooterImage src={crypto} />
        <div className="image-container">
          <p className="color-p">and 50+ more</p>
        </div>
      </div>
      <div className="footer-social">
        <FooterColumn>
          <SocialIcon src={face} />
          <SocialIcon src={insta} />
          <SocialIcon src={twi} />
          <SocialIcon src={dis} />
        </FooterColumn>
      </div>
      <div className="footer-column" style={{ marginLeft: '20px' }}>
        <div className="footer-column">
          <img alt="" src={logoChick} />
          <p className="color-p">support@chicsgold.com</p>
        </div>
      </div>
      <FooterColumn>
        <h3>Chiks Gold</h3>
        <FooterLink text="Games" />
        <FooterLink text="About Us" />
        <FooterLink text="Blog" />
        <FooterLink text="Sitemap" />
      </FooterColumn>
      <FooterColumn>
        <h3>Support</h3>
        <FooterLink text="Contact Us" />
        <FooterLink text="FAQ" />
      </FooterColumn>
      <FooterColumn>
        <h3>Legal</h3>
        <FooterLink text="Privacy Policy" />
        <FooterLink text="Term of Service" />
        <FooterLink text="Copyright Policy" />
      </FooterColumn>
      <FooterColumn>
        <div className="trustpilot">
          <h3>Trustpilot Reviews</h3>
          <div className="star-container">
            <StarBox />
            <StarBox />
            <StarBox />
            <StarBox />
            <StarBox />
          </div>
        </div>
      </FooterColumn>
      <div className="footer-right">
        <p className="color-p">
          © 2023 Videojuegos S.A. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
