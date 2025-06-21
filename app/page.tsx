import { UserProfileSummary } from "../components/user-profile-summary";
import { BenefitsSection } from "../components/benefits-section";
import { RewardPointsProgress } from "../components/reward-points-progress";
import { RewardPointsHistoryChart } from "../components/reward-points-history-chart";

export default function Home() {
  return (
    <div>
      <UserProfileSummary />
      <BenefitsSection />
      <RewardPointsProgress />
      <RewardPointsHistoryChart />
    </div>
  );
}
