import { render, screen } from '@testing-library/react';
import { RewardPointsProgress } from '../reward-points-progress';
import { useDashboardStore, Points } from '../../lib/store';
import React from 'react';

const initialStoreState = useDashboardStore.getState();

describe('RewardPointsProgress', () => {
  beforeEach(() => {
    useDashboardStore.setState(initialStoreState);
  });

  it('shows a loading skeleton initially', () => {
    useDashboardStore.setState({
      points: null,
      pointsLoading: true,
    });
    render(<RewardPointsProgress />);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  it('renders the points after loading', async () => {
    const mockPoints: Points = {
      points: 2750,
      goal: 5000,
      history: [],
    };
    useDashboardStore.setState({
      points: mockPoints,
      pointsLoading: false,
    });
    render(<RewardPointsProgress />);
    expect(await screen.findByText('2750')).toBeInTheDocument();
    expect(screen.getByText('/ 5000 pts')).toBeInTheDocument();
  });
}); 