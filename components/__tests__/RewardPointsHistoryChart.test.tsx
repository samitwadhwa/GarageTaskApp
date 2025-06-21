import { render, screen } from '@testing-library/react';
import { RewardPointsHistoryChart } from '../reward-points-history-chart';
import { useDashboardStore, Points } from '../../lib/store';
import React from 'react';

// Mock Recharts to prevent rendering errors in JSDOM
jest.mock('recharts', () => {
  const OriginalRecharts = jest.requireActual('recharts');
  return {
    ...OriginalRecharts,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="recharts-container">{children}</div>
    ),
  };
});

const initialStoreState = useDashboardStore.getState();

describe('RewardPointsHistoryChart', () => {
  beforeEach(() => {
    useDashboardStore.setState(initialStoreState, true);
  });

  it('shows a loading skeleton initially', () => {
    useDashboardStore.setState({
      points: null,
      pointsLoading: true,
    });
    render(<RewardPointsHistoryChart />);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  it('renders the chart container after loading', async () => {
    const mockPoints: Points = {
      points: 2750,
      goal: 5000,
      history: [
        { month: 'Jan', points: 1200 },
        { month: 'Feb', points: 1800 },
      ],
    };
    useDashboardStore.setState({
      points: mockPoints,
      pointsLoading: false,
    });
    render(<RewardPointsHistoryChart />);
    expect(await screen.findByText('Points History')).toBeInTheDocument();
    // Check for the container from our Recharts mock, not the text inside
    expect(screen.getByTestId('recharts-container')).toBeInTheDocument();
  });
}); 