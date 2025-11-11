'use client';
import { useEffect, useState } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 600);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-700 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img
        src="/images/19.png"
        alt="Logo"
        className="h-14 w-auto mb-6 animate-pulse"
      />

      <div className="relative h-12 w-12">
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-blue-800 rounded-full border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
};

export default PreLoader;
