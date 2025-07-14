"use client";

import { useLocalStorage } from "@/hooks";
import { useState, ChangeEvent } from "react";

const UserPreference = () => {
  const [nameInput, setNameInput] = useState<string>("");
  const [storedName, setName, removeName] = useLocalStorage("username", "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const handleSave = () => {
    setName(nameInput);
  };

  return (
    <div>
      <h2>Store Data in Local Storage</h2>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
        <input
          type="text"
          value={nameInput}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
        <button onClick={handleSave}>Save Name</button>
        <button onClick={removeName}>Remove Name</button>
      </div>

      {storedName && (
        <p>
          Welcome back, <strong>{storedName}</strong>!
        </p>
      )}
    </div>
  );
};

export default UserPreference;
