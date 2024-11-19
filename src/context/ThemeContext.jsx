// ThemeContext.jsx
"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light"; // Fallback for server-side rendering
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Set initial state without localStorage

  useEffect(() => {
    // Set theme from localStorage after component mounts
    const savedTheme = getFromLocalStorage();
    setTheme(savedTheme);
  }, []);

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
