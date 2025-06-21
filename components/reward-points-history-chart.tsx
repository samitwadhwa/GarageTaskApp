"use client";
import { useDashboardStore } from "../lib/store";
import { useEffect } from "react";
import { Skeleton } from "./skeleton";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

export function RewardPointsHistoryChart() {
  const { points, pointsLoading, fetchPoints } = useDashboardStore();

  useEffect(() => {
    fetchPoints();
    // eslint-disable-next-line
  }, []);

  if (pointsLoading || !points) {
    return (
      <div className="w-full max-w-md mx-auto mb-8">
        <Skeleton className="h-40 w-full rounded-xl" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto mb-8 bg-white dark:bg-zinc-900 rounded-2xl shadow p-4">
      <h3 className="text-base font-semibold mb-2 text-zinc-900 dark:text-zinc-100">Points History</h3>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={points.history}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#a1a1aa" />
          <YAxis stroke="#a1a1aa" />
          <Tooltip
            contentStyle={{ background: "#fff", borderRadius: 8, border: "none" }}
            labelStyle={{ color: "#6366f1" }}
          />
          <Bar dataKey="points" fill="#6366f1" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
} 