
import {useTheme} from "../context/ThemeContext";

const Button = () => {

  const {theme,setTheme} = useTheme();

  return <div>Active theme: {theme}
  <button onClick={()=>setTheme("light" === theme ? "dark" : "light")}>Change Theme</button>
  </div>;
};

export default Button;
