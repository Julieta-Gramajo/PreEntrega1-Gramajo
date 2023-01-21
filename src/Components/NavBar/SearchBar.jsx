import lupa from '../images/lupa.png';

const SearchBar = () => {
    return (
            <div className="d-flex buscador justify-content-between align-items-center mx-2">
                <form>
                    <input className="form-control me-2" type="search" placeholder="Busca tu producto aquí.. :)" aria-label="Search" />
                </form>
                <img src={lupa} alt="" width={35} height={35} />
            </div>
    );
}

export default SearchBar;
