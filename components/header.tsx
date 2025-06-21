"use client";
import { useTheme } from "./theme-provider";
import { UserAvatarMenu } from "./UserAvatarMenu";

export function Header() {
  const { toggleTheme } = useTheme();
  return (
    <div suppressHydrationWarning>
      <header className="w-full flex items-center justify-between px-4 py-3 border-b-0 shadow-lg bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md relative z-10 mb-4">
        <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x" />
        <span className="font-bold text-lg tracking-tight">Garage Dashboard</span>
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            className="w-9 h-9 rounded-full cursor-pointer bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:ring-2 ring-zinc-300 dark:ring-zinc-700 transition"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            🌗
          </button>
          {/* User Avatar Popout */}
          <UserAvatarMenu />
        </div>
      </header>
    </div>
  );
} 