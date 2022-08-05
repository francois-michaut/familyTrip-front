// Import

import './footer.scss';

import logoInsta from 'src/assets/images/kisspng-computer-icons-logo-instagram-blog-akita-5b2ffdee6d0502.8875915015298718544466.png';
import logoFacebook from 'src/assets/images/kisspng-facebook-inc-farmville-facebook-query-language-f-facebook-template-5b15de690d58c2.1014321115281598490547.png';
import logoTwitter from 'src/assets/images/kisspng-social-media-computer-icons-tulane-university-face-drawing-vector-twitter-5ab02d6b50a397.8866567515214954033303.png';
// Composant

function Footer() {
  return (
    <footer>
      <div className="logos">
        <img className="logo" src={logoInsta} alt="logo instagram" />
        <img className="logo" src={logoFacebook} alt="logo facebook" />
        <img className="logo" src={logoTwitter} alt="logo twitter" />
      </div>
    </footer>
  );
}

// export

export default Footer;
