import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Connect with me</p>
      <div className="social-icons">
        <a href="https://github.com/Dhairya-77" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/dhairya-bhoya-232623241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin /></a>
        <a href="mailto:dhairyabhoya.777@gmail.com" target="_blank"><FaEnvelope /></a>
      </div>
    </footer>
  );
};

export default Footer;
