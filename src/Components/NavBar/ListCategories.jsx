import { Link } from "react-router-dom";

const ListCategories = () => {
    return (
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to={"/category/pañales"}>Pañales</Link></li>
            <li><Link className="dropdown-item" to={"/category/mamaderas"}>Mamaderas</Link></li>
            <li><Link className="dropdown-item" to={"/category/chupetes"}>Chupetes</Link></li>
        </ul>
    );
}

export default ListCategories;
