"use client"
import { useState, useEffect } from "react";

function useLocalStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState<string>(initialValue);

 
  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      if (item !== null) {
        setStoredValue(item);
      }
    } catch (error) {
      console.log("Get error", error);
    }
  }, [key]);

  const setValue = (value: string) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, value);
    } catch (error) {
      console.log("Set error", error);
    }
  };

  const removeValue = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue("");
    } catch (error) {
      console.log("Remove error", error);
    }
  };

  return [storedValue, setValue, removeValue] as const;
}

export default useLocalStorage;
