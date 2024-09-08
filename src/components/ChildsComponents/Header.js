import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="Header_container">
      <Logo className="LogoHeader" />
      <Nav />
    </div>
  );
};

export default Header;
