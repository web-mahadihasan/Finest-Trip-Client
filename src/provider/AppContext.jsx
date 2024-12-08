import { createContext, useContext, useEffect, useState } from "react";

export const AppContextProvier = createContext(null)
const AppContext = ({children}) => {
    const [openMenu, setOpenMenu] = useState(false);
    
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
        document.documentElement.classList.add('theme-dark');
        } else {
        document.documentElement.classList.remove('theme-dark');
        }
    };


    const appContextInfo = {
        openMenu,
        setOpenMenu,
        toggleTheme,
        isDarkMode,
        setIsDarkMode
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