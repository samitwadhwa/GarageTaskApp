"use client";
import { useTheme } from "./theme-provider";

export function Header() {
  const { toggleTheme } = useTheme();
  return (
    <header className="w-full flex items-center justify-between px-4 py-3 border-b bg-white dark:bg-zinc-900 dark:border-zinc-800">
      <span className="font-bold text-lg tracking-tight">Garage Dashboard</span>
      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        <button
          className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:ring-2 ring-zinc-300 dark:ring-zinc-700 transition"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          🌗
        </button>
        {/* User Avatar Placeholder */}
        <div className="w-9 h-9 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
          <span className="font-semibold text-zinc-500 dark:text-zinc-300">U</span>
        </div>
      </div>
    </header>
  );
} 