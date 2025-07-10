import { useState } from "react";

function useLocalStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState<string>(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? item : initialValue;
    } catch (error) {
      console.log("Get error", error);
      return initialValue;
    }
  });

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
