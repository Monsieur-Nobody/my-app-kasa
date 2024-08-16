import Logo from '../ChildsComponents/Logo'
import Nav from '../ChildsComponents/Nav'

const Header = () => {
    return (
        <div className='Header_container'>
            <Logo className="LogoHeader"/>
            <Nav/>
        </div>
    )
}


export default Header ;