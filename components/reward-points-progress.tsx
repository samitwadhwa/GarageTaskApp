"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Skeleton } from "./skeleton";
import { useDashboardStore } from "../lib/store";

const size = 120;
const stroke = 10;
const radius = (size - stroke) / 2;
const circumference = 2 * Math.PI * radius;

export function RewardPointsProgress() {
  const { points, pointsLoading, fetchPoints } = useDashboardStore();
  const controls = useAnimation();

  useEffect(() => {
    fetchPoints();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!pointsLoading && points) {
      const progress = Math.min(points.points / points.goal, 1);
      controls.start({
        strokeDashoffset: circumference * (1 - progress),
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [controls, pointsLoading, points]);

  if (pointsLoading || !points) {
    return (
      <div className="flex flex-col items-center justify-center mb-8">
        <h2 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Reward Points</h2>
        <div className="relative w-[120px] h-[120px]">
          <Skeleton className="w-full h-full rounded-full" />
        </div>
      </div>
    );
  }


  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <h2 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Reward Points</h2>
      <div className="relative w-[120px] h-[120px]">
        <svg width={size} height={size} className="rotate-[-90deg]">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={stroke}
            fill="none"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={controls}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a21caf" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {points.points}
          </span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">/ {points.goal} pts</span>
        </div>
      </div>
    </div>
  );
} 