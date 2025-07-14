// 10.Develop a language switcher application using the useContext hook.
// Create a context to manage the current language (e.g., English or Spanish).
// Provide buttons to switch between languages.
// Use the useContext hook to access the current language value.
// Display different language versions of the application's content.

"use client";

import React, { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

const LanguageSwitch = () => {
  const context = useContext(LanguageContext);

  if (!context) return null;

  const { lang, switchLanguage } = context;

  return (
    <div>
      <h3>Current Language: {lang === "en" ? "English" : "Spanish"}</h3>
      <button onClick={() => switchLanguage(lang === "en" ? "es" : "en")}>
        Switch Language
      </button>
    </div>
  );
};

export default LanguageSwitch;



