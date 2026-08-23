import React from 'react';
import { useApp } from '../../../context/AppContext';
import { USER_PROFILE } from '../../../data/mockData';
import { Button } from '../../../components/common/Button';

export function RewardsPreviewCard() {
  const { navigateTo } = useApp();

  return (
    <article
      style={{
        background: '#e9f4f0',
        border: '1px solid #c3ded5',
        color: '#124c3d',
        borderRadius: '10px',
        padding: '26px 26px 28px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <span
          style={{
            font: '800 11px/1 var(--ui), sans-serif',
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: 'rgba(18,76,61,.62)'
          }}
        >
          Rewards
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

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginTop: '22px' }}>
        <span style={{ font: '800 46px/1 var(--ui), sans-serif', letterSpacing: '-.03em' }}>
          {USER_PROFILE.points.toLocaleString()}
        </span>
        <span style={{ font: '600 13.5px/1 var(--ui), sans-serif', color: 'rgba(18,76,61,.66)' }}>
          points
        </span>
      </div>

      <div style={{ height: '7px', borderRadius: '4px', background: 'rgba(18,115,90,.18)', marginTop: '22px' }}>
        <div style={{ width: '62%', height: '7px', borderRadius: '4px', background: '#12735a' }} />
      </div>

      <p style={{ margin: '13px 0 0', font: '400 13.5px/1.55 var(--ui), sans-serif', color: 'rgba(18,76,61,.78)' }}>
        760 points to a free oil change at Kojo Motors.
      </p>

      <div
        style={{
          display: 'flex',
          gap: '26px',
          marginTop: '22px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(18,115,90,.22)'
        }}
      >
        <div>
          <div style={{ font: '400 12px/1 var(--ui), sans-serif', color: 'rgba(18,76,61,.66)' }}>
            Redeemable
          </div>
          <div style={{ font: '800 19px/1 var(--ui), sans-serif', marginTop: '8px' }}>
            ₦12,400
          </div>
        </div>
        <div>
          <div style={{ font: '400 12px/1 var(--ui), sans-serif', color: 'rgba(18,76,61,.66)' }}>
            Referrals
          </div>
          <div style={{ font: '800 19px/1 var(--ui), sans-serif', marginTop: '8px' }}>
            {USER_PROFILE.referralsJoined} joined
          </div>
        </div>
      </div>

      <Button
        variant="green"
        fullWidth
        style={{ marginTop: 'auto', marginTop: '22px' }}
        onClick={() => navigateTo('rewards')}
      >
        View rewards
      </Button>
    </article>
  );
}
