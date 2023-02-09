import "./DarkModeButton.css"

//Context
import { useDarkModeContext } from "../../context/DarkModeContext";
const DarkModeButton = () => {
    const { toggleDarkMode } = useDarkModeContext()

    return (
      <div className="toggle-theme-wrapper">
        <span>☀️</span>
        <label className="toggle-theme" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" onInput={() => toggleDarkMode()}/>
          <div className="slider round"></div>
        </label>
        <span>🌒</span>
      </div>
    );
  };

export default DarkModeButton;
