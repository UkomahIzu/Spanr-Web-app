import React from 'react';
import { USER_PROFILE } from '../../../data/mockData';

export function StatCardsGrid() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        marginBottom: '24px'
      }}
    >
      {/* Active visits */}
      <div
        style={{
          background: '#fff',
          border: '1px solid rgba(22,24,29,.12)',
          borderRadius: '10px',
          padding: '22px 24px'
        }}
      >
        <div style={{ font: '600 13px/1 var(--ui), sans-serif', color: 'var(--ink-60)' }}>
          Active visits
        </div>
        <div
          style={{
            font: '800 32px/1 var(--ui), sans-serif',
            letterSpacing: '-.02em',
            marginTop: '14px'
          }}
        >
          {USER_PROFILE.activeVisitsCount}
        </div>
      </div>

      {/* Awaiting approval */}
      <div
        style={{
          background: '#fff8ee',
          border: '1px solid #f0d3a8',
          borderRadius: '10px',
          padding: '22px 24px'
        }}
      >
        <div style={{ font: '600 13px/1 var(--ui), sans-serif', color: '#8a4b00' }}>
          Awaiting your approval
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginTop: '14px' }}>
          <span
            style={{
              font: '800 32px/1 var(--ui), sans-serif',
              letterSpacing: '-.02em',
              color: '#8a4b00'
            }}
          >
            {USER_PROFILE.pendingQuotesCount}
          </span>
          <span style={{ font: '600 13px/1 var(--ui), sans-serif', color: '#8a4b00' }}>
            quote
          </span>
        </div>
      </div>

      {/* Reward points */}
      <div
        style={{
          background: '#fff',
          border: '1px solid rgba(22,24,29,.12)',
          borderRadius: '10px',
          padding: '22px 24px'
        }}
      >
        <div style={{ font: '600 13px/1 var(--ui), sans-serif', color: 'var(--ink-60)' }}>
          Reward points
        </div>
        <div
          style={{
            font: '800 32px/1 var(--ui), sans-serif',
            letterSpacing: '-.02em',
            marginTop: '14px',
            color: '#12735a'
          }}
        >
          {USER_PROFILE.points.toLocaleString()}
        </div>
      </div>

      {/* Spent this year */}
      <div
        style={{
          background: '#eef3ff',
          border: '1px solid #c9d8ff',
          borderRadius: '10px',
          padding: '22px 24px'
        }}
      >
        <div style={{ font: '600 13px/1 var(--ui), sans-serif', color: '#0930a0' }}>
          Spent this year
        </div>
        <div
          style={{
            font: '800 32px/1 var(--ui), sans-serif',
            letterSpacing: '-.02em',
            marginTop: '14px',
            color: '#0e4fff'
          }}
        >
          {USER_PROFILE.spentThisYear}
        </div>
      </div>
    </div>
  );
}
