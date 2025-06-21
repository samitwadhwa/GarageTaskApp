import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { UserProfileSummary } from '../user-profile-summary';
import React from 'react';

jest.mock('../../lib/store', () => {
  const actual = jest.requireActual('../../lib/store');
  return {
    ...actual,
    useDashboardStore: () => ({
      user: {
        name: 'Test User',
        avatar: 'https://ui-avatars.com/api/?name=Test+User',
        level: 3,
        xp: 1500,
        xpToNext: 2000,
      },
      userLoading: false,
      fetchUser: jest.fn(),
    }),
  };
});

describe('UserProfileSummary', () => {
  it('renders user info after loading', async () => {
    render(<UserProfileSummary />);
    // Should show user name
    expect(await screen.findByText('Test User')).toBeInTheDocument();
    // Should show level
    expect(screen.getByText(/Level 3/)).toBeInTheDocument();
    // Should show XP
    expect(screen.getByText(/XP: 1500/)).toBeInTheDocument();
  });
}); 