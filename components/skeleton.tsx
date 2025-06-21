"use client";
import React from "react";

export function Skeleton({ className, 'data-testid': dataTestId }: { className?: string; 'data-testid'?: string }) {
  return (
    <div
      className={`bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse ${className || ""}`}
      data-testid={dataTestId || 'skeleton'}
    ></div>
  );
} 