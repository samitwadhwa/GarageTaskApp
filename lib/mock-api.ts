export async function fetchUser() {
  await new Promise((r) => setTimeout(r, 1000));
  return {
    name: "Samit Wadhwa",
    avatar: "https://ui-avatars.com/api/?name=Samit+Wadhwa&background=random",
    level: 5,
    xp: 3400,
    xpToNext: 5000,
  };
}

export async function fetchBenefits() {
  await new Promise((r) => setTimeout(r, 1000));
  return [
    {
      id: 1,
      icon: "gift",
      title: "Welcome Gift",
      description: "Get a special welcome gift on your first login!",
      cta: "Claim",
    },
    {
      id: 2,
      icon: "percent",
      title: "Exclusive Discounts",
      description: "Unlock member-only discounts on top brands.",
      cta: "View",
    },
    {
      id: 3,
      icon: "ticket",
      title: "Voucher Bonanza",
      description: "Collect vouchers and save more on your next purchase.",
      cta: "Claim",
    },
  ];
}

export async function fetchPoints() {
  await new Promise((r) => setTimeout(r, 1000));
  return {
    points: 2750,
    goal: 5000,
    history: [
      { month: "Jan", points: 1200 },
      { month: "Feb", points: 1800 },
      { month: "Mar", points: 2750 },
    ],
  };
} 