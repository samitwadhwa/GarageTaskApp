import { create } from "zustand";
import { fetchUser, fetchBenefits, fetchPoints } from "./mock-api";

export type User = {
  name: string;
  avatar: string;
  level: number;
  xp: number;
  xpToNext: number;
};

export type Benefit = {
  id: number;
  icon: string;
  title: string;
  description: string;
  cta: string;
};

export type Points = {
  points: number;
  goal: number;
  history: { month: string; points: number }[];
};

type DashboardState = {
  user: User | null;
  userLoading: boolean;
  benefits: Benefit[];
  benefitsLoading: boolean;
  points: Points | null;
  pointsLoading: boolean;
  fetchUser: () => Promise<void>;
  fetchBenefits: () => Promise<void>;
  fetchPoints: () => Promise<void>;
};

export const useDashboardStore = create<DashboardState>((set) => ({
  user: null,
  userLoading: false,
  benefits: [],
  benefitsLoading: false,
  points: null,
  pointsLoading: false,

  fetchUser: async () => {
    set({ userLoading: true });
    const user = await fetchUser();
    set({ user, userLoading: false });
  },

  fetchBenefits: async () => {
    set({ benefitsLoading: true });
    const benefits = await fetchBenefits();
    set({ benefits, benefitsLoading: false });
  },

  fetchPoints: async () => {
    set({ pointsLoading: true });
    const points = await fetchPoints();
    set({ points, pointsLoading: false });
  },
})); 