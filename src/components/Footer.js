import LOGO_White from '../assets/LOGO_White.svg'; 

const Footer = () => {
  return (
    <footer className="Footer_Container">
      <img src={LOGO_White} alt="Kasa White Logo" className="Footer_Logo" />
      <div className='copyright_text'>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;