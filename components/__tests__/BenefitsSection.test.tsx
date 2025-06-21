import { render, screen } from '@testing-library/react';
import { BenefitsSection } from '../benefits-section';
import { useDashboardStore, Benefit } from '../../lib/store';
import React from 'react';

const initialStoreState = useDashboardStore.getState();

describe('BenefitsSection', () => {
  beforeEach(() => {
    // Reset store state before each test
    useDashboardStore.setState(initialStoreState);
  });

  it('shows loading skeletons initially', () => {
    useDashboardStore.setState({
      benefits: [],
      benefitsLoading: true,
    });
    render(<BenefitsSection />);
    const skeletonContainer = screen.getByText('Your Benefits').parentElement;
    const skeletons = skeletonContainer?.querySelectorAll('.animate-pulse');
    expect(skeletons?.length).toBeGreaterThan(0);
  });

  it('renders benefit cards after loading', async () => {
    const mockBenefits: Benefit[] = [
      { id: 1, icon: 'gift', title: 'Welcome Gift', description: '...', cta: 'Claim' },
      { id: 2, icon: 'percent', title: 'Exclusive Discounts', description: '...', cta: 'View' },
    ];
    useDashboardStore.setState({
      benefits: mockBenefits,
      benefitsLoading: false,
    });

    render(<BenefitsSection />);
    expect(await screen.findByText('Welcome Gift')).toBeInTheDocument();
    expect(screen.getByText('Exclusive Discounts')).toBeInTheDocument();
  });
}); 