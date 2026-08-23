import React from 'react';
import { Badge } from '../../../components/common/Badge';

export function LoyaltyHero() {
  return (
    <article
      style={{
        background: '#0930a0',
        color: '#fff',
        borderRadius: '10px',
        padding: '34px 36px 36px',
        marginBottom: '24px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: '-60px',
          top: '-60px',
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,.06)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '60px',
          bottom: '-90px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(224,123,0,.18)'
        }}
      />

      <div style={{ position: 'relative' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            height: '30px',
            padding: '0 12px',
            borderRadius: '6px',
            background: 'rgba(255,255,255,.14)',
            font: '800 12px/1 var(--ui), sans-serif',
            letterSpacing: '.02em'
          }}
        >
          Loyalty
        </span>
        <h3
          style={{
            font: '600 30px/1.15 var(--ui), sans-serif',
            letterSpacing: '-.02em',
            margin: '18px 0 0',
            maxWidth: '640px',
            color: '#fff'
          }}
        >
          How SPANR rewards work
        </h3>
        <p
          style={{
            margin: '12px 0 0',
            font: '400 15.5px/1.6 var(--ui), sans-serif',
            color: 'rgba(255,255,255,.72)',
            maxWidth: '640px'
          }}
        >
          Three steps, no small print. Points sit with the shop that issued them and never expire while you keep servicing there.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', marginTop: '34px' }}>
          <div style={{ borderTop: '2px solid rgba(255,255,255,.28)', paddingTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ font: '800 34px/1 var(--ui), sans-serif', letterSpacing: '-.03em', color: '#e07b00' }}>
                01
              </span>
              <span style={{ font: '800 12px/1 var(--ui), sans-serif', letterSpacing: '.14em', textTransform: 'uppercase' }}>
                Earn
              </span>
            </div>
            <p style={{ margin: '14px 0 0', font: '400 15px/1.6 var(--ui), sans-serif', color: 'rgba(255,255,255,.78)' }}>
              2 points for every ₦100 spent on approved work at Kojo Motors.
            </p>
          </div>

          <div style={{ borderTop: '2px solid rgba(255,255,255,.28)', paddingTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ font: '800 34px/1 var(--ui), sans-serif', letterSpacing: '-.03em', color: '#e07b00' }}>
                02
              </span>
              <span style={{ font: '800 12px/1 var(--ui), sans-serif', letterSpacing: '.14em', textTransform: 'uppercase' }}>
                Level up
              </span>
            </div>
            <p style={{ margin: '14px 0 0', font: '400 15px/1.6 var(--ui), sans-serif', color: 'rgba(255,255,255,.78)' }}>
              Hit 2,000 points for Gold — 3 points per ₦100 and priority booking.
            </p>
          </div>

          <div style={{ borderTop: '2px solid rgba(255,255,255,.28)', paddingTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ font: '800 34px/1 var(--ui), sans-serif', letterSpacing: '-.03em', color: '#e07b00' }}>
                03
              </span>
              <span style={{ font: '800 12px/1 var(--ui), sans-serif', letterSpacing: '.14em', textTransform: 'uppercase' }}>
                Redeem
              </span>
            </div>
            <p style={{ margin: '14px 0 0', font: '400 15px/1.6 var(--ui), sans-serif', color: 'rgba(255,255,255,.78)' }}>
              Spend points on discounts or free services at checkout, any time.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
