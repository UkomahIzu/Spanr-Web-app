import React from 'react';
import { useApp } from '../../../context/AppContext';
import { USER_PROFILE } from '../../../data/mockData';
import { Button } from '../../../components/common/Button';

export function UserProfileForm() {
  const { showToast } = useApp();

  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '28px 30px 30px',
        marginBottom: '24px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '26px' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '12px',
            background: '#0e4fff',
            color: '#fff',
            display: 'grid',
            placeItems: 'center',
            font: '800 20px/1 var(--ui), sans-serif'
          }}
        >
          {USER_PROFILE.initials}
        </div>
        <div>
          <div style={{ font: '800 20px/1.2 var(--ui), sans-serif' }}>
            {USER_PROFILE.name}
          </div>
          <div
            style={{
              font: '400 13px/1 var(--ui), sans-serif',
              color: 'var(--ink-60)',
              marginTop: '8px'
            }}
          >
            Customer since {USER_PROFILE.customerSince} · {USER_PROFILE.memberTier}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <div style={{ font: '600 12.5px/1 var(--ui), sans-serif', color: 'var(--ink-60)', marginBottom: '8px' }}>
            Full name
          </div>
          <div
            style={{
              height: '48px',
              border: '1px solid rgba(22,24,29,.16)',
              borderRadius: '9px',
              display: 'flex',
              alignItems: 'center',
              padding: '0 15px',
              font: '400 14px/1 var(--ui), sans-serif'
            }}
          >
            {USER_PROFILE.name}
          </div>
        </div>

        <div>
          <div style={{ font: '600 12.5px/1 var(--ui), sans-serif', color: 'var(--ink-60)', marginBottom: '8px' }}>
            Phone number
          </div>
          <div
            style={{
              height: '48px',
              border: '1px solid rgba(22,24,29,.16)',
              borderRadius: '9px',
              display: 'flex',
              alignItems: 'center',
              padding: '0 15px',
              font: '400 14px/1 var(--ui), sans-serif'
            }}
          >
            {USER_PROFILE.phone}
          </div>
        </div>

        <div>
          <div style={{ font: '600 12.5px/1 var(--ui), sans-serif', color: 'var(--ink-60)', marginBottom: '8px' }}>
            Email
          </div>
          <div
            style={{
              height: '48px',
              border: '1px solid rgba(22,24,29,.16)',
              borderRadius: '9px',
              display: 'flex',
              alignItems: 'center',
              padding: '0 15px',
              font: '400 14px/1 var(--ui), sans-serif'
            }}
          >
            {USER_PROFILE.email}
          </div>
        </div>

        <div>
          <div style={{ font: '600 12.5px/1 var(--ui), sans-serif', color: 'var(--ink-60)', marginBottom: '8px' }}>
            Delivery address
          </div>
          <div
            style={{
              height: '48px',
              border: '1px solid rgba(22,24,29,.16)',
              borderRadius: '9px',
              display: 'flex',
              alignItems: 'center',
              padding: '0 15px',
              font: '400 14px/1 var(--ui), sans-serif'
            }}
          >
            {USER_PROFILE.address}
          </div>
        </div>
      </div>

      <Button
        variant="primary"
        style={{ marginTop: '24px' }}
        onClick={() => showToast('Profile updated.')}
      >
        Save changes
      </Button>
    </article>
  );
}
