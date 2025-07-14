"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useEffect } from "react";

const SwitchTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("SwitchTheme must be used within a ThemeContextProvider");
  }
  const { theme, toggleTheme } = context;
  useEffect(() => {
    document.body.classList.remove("light", "dark");  
    document.body.classList.add(theme);              
  }, [theme]);

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
};

export default SwitchTheme;
