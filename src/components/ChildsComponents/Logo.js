import LOGO from '../../assets/LOGO.svg';

const Logo = ({ className }) => {
  return (
    <div className={`Logo_Container ${className}`}>
      <img src={LOGO} alt="Logo de Kasa" />
    </div>
  );
};

export default Logo;