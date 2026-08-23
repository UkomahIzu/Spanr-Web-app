import React from 'react';
import { useApp } from '../../context/AppContext';
import { Button } from '../../components/common/Button';
import { ChevronLeft } from 'lucide-react';

export function DiagnosticPage() {
  const { navigateTo, showToast } = useApp();

  return (
    <div style={{ maxWidth: '640px' }}>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigateTo('book');
        }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          font: '600 13px/1 var(--ui), sans-serif',
          marginBottom: '18px'
        }}
      >
        <ChevronLeft size={15} strokeWidth={2.4} />
        Back to services
      </a>

      <h1
        style={{
          font: '600 30px/1.1 var(--ui), sans-serif',
          letterSpacing: '-.02em',
          margin: 0
        }}
      >
        General diagnostic — vehicle &amp; intake details
      </h1>
      <p
        style={{
          margin: '10px 0 0',
          font: '400 15px/1.5 var(--ui), sans-serif',
          color: 'var(--ink-60)'
        }}
      >
        Tell us what's happening and when you can bring the car in. A mandatory ₦5,000 in-person diagnostic fee applies, credited toward any approved work.
      </p>

      <article
        style={{
          background: '#fff',
          border: '1px solid rgba(22,24,29,.12)',
          borderRadius: '10px',
          padding: '26px 28px 28px',
          marginTop: '24px'
        }}
      >
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
          <span style={{ font: '800 15px/1.2 var(--ui), sans-serif' }}>
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
          LAG-482-KJA · 84,320 km
        </div>

        <div style={{ height: '1px', background: 'rgba(22,24,29,.12)', margin: '22px 0' }} />

        {/* Input Fields */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
          <div>
            <div style={{ font: '600 12.5px/1 var(--ui), sans-serif', color: 'var(--ink-60)', marginBottom: '8px' }}>
              Drop-off date
            </div>
            <div
              style={{
                height: '48px',
                border: '1px solid rgba(22,24,29,.16)',
                borderRadius: '9px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 15px',
                font: '400 14px/1 var(--ui), sans-serif',
                color: 'var(--ink-45)'
              }}
            >
              Thu, 13 Aug
            </div>
          </div>

          <div>
            <div style={{ font: '600 12.5px/1 var(--ui), sans-serif', color: 'var(--ink-60)', marginBottom: '8px' }}>
              Drop-off time
            </div>
            <div
              style={{
                height: '48px',
                border: '1px solid rgba(22,24,29,.16)',
                borderRadius: '9px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 15px',
                font: '400 14px/1 var(--ui), sans-serif',
                color: 'var(--ink-45)'
              }}
            >
              09:00 AM
            </div>
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <div style={{ font: '600 12.5px/1 var(--ui), sans-serif', color: 'var(--ink-60)', marginBottom: '8px' }}>
              Describe what's happening
            </div>
            <div
              style={{
                height: '90px',
                border: '1px solid rgba(22,24,29,.16)',
                borderRadius: '9px',
                padding: '13px 15px',
                font: '400 14.5px/1.45 var(--ui), sans-serif',
                color: 'var(--ink-45)'
              }}
            >
              e.g. Rattling noise from the front when braking
            </div>
          </div>
        </div>

        <div style={{ height: '1px', background: 'rgba(22,24,29,.12)', margin: '22px 0' }} />

        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <span style={{ font: '600 13px/1 var(--ui), sans-serif', color: 'var(--ink-60)' }}>
            Diagnostic fee
          </span>
          <span style={{ font: '800 22px/1 var(--ui), sans-serif', letterSpacing: '-.02em' }}>
            ₦5,000
          </span>
        </div>

        <Button
          variant="primary"
          size="lg"
          fullWidth
          style={{ marginTop: '20px' }}
          onClick={() => {
            showToast('Diagnostic request sent — the shop will inspect and quote you.');
          }}
        >
          Submit request
        </Button>
      </article>
    </div>
  );
}
