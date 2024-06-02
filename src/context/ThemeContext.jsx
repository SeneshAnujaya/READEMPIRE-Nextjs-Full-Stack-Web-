"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== undefined) {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
//   return "dark";
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // return getFromLocalStorage();
    return "dark"
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log('btn click');
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme]);
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
};
