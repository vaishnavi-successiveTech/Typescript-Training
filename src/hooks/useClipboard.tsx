"use client";

import { useState } from "react";
import { UseClipboard } from "@/types";

const useClipboard = (text: string): UseClipboard => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }
    } catch (err) {
      console.error("Copy failed:", err);
    }

    document.body.removeChild(textArea);
  };

  return { copied, copyToClipboard };
};

export default useClipboard;
