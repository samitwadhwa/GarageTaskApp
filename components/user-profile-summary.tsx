"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Skeleton } from "./skeleton";
import { useDashboardStore } from "../lib/store";


export function UserProfileSummary() {
  const { user, userLoading, fetchUser } = useDashboardStore();

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, []);

  if (userLoading || !user) {
    return (
      <div className="max-w-md w-full mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 flex items-center gap-6 mb-8">
        <Skeleton className="w-20 h-20 rounded-full" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-5 w-16" />
          </div>
          <Skeleton className="h-4 w-28 mb-2" />
          <Skeleton className="h-3 w-full" />
        </div>
      </div>
    );
  }

  const progress = Math.min(user.xp / user.xpToNext, 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-md w-full mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 flex items-center gap-6 mb-8"
    >
      <img
        src={user.avatar}
        alt={user.name}
        className="w-20 h-20 rounded-full border-4 border-zinc-100 dark:border-zinc-800 object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {user.name}
          </span>
          <span className="text-xs bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 px-2 py-0.5 rounded-full font-semibold">
            Level {user.level}
          </span>
        </div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
          XP: {user.xp} / {user.xpToNext}
        </div>
        <div className="w-full h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="h-3 bg-gradient-to-r from-indigo-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
} 