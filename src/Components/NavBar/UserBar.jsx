import { DarkModeProvider } from "../../context/DarkModeContext";

const UserBar = () => {
    return (
        <DarkModeProvider>
            <div className='user text-end px-3'>
                <button type="button" className="btn button mx-1">Ingresar</button>
                <button type="button" className="btn button mx-1">Registrarse</button>
            </div>
        </DarkModeProvider>
    );
}

export default UserBar;
