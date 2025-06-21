"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Gift, Percent, Ticket } from "lucide-react";
import { Skeleton } from "./skeleton";
import { useDashboardStore, Benefit } from "../lib/store";
import { toast } from "sonner";

const iconMap = {
  gift: <Gift className="w-7 h-7 text-indigo-500" />,
  percent: <Percent className="w-7 h-7 text-green-500" />,
  ticket: <Ticket className="w-7 h-7 text-pink-500" />,
};

export function BenefitsSection() {
  const { benefits, benefitsLoading, fetchBenefits } = useDashboardStore();
  useEffect(() => {
    fetchBenefits();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="max-w-3xl w-full mx-auto mb-8">
      <h2 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Your Benefits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {benefitsLoading || !benefits.length
          ? Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-zinc-900 rounded-xl shadow p-5 flex flex-col items-start gap-3"
              >
                <Skeleton className="w-7 h-7 mb-2" />
                <Skeleton className="h-5 w-24 mb-1" />
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-8 w-20 mt-2" />
              </div>
            ))
          : benefits.map((benefit: Benefit, i: number) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="bg-white dark:bg-zinc-900 rounded-xl shadow p-5 flex flex-col items-start gap-3 hover:scale-[1.03] hover:shadow-lg transition-transform cursor-pointer"
              >
                <div>{iconMap[benefit.icon as keyof typeof iconMap]}</div>
                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-base">{benefit.title}</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400 flex-1">{benefit.description}</div>
                <button
                  onClick={() => {
                    if (benefit.cta === "View") {
                      toast.success("Successfully viewed!", {
                        style: { background: "#6366f1", color: "#fff" }, // indigo
                      });
                    } else {
                      toast.success("Benefit claimed!", {
                        style: { background: "#a21caf", color: "#fff" }, // purple
                      });
                    }
                  }}
                  className="mt-2 px-4 py-1.5 rounded-full bg-indigo-600 text-white cursor-pointer text-sm font-semibold hover:bg-indigo-700 transition"
                >
                  {benefit.cta}
                </button>
              </motion.div>
            ))}
      </div>
    </section>
  );
} 