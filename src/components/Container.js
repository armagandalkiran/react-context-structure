import Button from "./Button";
import Header from './Header';
import '../App.css';
import {useTheme} from "../context/ThemeContext";
import Profile from "./Profile";


const Container = () => {
    const {theme} = useTheme();
return <div className={`app ${theme}`}>
            <Header/>
            <Button/>
            <hr/>
            <Profile/>
    </div>;
};

export default Container;
