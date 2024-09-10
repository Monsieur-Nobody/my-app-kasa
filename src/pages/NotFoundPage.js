import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>Oups! La page que vous recherchez n'existe pas.</p>
      <Link to="/" className="home-link">Retourner à la page d'accueil</Link>
    </div>
  );
};

export default NotFoundPage;