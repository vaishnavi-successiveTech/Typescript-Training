"use client";

import { ChildrenProp } from "@/types";
import React, { createContext, useState } from "react";


// define the context type 
interface ThemeContextType{
    theme :string;
    toggleTheme:()=>void;
}

// create the context with an initial value 
export const ThemeContext=createContext< ThemeContextType | undefined>(undefined); // initial value is compulsory 



const ThemeContextProvider=({children}:ChildrenProp)=>{
    const[theme,setTheme]=useState<string>("light");

    const toggleTheme=()=>{
        setTheme((prev)=>(prev==="light"?"dark":"light"));
    }

    return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>

        {children}
    </ThemeContext.Provider>
    )
}


export default ThemeContextProvider;

