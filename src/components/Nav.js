import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="Nav">
      <ul className='Nav_Links'>
        <li><Link to="/" className='HomeLink'>Accueil</Link></li>
        <li><Link to="/about" className='AboutLink'>A Propos</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;