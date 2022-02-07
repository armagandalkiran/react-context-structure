import {useTheme} from "../context/ThemeContext";


const Header = () => {

  const {theme,setTheme} = useTheme();  
  return <div>
       <br/><br/>Header
      active theme: {theme}
      <button onClick={()=>setTheme("light"===theme ? "dark" : "light")}>Change Theme</button>
  </div>;
}

export default Header;
