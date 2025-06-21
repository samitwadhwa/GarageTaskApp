import { RewardPointsProgress } from "./reward-points-progress";
import { RewardPointsHistoryChart } from "./reward-points-history-chart";

export function RewardPointsSection() {
  return (
    <div className="max-w-3xl w-full mx-auto mb-8 flex flex-col md:flex-row gap-6 items-stretch">
      <div className="md:w-1/3 w-full flex items-center justify-center  bg-white dark:bg-zinc-900 rounded-2xl shadow p-4">
        <RewardPointsProgress />
      </div>
      <div className="md:w-2/3 w-full flex items-center  bg-white dark:bg-zinc-900 rounded-2xl shadow p-4">
        <RewardPointsHistoryChart />
      </div>
    </div>
  );
} 