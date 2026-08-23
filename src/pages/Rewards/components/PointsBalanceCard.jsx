import React from 'react';
import { USER_PROFILE } from '../../../data/mockData';

export function PointsBalanceCard() {
  return (
    <article
      style={{
        background: '#e9f4f0',
        border: '1px solid #c3ded5',
        color: '#124c3d',
        borderRadius: '10px',
        padding: '30px 30px 32px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span
          style={{
            font: '800 11px/1 var(--ui), sans-serif',
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: 'rgba(18,76,61,.62)'
          }}
        >
          Your balance
        </span>
        <span
          style={{
            font: '700 12px/1 var(--ui), sans-serif',
            letterSpacing: '.01em',
            padding: '6px 8px',
            borderRadius: '5px',
            background: '#12735a',
            color: '#fff'
          }}
        >
          Silver
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginTop: '24px' }}>
        <span style={{ font: '800 54px/1 var(--ui), sans-serif', letterSpacing: '-.03em' }}>
          {USER_PROFILE.points.toLocaleString()}
        </span>
        <span style={{ font: '600 14px/1 var(--ui), sans-serif', color: 'rgba(18,76,61,.66)' }}>
          points
        </span>
      </div>

      <div style={{ height: '7px', borderRadius: '4px', background: 'rgba(18,115,90,.18)', marginTop: '26px' }}>
        <div style={{ width: '62%', height: '7px', borderRadius: '4px', background: '#12735a' }} />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '12px',
          font: '400 12px/1 var(--ui), sans-serif',
          color: 'rgba(18,76,61,.66)'
        }}
      >
        <span>Silver</span>
        <span>{USER_PROFILE.nextTier}</span>
      </div>

      <p style={{ margin: '18px 0 0', font: '400 13px/1.5 var(--ui), sans-serif', color: 'rgba(18,76,61,.78)' }}>
        ₦100 spent = 2 points. Gold members earn 3.
      </p>
    </article>
  );
}
