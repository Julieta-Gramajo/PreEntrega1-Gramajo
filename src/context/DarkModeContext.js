import { useContext, createContext, useState } from "react";

const DarkModeContext = createContext()
const useDarkModeContext = () => useContext(DarkModeContext)

const DarkModeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false)
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if(!darkMode){
            document.body.firstElementChild.classList.add("darkMode")
        }
        else{
            document.body.firstElementChild.classList.remove("darkMode")
        }
    }

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export { useDarkModeContext, DarkModeProvider }

