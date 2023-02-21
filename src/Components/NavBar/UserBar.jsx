import { DarkModeProvider } from "../../context/DarkModeContext";
import DarkModeButton from "../DarkModeButton/DarkModeButton";

const UserBar = () => {
    return (
        <div className="d-flex justify-content-between user px-3">
            <DarkModeButton />
            <div>
                <button type="button" className="btn button mx-1">Ingresar</button>
                <button type="button" className="btn button mx-1">Registrarse</button>
            </div>
        </div>
    );
}

export default UserBar;
