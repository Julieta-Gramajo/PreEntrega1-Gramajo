import ListCategories from './ListCategories'
const Sections = () => {
    return (
        <ul className="navbar-nav mx-5">
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                        <li className="nav-item dropdown mx-3">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ListCategories />
                        </li>
                    </ul>
    );
}

export default Sections;
