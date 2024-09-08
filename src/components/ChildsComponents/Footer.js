import LogoFooter from './Logo';


const Footer = () => {
  return (
    <footer className="Footer_Container">
      <LogoFooter className="Footer_Logo" />
     <div className='copyright_text'>
      <p>© 2020 Kasa. All rights reserved</p>
     </div>
    </footer>
  );
};

export default Footer;