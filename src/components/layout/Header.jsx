import React from 'react';
import { useApp } from '../../context/AppContext';
import { Button } from '../common/Button';
import { Search, Bell, Plus } from 'lucide-react';

const PAGE_TITLES = {
  home: 'Dashboard',
  book: 'Book a Service',
  diagnostic: 'Diagnostic Request',
  track: 'My Visits',
  quote: 'Quotes',
  pay: 'Checkout',
  vehicles: 'My Vehicles',
  rewards: 'Rewards',
  market: 'Marketplace',
  notif: 'Notifications',
  profile: 'Profile & Settings'
};

export function Header() {
  const { screen, navigateTo } = useApp();

  const title = PAGE_TITLES[screen] || 'Dashboard';

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '32px',
        height: '82px',
        flex: 'none',
        padding: '0 36px',
        background: '#fff',
        borderBottom: '1px solid rgba(22,24,29,.12)',
        boxSizing: 'border-box'
      }}
    >
      <div style={{ font: '800 17px/1.2 var(--ui), sans-serif' }}>
        {title}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
        {/* Search Bar Input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            width: '320px',
            height: '44px',
            padding: '0 15px',
            border: '1px solid rgba(22,24,29,.14)',
            borderRadius: '9px',
            background: '#fafbfc'
          }}
        >
          <Search size={17} strokeWidth={2} color="rgba(22,24,29,.45)" />
          <span style={{ font: '400 14px/1 var(--ui), sans-serif', color: 'var(--ink-45)' }}>
            Search services, visits, invoices
          </span>
        </div>

        {/* Notifications Bell */}
        <button
          aria-label="Notifications"
          onClick={() => navigateTo('notif')}
          className="hover-blue-accent"
          style={{
            position: 'relative',
            width: '44px',
            height: '44px',
            display: 'grid',
            placeItems: 'center',
            background: '#fff',
            border: '1px solid rgba(22,24,29,.14)',
            borderRadius: '9px',
            cursor: 'pointer',
            color: '#16181d'
          }}
        >
          <Bell size={19} strokeWidth={2} />
          <span
            style={{
              position: 'absolute',
              top: '8px',
              right: '9px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#e07b00'
            }}
          />
        </button>

        {/* Book a Service CTA */}
        <Button
          onClick={() => navigateTo('book')}
          icon={Plus}
          variant="primary"
          size="md"
        >
          Book a Service
        </Button>
      </div>
    </header>
  );
}
