"use client";
import { useState, useEffect } from "react";

export default function Training() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="w-full h-screen bg-white flex flex-col items-center justify-center mb-16">
        {isLoading && (
          <div className="text-center text-gray-500 animate-pulse">
            Loading Training Platform...
          </div>
        )}

        <iframe
          src="https://app.meetchess.com"
          className="w-full h-screen border-none"
          onLoad={() => setIsLoading(false)}
        />
      </div>
      {/* <div className="w-full h-10 bg-green-200 z-99 -mt-6 mb-16"></div> */}
    </>
  );
}
