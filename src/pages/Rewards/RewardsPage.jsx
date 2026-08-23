import React from 'react';
import { LoyaltyHero } from './components/LoyaltyHero';
import { PointsBalanceCard } from './components/PointsBalanceCard';
import { ReferralCard } from './components/ReferralCard';
import { RedeemGrid } from './components/RedeemGrid';

export function RewardsPage() {
  return (
    <div>
      <div style={{ marginBottom: '28px' }}>
        <h1
          style={{
            font: '600 30px/1.1 var(--ui), sans-serif',
            letterSpacing: '-.02em',
            margin: 0
          }}
        >
          Rewards &amp; loyalty
        </h1>
        <p
          style={{
            margin: '10px 0 0',
            font: '400 15px/1.5 var(--ui), sans-serif',
            color: 'var(--ink-60)'
          }}
        >
          Points are funded and set by Kojo Motors. They apply at this shop only.
        </p>
      </div>

      <LoyaltyHero />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          marginBottom: '24px'
        }}
      >
        <PointsBalanceCard />
        <ReferralCard />
      </div>

      <RedeemGrid />

      {/* Activity Log */}
      <article
        style={{
          background: '#fff',
          border: '1px solid rgba(22,24,29,.12)',
          borderRadius: '10px',
          padding: '26px 28px 20px'
        }}
      >
        <h3 style={{ font: '600 17.5px/1.2 var(--ui), sans-serif', margin: '0 0 14px' }}>
          Activity
        </h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid rgba(22,24,29,.08)', font: '400 14px/1.3 var(--ui), sans-serif' }}>
          <span>Oil change, JOB-4390</span>
          <span style={{ fontWeight: 700, color: '#12735a' }}>+136</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid rgba(22,24,29,.08)', font: '400 14px/1.3 var(--ui), sans-serif' }}>
          <span>Referral joined — Tunde A.</span>
          <span style={{ fontWeight: 700, color: '#12735a' }}>+500</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', font: '400 14px/1.3 var(--ui), sans-serif' }}>
          <span>Redeemed ₦5,000 off</span>
          <span style={{ fontWeight: 700, color: 'var(--ink-60)' }}>−500</span>
        </div>
      </article>
    </div>
  );
}
