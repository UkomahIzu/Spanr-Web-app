import React from 'react';
import { useApp } from '../../../context/AppContext';
import { Button } from '../../../components/common/Button';

export function RedeemGrid() {
  const { showToast } = useApp();

  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '26px 28px 28px',
        marginBottom: '24px'
      }}
    >
      <h3 style={{ font: '600 17.5px/1.2 var(--ui), sans-serif', margin: '0 0 20px' }}>
        Redeem
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>
        {/* Item 1 */}
        <div style={{ border: '1px solid rgba(22,24,29,.12)', borderRadius: '9px', padding: '22px' }}>
          <div style={{ font: '800 15px/1.25 var(--ui), sans-serif' }}>₦5,000 off any service</div>
          <div style={{ font: '400 13px/1 var(--ui), sans-serif', color: 'var(--ink-60)', marginTop: '9px' }}>
            500 points
          </div>
          <Button
            variant="primary"
            fullWidth
            style={{ marginTop: '18px' }}
            onClick={() => showToast('Redeemed! ₦5,000 off applied to your next visit.')}
          >
            Redeem
          </Button>
        </div>

        {/* Item 2 */}
        <div style={{ border: '1px solid rgba(22,24,29,.12)', borderRadius: '9px', padding: '22px' }}>
          <div style={{ font: '800 15px/1.25 var(--ui), sans-serif' }}>Free wheel alignment</div>
          <div style={{ font: '400 13px/1 var(--ui), sans-serif', color: 'var(--ink-60)', marginTop: '9px' }}>
            1,200 points
          </div>
          <Button
            variant="primary"
            fullWidth
            style={{ marginTop: '18px' }}
            onClick={() => showToast('Redeemed! Free wheel alignment added.')}
          >
            Redeem
          </Button>
        </div>

        {/* Item 3 (Locked) */}
        <div style={{ border: '1px solid rgba(22,24,29,.12)', borderRadius: '9px', padding: '22px', opacity: 0.55 }}>
          <div style={{ font: '800 15px/1.25 var(--ui), sans-serif' }}>Free oil change</div>
          <div style={{ font: '400 13px/1 var(--ui), sans-serif', color: 'var(--ink-60)', marginTop: '9px' }}>
            2,000 points · 760 to go
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '44px',
              marginTop: '18px',
              borderRadius: '8px',
              border: '1px solid rgba(22,24,29,.16)',
              font: '800 13px/1 var(--ui), sans-serif',
              color: 'var(--ink-45)'
            }}
          >
            Locked
          </div>
        </div>
      </div>
    </article>
  );
}
