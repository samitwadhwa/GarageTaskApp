"use client";
import { useState, useRef, useEffect } from "react";

export function UserAvatarMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close menu on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <div
        className="w-9 h-9 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-semibold text-zinc-500 dark:text-zinc-300">U</span>
      </div>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-900 rounded-xl shadow-lg py-2 z-50 border border-zinc-200 dark:border-zinc-800 animate-fade-in">
          <button className="block w-full text-left px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">Profile</button>
          <button className="block w-full text-left px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">Settings</button>
          <button className="block w-full text-left px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">Logout</button>
        </div>
      )}
    </div>
  );
}