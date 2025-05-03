"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    const dot = document.createElement("div");

    cursor.className = "cursor-ring";
    dot.className = "cursor-dot";

    document.body.appendChild(cursor);
    document.body.appendChild(dot);

    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", move);

    return () => {
      document.removeEventListener("mousemove", move);
      document.body.removeChild(cursor);
      document.body.removeChild(dot);
    };
  }, []);

  return null;
}
