# CRED Garage Inspired Dashboard

This is a modern, responsive web dashboard inspired by CRED Garage, built with Next.js, TailwindCSS, and Framer Motion. It includes a variety of features designed to showcase excellent UI/UX practices, subtle animations, and a production-ready setup.

## ✨ Features Overview

-   **👤 User Profile Summary**: Displays user avatar, name, level, and a gamification progress bar for XP.
-   **🎁 Benefits Section**: A responsive card tile layout showcasing benefits like discounts and vouchers, each with a title, icon, description, and CTA.
-   **💎 Reward Points Progress**: A beautiful animated radial progress bar for tracking reward points.
-   **📊 Reward Points History**: A responsive bar chart from Recharts displaying points history over time.
-   **🌓 Dark/Light Mode**: A persistent theme toggle that respects user's system preference and saves their choice in `localStorage`.
-   **⏳ Loading Skeletons**: Smooth loading skeletons for all data-driven components to improve perceived performance.
-   **💫 Smooth Transitions & Animations**: Elegant animations using Framer Motion for layout transitions, hover effects, and entrance animations.
-   **📞 Mock API Layer**: Simulates fetching data from a real backend with built-in delays.
-   **🧠 Global State Management**: Uses Zustand for a clean, scalable, and centralized state management solution.
-   **✅ Unit & Component Tests**: Includes a testing setup with Jest and React Testing Library, complete with a sample test.
-   **📱 Responsive Design**: A mobile-first design that looks great on all screen sizes.

## 🛠️ Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (React)
-   **Styling**: [TailwindCSS](https://tailwindcss.com/)
-   **UI Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **State Management**: [Zustand](https://github.com/pmndrs/zustand)
-   **Charting**: [Recharts](https://recharts.org/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18.x or later)
-   npm or yarn

### Setup & Installation

1.  **Clone the repository:**
    ```sh
    git clone <your-repo-url>
    cd <repo-folder>
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd taskapp
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Running Tests

To run the component tests, use the following command:

```sh
npx jest
```

Or for watch mode:

```sh
npx jest --watch
```

## ☁️ Deployment

This Next.js application is ready for deployment on https://dashboard-task-app-nine.vercel.app (VERCEL), the platform from the creators of Next.js.

1.  Push your code to a GitHub repository.
2.  Sign up for a Vercel account and import the repository.
3.  Vercel will automatically detect the Next.js project and configure the build settings.
4.  Click "Deploy" and your dashboard will be live! 

### 📱 Screenshots
## Dark Theme
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/9cf437d8-3e57-4120-ab5b-006f03ee5753" />
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/b01b6e03-8c91-4a6f-893e-b3045473db6b" />

## Light Theme
<img width="1469" alt="image" src="https://github.com/user-attachments/assets/758dd359-2e20-4db3-8664-48a7bfb7b772" />


