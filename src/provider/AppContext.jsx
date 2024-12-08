import { createContext, useContext, useEffect, useState } from "react";

export const AppContextProvier = createContext(null)
const AppContext = ({children}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [theme, setTheme] = useState("light");

    const darkModeHandler = () => {

         if(theme ===   "light"){
            setTheme("dark")
            return
        }
            setTheme("light")
        // document.body.classList.toggle("dark");
    }
    console.log(theme)
    useEffect(() =>  {
        document.documentElement.setAttribute('data-theme', theme);
        // localStorage.setItem("theme", theme);
        console.log(theme)
    }, [theme])


    const appContextInfo = {
        openMenu,
        setOpenMenu,
        theme,
        setTheme,
        darkModeHandler
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