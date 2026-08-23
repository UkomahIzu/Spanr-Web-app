import React from 'react';
import { USER_PROFILE } from '../../data/mockData';
import { WorkshopBanner } from './components/WorkshopBanner';
import { StatCardsGrid } from './components/StatCardsGrid';
import { ActiveVisitCard } from './components/ActiveVisitCard';
import { RewardsPreviewCard } from './components/RewardsPreviewCard';
import { RecentVisitsTable } from './components/RecentVisitsTable';
import { NotificationsListCard } from '../Notifications/components/NotificationList';
import { RecentActivityFeed } from './components/RecentActivityFeed';
import { MaintenanceCatalogPreview } from './components/MaintenanceCatalogPreview';
import { MarketplaceBanner } from './components/MarketplaceBanner';

export function DashboardPage() {
  return (
    <div>
      {/* Welcome Header */}
      <div style={{ marginBottom: '24px' }}>
        <div
          style={{
            font: '800 11px/1 var(--ui), sans-serif',
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: '#0e4fff',
            marginBottom: '12px'
          }}
        >
          Tuesday, 11 August
        </div>
        <h1
          style={{
            font: '600 34px/1.1 var(--ui), sans-serif',
            letterSpacing: '-.02em',
            margin: 0
          }}
        >
          Welcome back, {USER_PROFILE.name.split(' ')[0]}
        </h1>
        <p
          style={{
            margin: '10px 0 0',
            font: '400 15px/1.5 var(--ui), sans-serif',
            color: 'var(--ink-60)'
          }}
        >
          Your C300 is at Kojo Motors, Ikeja. The quote is ready for your approval.
        </p>
      </div>

      {/* Workshop Banner */}
      <WorkshopBanner />

      {/* Stats Cards */}
      <StatCardsGrid />

      {/* Active Visit & Rewards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '24px',
          alignItems: 'stretch',
          marginBottom: '24px'
        }}
      >
        <ActiveVisitCard />
        <RewardsPreviewCard />
      </div>

      {/* Recent Visits Table */}
      <RecentVisitsTable />

      {/* 3-Column Grid: Notifications Summary, Recent Activity, Maintenance Catalogue */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          alignItems: 'stretch',
          marginBottom: '24px'
        }}
      >
        <NotificationsListCard previewMode />
        <RecentActivityFeed />
        <MaintenanceCatalogPreview />
      </div>

      {/* Marketplace Banner */}
      <MarketplaceBanner />
    </div>
  );
}
