import LogoNotFound from '../ChildsComponents/LogoNotFound';

const TextAndLinkNotFound = () => {
    return (
        <div>
        <p>Oups! La page que vous demandez n'existe pas.</p>
    /* Lien vers Index */<a></a>
        </div>
    )
        
    ;
}

const NotFoundContent = () => {
    return (
        <div className="Home_Page_Style">
            <LogoNotFound/>
            <TextAndLinkNotFound/>
        </div>
    )
}


export default NotFoundContent;