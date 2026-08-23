import React from 'react';
import { useApp } from '../../../context/AppContext';
import { Button } from '../../../components/common/Button';
import { MessageSquare, Phone } from 'lucide-react';

export function TechnicianCard() {
  const { selectedVisit, navigateTo, showToast } = useApp();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Items Breakdown Box */}
      <article
        style={{
          background: '#fff',
          border: '1px solid rgba(22,24,29,.12)',
          borderRadius: '10px',
          padding: '24px 26px 26px'
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
          Approved service items
        </div>

        {selectedVisit.items.map((it, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '14px',
              padding: '13px 0',
              borderBottom: idx === selectedVisit.items.length - 1 ? 'none' : '1px solid rgba(22,24,29,.08)',
              font: '400 14.5px/1.35 var(--ui), sans-serif'
            }}
          >
            <span>{it.name}</span>
            <span style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>{it.price}</span>
          </div>
        ))}

        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginTop: '18px'
          }}
        >
          <span style={{ font: '600 13.5px/1 var(--ui), sans-serif', color: 'var(--ink-60)' }}>
            {selectedVisit.totalLabel}
          </span>
          <span
            style={{
              font: '800 26px/1 var(--ui), sans-serif',
              letterSpacing: '-.02em',
              color: '#12735a'
            }}
          >
            {selectedVisit.amount}
          </span>
        </div>

        <Button
          variant="primary"
          fullWidth
          style={{ marginTop: '18px' }}
          onClick={() => navigateTo('book')}
        >
          Reorder this service
        </Button>
        <Button
          variant="outline"
          fullWidth
          style={{ marginTop: '10px' }}
          onClick={() => showToast('Preparing your invoices for download...')}
        >
          Download invoice
        </Button>
      </article>

      {/* Technician Info Box */}
      <article
        style={{
          background: '#fff',
          border: '1px solid rgba(22,24,29,.12)',
          borderRadius: '10px',
          padding: '24px 26px 26px'
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
          Your technician
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '10px',
              background: '#0e4fff',
              color: '#fff',
              display: 'grid',
              placeItems: 'center',
              font: '800 15px/1 var(--ui), sans-serif'
            }}
          >
            {selectedVisit.techInitials}
          </div>
          <div>
            <div style={{ font: '800 15.5px/1.2 var(--ui), sans-serif' }}>
              {selectedVisit.tech}
            </div>
            <div
              style={{
                font: '400 12.5px/1 var(--ui), sans-serif',
                color: 'var(--ink-60)',
                marginTop: '6px'
              }}
            >
              {selectedVisit.techMeta}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '18px' }}>
          <Button
            variant="green"
            icon={MessageSquare}
            style={{ flex: 1 }}
            onClick={() => showToast('Opening WhatsApp chat with the workshop...')}
          >
            WhatsApp
          </Button>
          <Button
            variant="outline"
            icon={Phone}
            style={{ flex: 1 }}
            onClick={() => showToast('Calling the front desk...')}
          >
            Call front desk
          </Button>
        </div>
      </article>
    </div>
  );
}
