import ButtonMenu from './ButtonMenu';
import CartWidget from './CartWidget';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Sections from './Sections';
import UserBar from './UserBar';
import DarkModeButton from '../DarkModeButton/DarkModeButton';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent d-block p-0">
            <DarkModeButton />
            <UserBar />
            <div className="container-fluid">
                <Logo />
                <ButtonMenu />
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                    <Sections />
                    <SearchBar />
                </div>
                <CartWidget cantCarrito={2} />
                
            </div>
        </nav>
    );
}

export default NavBar;
