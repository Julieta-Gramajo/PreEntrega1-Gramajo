import hover from "../images/hover.png";
import ListCategories from './ListCategories'
import { Link } from 'react-router-dom';
const Sections = () => {
    return (
        <ul className="navbar-nav mx-3">
                        <li className="nav-item mx-1 d-flex justify-content-center lista">
                            <Link className="nav-link" to={"/"}>Inicio</Link>
                            <img className="hover" src={hover} alt={"logo"}/>
                        </li>
                        <li className="nav-item mx-1 d-flex justify-content-center lista">
                            <Link className="nav-link" to={"/contacto"}>Contacto</Link>
                            <img className="hover" src={hover} alt={"logo"}/>
                        </li>
                        <li className="nav-item dropdown mx-1 d-flex justify-content-center lista">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <img className="hover" src={hover} alt={"logo"}/>
                            <ListCategories />
                        </li>
                    </ul>
    );
}

export default Sections;
