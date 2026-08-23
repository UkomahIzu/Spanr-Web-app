import React from 'react';
import { useApp } from '../../../context/AppContext';
import { USER_PROFILE } from '../../../data/mockData';
import { Button } from '../../../components/common/Button';

export function ReferralCard() {
  const { showToast } = useApp();

  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '28px 28px 30px'
      }}
    >
      <h3 style={{ font: '600 17.5px/1.2 var(--ui), sans-serif', margin: '0 0 20px' }}>
        Refer a friend
      </h3>
      <p style={{ margin: '0 0 20px', font: '400 14px/1.6 var(--ui), sans-serif', color: 'var(--ink-60)' }}>
        Both of you get 500 points when they complete their first paid visit at Kojo Motors.
      </p>

      <div style={{ display: 'flex', gap: '10px' }}>
        <div
          style={{
            flex: 1,
            height: '48px',
            border: '1px solid rgba(22,24,29,.16)',
            borderRadius: '9px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 15px',
            font: '700 14px/1 var(--ui), sans-serif',
            letterSpacing: '.06em'
          }}
        >
          {USER_PROFILE.referralCode}
        </div>
        <Button
          variant="primary"
          onClick={() => showToast('Referral code copied to clipboard.')}
        >
          Copy code
        </Button>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '36px',
          marginTop: '26px',
          paddingTop: '22px',
          borderTop: '1px solid rgba(22,24,29,.1)'
        }}
      >
        <div>
          <div style={{ font: '400 11px/1 var(--ui), sans-serif', color: 'var(--ink-45)' }}>Invited</div>
          <div style={{ font: '800 20px/1 var(--ui), sans-serif', marginTop: '8px' }}>
            {USER_PROFILE.referralsInvited}
          </div>
        </div>
        <div>
          <div style={{ font: '400 11px/1 var(--ui), sans-serif', color: 'var(--ink-45)' }}>Joined</div>
          <div style={{ font: '800 20px/1 var(--ui), sans-serif', marginTop: '8px' }}>
            {USER_PROFILE.referralsJoined}
          </div>
        </div>
        <div>
          <div style={{ font: '400 11px/1 var(--ui), sans-serif', color: 'var(--ink-45)' }}>Points earned</div>
          <div style={{ font: '800 20px/1 var(--ui), sans-serif', marginTop: '8px' }}>
            {USER_PROFILE.referralPointsEarned.toLocaleString()}
          </div>
        </div>
      </div>
    </article>
  );
}
