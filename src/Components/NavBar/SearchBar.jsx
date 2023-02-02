import lupa from '../images/lupa.png';

const SearchBar = () => {
    return (
            <div className="d-flex buscador justify-content-between align-items-center mx-3">
                <form>
                    <input className="form-control me-2" type="search" placeholder="Busca tu producto aquí.. :)" aria-label="Search" />
                </form>
                <img src={lupa} alt="" width={30} height={30} />
            </div>
    );
}

export default SearchBar;
