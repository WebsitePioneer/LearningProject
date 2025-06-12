"use client";
import { useState, useEffect, useRef } from "react";

export default function Training() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="w-full h-screen bg-white flex flex-col items-center justify-center">
        {isLoading && (
          <div className="text-center text-gray-500 animate-pulse">
            Loading Training Platform...
          </div>
        )}
        <div id="iframe-container" className="w-full h-full">
          <iframe
            src="https://app.meetchess.com"
            className="w-full h-screen border-none"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
      {/* <div className="w-full h-10 bg-green-200 z-99 -mt-6 mb-16"></div> */}
    </>
  );
}
