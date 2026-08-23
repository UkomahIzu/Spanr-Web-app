import React from 'react';
import { useApp } from '../../../context/AppContext';
import { Button } from '../../../components/common/Button';

export function QuoteSummarySidebar() {
  const {
    activeQuoteCount,
    activeQuoteTotal,
    activeQuoteHours,
    activeQuotePoints,
    navigateTo,
    showToast
  } = useApp();

  const formatHours = (h) => {
    const hh = Math.floor(h);
    const mm = Math.round((h - hh) * 60);
    return (hh ? `${hh}h ` : '') + (mm ? `${mm}m` : hh ? '' : '0m');
  };

  return (
    <aside
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '26px 26px 28px',
        position: 'sticky',
        top: 0
      }}
    >
      <div
        style={{
          font: '800 11px/1 var(--ui), sans-serif',
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          color: 'var(--ink-45)'
        }}
      >
        Selected
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '16px',
          font: '400 14.5px/1.45 var(--ui), sans-serif'
        }}
      >
        <span>{activeQuoteCount} of 4 items</span>
        <span style={{ fontWeight: 600 }}>₦{activeQuoteTotal.toLocaleString()}</span>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '11px',
          font: '400 14.5px/1.45 var(--ui), sans-serif',
          color: 'var(--ink-60)'
        }}
      >
        <span>Estimated time</span>
        <span>{formatHours(activeQuoteHours)}</span>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '11px',
          font: '400 14.5px/1.45 var(--ui), sans-serif',
          color: 'var(--ink-60)'
        }}
      >
        <span>Points you'll earn</span>
        <span>+{activeQuotePoints}</span>
      </div>

      <div style={{ height: '1px', background: 'rgba(22,24,29,.12)', margin: '20px 0' }} />

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <span style={{ font: '600 13px/1 var(--ui), sans-serif', color: 'var(--ink-60)' }}>
          Total to approve
        </span>
        <span
          style={{
            font: '800 28px/1 var(--ui), sans-serif',
            letterSpacing: '-.02em',
            color: '#12735a'
          }}
        >
          ₦{activeQuoteTotal.toLocaleString()}
        </span>
      </div>

      <Button
        variant="primary"
        size="lg"
        fullWidth
        style={{ marginTop: '20px' }}
        onClick={() => navigateTo('pay')}
      >
        Approve &amp; pay
      </Button>

      <Button
        variant="outline"
        fullWidth
        style={{ marginTop: '10px' }}
        onClick={() => showToast('Change request sent to Kojo Motors.')}
      >
        Request changes
      </Button>

      <p
        style={{
          margin: '16px 0 0',
          font: '400 12px/1.5 var(--ui), sans-serif',
          color: 'var(--ink-45)'
        }}
      >
        You can also approve in person at the front desk, or pay the balance at handover.
      </p>
    </aside>
  );
}
