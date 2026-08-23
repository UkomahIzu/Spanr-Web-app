import React from 'react';
import { useApp } from '../../context/AppContext';
import { MARKETPLACE_LISTINGS } from '../../data/mockData';
import { MarketFilters } from './components/MarketFilters';
import { ListingCard } from './components/ListingCard';
import { ListingDetailView } from './components/ListingDetailView';
import { Button } from '../../components/common/Button';

export function MarketplacePage() {
  const { showToast } = useApp();

  const listingsList = Object.values(MARKETPLACE_LISTINGS);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '24px',
          marginBottom: '28px'
        }}
      >
        <div>
          <h1
            style={{
              font: '600 30px/1.1 var(--ui), sans-serif',
              letterSpacing: '-.02em',
              margin: 0
            }}
          >
            Vehicles for sale
          </h1>
          <p
            style={{
              margin: '10px 0 0',
              font: '400 15px/1.5 var(--ui), sans-serif',
              color: 'var(--ink-60)'
            }}
          >
            Kojo Motors sells vehicles as well as servicing them. Reserve with a deposit, or ask about a trade-in.
          </p>
        </div>

        <Button
          variant="outline"
          onClick={() => showToast('Trade-in valuation request submitted.')}
        >
          Submit trade-in valuation
        </Button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '250px 1fr',
          gap: '24px',
          alignItems: 'start'
        }}
      >
        <MarketFilters />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {listingsList.map((item) => (
            <ListingCard key={item.id} listing={item} />
          ))}
        </div>
      </div>

      {/* Listing Detail Card View */}
      <ListingDetailView />
    </div>
  );
}
