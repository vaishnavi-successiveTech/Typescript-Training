"use client"
import { ChildrenProp, LanguageContextType } from '@/types';
import React, { createContext, useState } from 'react'


 export const LanguageContext=createContext<LanguageContextType | undefined>(undefined);

const LanguageContextProvider = ({children}:ChildrenProp) => {
    const [lang,setLanguage]=useState<string>("en");
    
   const switchLanguage = (): void => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };
  return (
   <LanguageContext.Provider value={{lang,switchLanguage}}>
    {children}


   </LanguageContext.Provider>
  )
}

export default LanguageContextProvider;
