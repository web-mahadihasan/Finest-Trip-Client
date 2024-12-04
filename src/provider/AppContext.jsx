import { createContext, useContext, useState } from "react";

export const AppContextProvier = createContext(null)
const AppContext = ({children}) => {
    const [openMenu, setOpenMenu] = useState(false);

    const appContextInfo = {
        name: "Mehedi",
        openMenu,
        setOpenMenu
    }
    return (
        <AppContextProvier.Provider value={appContextInfo}>
            {children}
        </AppContextProvier.Provider>
    );
};

export const useAppContext = () =>  {
    const context = useContext(AppContextProvier);
    return context;
}

export default AppContext;