import React from 'react';
import { useApp } from '../../../context/AppContext';
import { Button } from '../../../components/common/Button';
import { Badge } from '../../../components/common/Badge';
import { Lock } from 'lucide-react';

export function OrderSummarySidebar() {
  const { openVisit } = useApp();

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
          color: 'var(--ink-45)',
          marginBottom: '18px'
        }}
      >
        Order summary
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
          font: '400 14.5px/1.45 var(--ui), sans-serif',
          marginBottom: '12px'
        }}
      >
        <span>Front brake pad replacement</span>
        <span style={{ fontWeight: 600 }}>₦46,000</span>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
          font: '400 14.5px/1.45 var(--ui), sans-serif',
          marginBottom: '12px'
        }}
      >
        <span>Brake fluid flush</span>
        <span style={{ fontWeight: 600 }}>₦18,500</span>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
          font: '400 14.5px/1.45 var(--ui), sans-serif'
        }}
      >
        <span>General diagnostic</span>
        <span style={{ fontWeight: 600 }}>₦12,000</span>
      </div>

      <div style={{ height: '1px', background: 'rgba(22,24,29,.12)', margin: '20px 0' }} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
          font: '400 14.5px/1.45 var(--ui), sans-serif',
          color: '#12735a',
          marginBottom: '12px'
        }}
      >
        <span>Loyalty discount (500 pts)</span>
        <span style={{ fontWeight: 600 }}>−₦5,000</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <span style={{ font: '600 13px/1 var(--ui), sans-serif', color: 'var(--ink-60)' }}>
          Amount due
        </span>
        <span style={{ font: '800 28px/1 var(--ui), sans-serif', letterSpacing: '-.02em' }}>
          ₦71,500
        </span>
      </div>

      <Button
        variant="primary"
        size="lg"
        fullWidth
        style={{ marginTop: '20px' }}
        onClick={() => openVisit('JOB-4821')}
      >
        Pay ₦71,500
      </Button>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '9px',
          marginTop: '16px',
          font: '400 12px/1.4 var(--ui), sans-serif',
          color: 'var(--ink-45)'
        }}
      >
        <Lock size={15} strokeWidth={2} />
        Payment is held until the shop confirms work has started.
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '14px' }}>
        <Badge variant="amber" dot>
          Powered by PixPay
        </Badge>
      </div>
    </aside>
  );
}
