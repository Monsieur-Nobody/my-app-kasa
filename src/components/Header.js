import Nav from "./Nav";
import LOGO from "../assets/LOGO.svg"; // Chemin vers l'image du logo

const Header = () => {
  return (
    <div className="Header_container">
      <img src={LOGO} alt="Kasa Logo" className="LogoHeader" />
      <Nav />
    </div>
  );
};

export default Header;
