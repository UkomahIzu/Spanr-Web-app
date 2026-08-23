import React from 'react';
import { Star, UserPlus, User } from 'lucide-react';

export function RecentActivityFeed() {
  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '24px 26px 12px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <h3 style={{ font: '600 17.5px/1.2 var(--ui), sans-serif', margin: '0 0 4px' }}>
        Recent activity
      </h3>

      <div
        style={{
          display: 'flex',
          gap: '13px',
          padding: '18px 0',
          borderBottom: '1px solid rgba(22,24,29,.08)'
        }}
      >
        <span
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '8px',
            background: '#e6f2ee',
            display: 'grid',
            placeItems: 'center',
            flex: 'none'
          }}
        >
          <Star size={16} color="#12735a" strokeWidth={2} />
        </span>
        <div>
          <div style={{ font: '600 14.5px/1.4 var(--ui), sans-serif' }}>+136 points earned</div>
          <div
            style={{
              font: '400 12.5px/1 var(--ui), sans-serif',
              color: 'var(--ink-45)',
              marginTop: '6px'
            }}
          >
            Oil change, 12 Feb
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '13px',
          padding: '18px 0',
          borderBottom: '1px solid rgba(22,24,29,.08)'
        }}
      >
        <span
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '8px',
            background: '#eef3ff',
            display: 'grid',
            placeItems: 'center',
            flex: 'none'
          }}
        >
          <UserPlus size={16} color="#0e4fff" strokeWidth={2} />
        </span>
        <div>
          <div style={{ font: '600 14.5px/1.4 var(--ui), sans-serif' }}>
            Referral joined — Tunde A.
          </div>
          <div
            style={{
              font: '400 12.5px/1 var(--ui), sans-serif',
              color: 'var(--ink-45)',
              marginTop: '6px'
            }}
          >
            +500 points
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '13px', padding: '18px 0' }}>
        <span
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '8px',
            background: '#f1f3f6',
            display: 'grid',
            placeItems: 'center',
            flex: 'none'
          }}
        >
          <User size={16} color="rgba(22,24,29,.5)" strokeWidth={2} />
        </span>
        <div>
          <div style={{ font: '400 14.5px/1.4 var(--ui), sans-serif', color: 'var(--ink-60)' }}>
            Profile updated
          </div>
          <div
            style={{
              font: '400 12.5px/1 var(--ui), sans-serif',
              color: 'var(--ink-45)',
              marginTop: '6px'
            }}
          >
            Phone number changed
          </div>
        </div>
      </div>
    </article>
  );
}
