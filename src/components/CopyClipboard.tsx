// src/components/CopyClipboard.jsx
"use client";

import { useClipboard } from "@/hooks";


const CopyClipboard=()=> {
  const textToCopy = "Hey! It's me,your clipboard";
  const { copied, copyToClipboard } = useClipboard(textToCopy);

  return (
    <div>
      <p>{textToCopy}</p>
      <button onClick={copyToClipboard}>Copy</button>
      {copied && <p style={{ color: "green" }}>Copied!</p>}
    </div>
  );

}

export default CopyClipboard;