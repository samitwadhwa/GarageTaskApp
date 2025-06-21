import { UserProfileSummary } from "../components/user-profile-summary";
import { BenefitsSection } from "../components/benefits-section";
import { RewardPointsSection } from "../components/reward-points-section";
import { RevealOnScroll } from "../components/reveal-on-scroll";

export default function Home() {
  return (
    <div>
      <RevealOnScroll delay={0}>
        <UserProfileSummary />
      </RevealOnScroll>
      <RevealOnScroll delay={0.2}>
        <BenefitsSection />
      </RevealOnScroll>
      <RevealOnScroll delay={0.4}>
        <RewardPointsSection />
      </RevealOnScroll>
    </div>
  );
}
