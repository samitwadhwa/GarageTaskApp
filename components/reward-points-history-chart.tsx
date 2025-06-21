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
      <div className="max-w-3xl w-full mx-auto mb-8 flex justify-center">
        <div className="w-full flex flex-col items-center">
          <Skeleton className="h-40 w-full rounded-xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl w-full mx-auto  flex justify-center">
      <div className="w-full flex flex-col items-center">
        <div className="w-full  mx-auto ">
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
      </div>
    </div>
  );
} 