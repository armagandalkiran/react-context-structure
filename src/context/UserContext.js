import { createContext ,useState, useContext} from "react";

const userContext = createContext();

export const UserProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const values = {user,setUser};

    return <userContext.Provider value={values}>{children}</userContext.Provider>
}

export const useUser = () => useContext(userContext);
