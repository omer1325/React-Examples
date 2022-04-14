import { createContext, useState, useEffect, useContext } from 'react'

const ThemeContext = createContext();

    const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {

    }, [theme] );
    localStorage.setItem("theme", theme)
    const values = {
        theme,
        setTheme,
    };

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
};

const useTheme = () => useContext(ThemeContext)

export { useTheme, ThemeProvider };