import LogoFooter from '../ChildsComponents/Logo';
import Copyright from '../ChildsComponents/Copyright';

const Footer = () => {
  return (
    <footer className="Footer_Container">
      <LogoFooter className="Footer_Logo" />
      <Copyright />
    </footer>
  );
};

export default Footer;