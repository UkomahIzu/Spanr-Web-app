import React from 'react';
import { useApp } from '../../../context/AppContext';
import { Button } from '../../../components/common/Button';

const HANDOVER_LABELS = {
  leave: 'Leave & return',
  wait: 'Wait on-site',
  delivery: 'Delivery to me'
};

export function BookingSidebar() {
  const {
    chosenService,
    handoverPreference,
    navigateTo,
    showToast
  } = useApp();

  return (
    <aside
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '24px 24px 26px',
        position: 'sticky',
        top: 0
      }}
    >
      <div
        style={{
          font: '800 11px/1 var(--ui), sans-serif',
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          color: 'var(--ink-45)',
          marginBottom: '16px'
        }}
      >
        Your booking
      </div>

      {/* Vehicle Box */}
      <div style={{ border: '1px solid rgba(22,24,29,.12)', borderRadius: '9px', padding: '16px' }}>
        <div style={{ font: '400 11px/1 var(--ui), sans-serif', color: 'var(--ink-45)' }}>
          Vehicle
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            marginTop: '9px'
          }}
        >
          <span style={{ font: '800 14px/1.2 var(--ui), sans-serif' }}>
            Mercedes-Benz C300 2019
          </span>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              showToast('Vehicle picker opened.');
            }}
            style={{ font: '600 12px/1 var(--ui), sans-serif' }}
          >
            Change
          </a>
        </div>
        <div style={{ font: '400 12px/1 var(--ui), sans-serif', color: 'var(--ink-60)', marginTop: '7px' }}>
          LAG-482-KJA
        </div>
      </div>

      {/* Summary lines */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
          marginTop: '20px',
          font: '400 14.5px/1.45 var(--ui), sans-serif'
        }}
      >
        <span>{chosenService.title}</span>
        <span style={{ fontWeight: 600 }}>{chosenService.priceLabel}</span>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
          marginTop: '12px',
          font: '400 14.5px/1.45 var(--ui), sans-serif',
          color: 'var(--ink-60)'
        }}
      >
        <span>Estimated time</span>
        <span>{chosenService.time}</span>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
          marginTop: '12px',
          font: '400 14.5px/1.45 var(--ui), sans-serif',
          color: 'var(--ink-60)'
        }}
      >
        <span>Handover</span>
        <span>{HANDOVER_LABELS[handoverPreference]}</span>
      </div>

      <div style={{ height: '1px', background: 'rgba(22,24,29,.12)', margin: '20px 0' }} />

      {/* Estimated total */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <span style={{ font: '600 13px/1 var(--ui), sans-serif', color: 'var(--ink-60)' }}>
          Estimated total
        </span>
        <span style={{ font: '800 24px/1 var(--ui), sans-serif', letterSpacing: '-.02em' }}>
          {chosenService.priceLabel}
        </span>
      </div>

      <p
        style={{
          margin: '14px 0 0',
          font: '400 12px/1.5 var(--ui), sans-serif',
          color: 'var(--ink-45)'
        }}
      >
        This is the shop's reference price. You'll approve a final itemised quote before any work starts.
      </p>

      <Button
        variant="primary"
        size="lg"
        fullWidth
        style={{ marginTop: '18px' }}
        onClick={() => navigateTo('quote')}
      >
        Confirm booking
      </Button>
    </aside>
  );
}
