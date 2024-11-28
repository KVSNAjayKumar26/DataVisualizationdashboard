import React, { useEffect, useState } from 'react'

const useTheme = () => {
    const [theme, setTheme] = useState(() => {
         // Check local storage or default to system preference
         const savedTheme = localStorage.getItem("theme");
         if (savedTheme) {
            return savedTheme;
         }

         const systemPreference = window.matchMedia("(prefers-color-scheme: dark").matches;
         return systemPreference ? "dark" : "light";
    });

    useEffect(() => {
        // Update the document's root class and save to local storage
        const root = document.documentElement;
        root.classList.remove(theme === "dark" ? "light" : "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

  return { theme, toggleTheme };
};

export default useTheme;