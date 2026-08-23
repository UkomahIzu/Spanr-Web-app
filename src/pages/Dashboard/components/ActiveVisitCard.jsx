import React from 'react';
import { useApp } from '../../../context/AppContext';
import { VISITS } from '../../../data/mockData';
import { Badge } from '../../../components/common/Badge';
import { Button } from '../../../components/common/Button';

export function ActiveVisitCard() {
  const { navigateTo, openVisit } = useApp();
  const activeVisit = VISITS[0]; // JOB-4821

  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '24px', padding: '26px 28px 22px' }}>
        <div>
          <div
            style={{
              font: '800 11px/1 var(--ui), sans-serif',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#0e4fff',
              marginBottom: '13px'
            }}
          >
            Active visit · {activeVisit.id}
          </div>
          <h2 style={{ font: '600 24px/1.15 var(--ui), sans-serif', letterSpacing: '-.015em', margin: 0 }}>
            {activeVisit.vehicle}
          </h2>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '10px',
              font: '600 13.5px/1 var(--ui), sans-serif',
              color: 'var(--ink-60)'
            }}
          >
            <span>{activeVisit.plate}</span>
            <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(22,24,29,.35)' }} />
            <span>{activeVisit.title}</span>
          </div>
        </div>

        <Badge variant="amber" dot>
          Awaiting approval
        </Badge>
      </div>

      <div style={{ padding: '0 28px 6px' }}>
        <span style={{ font: '600 13px/1 var(--ui), sans-serif', color: 'var(--ink-60)' }}>
          Estimated turnaround: <strong style={{ color: '#16181d' }}>3h 30m</strong> · ready today, 15:30
        </span>
      </div>

      {/* Stepper bar */}
      <div style={{ padding: '16px 28px 26px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
          <div style={{ paddingRight: '12px' }}>
            <div style={{ height: '6px', borderRadius: '3px', background: '#0e4fff' }} />
            <div style={{ font: '800 12.5px/1.3 var(--ui), sans-serif', marginTop: '12px' }}>Intake</div>
            <div style={{ font: '400 12.5px/1.3 var(--ui), sans-serif', color: 'var(--ink-45)', marginTop: '4px' }}>Mon 09:20</div>
          </div>
          <div style={{ paddingRight: '12px' }}>
            <div style={{ height: '6px', borderRadius: '3px', background: '#0e4fff' }} />
            <div style={{ font: '800 12.5px/1.3 var(--ui), sans-serif', marginTop: '12px' }}>Diagnostics</div>
            <div style={{ font: '400 12.5px/1.3 var(--ui), sans-serif', color: 'var(--ink-45)', marginTop: '4px' }}>Mon 11:05</div>
          </div>
          <div style={{ paddingRight: '12px' }}>
            <div style={{ height: '6px', borderRadius: '3px', background: '#0e4fff' }} />
            <div style={{ font: '800 12.5px/1.3 var(--ui), sans-serif', marginTop: '12px' }}>Quote sent</div>
            <div style={{ font: '400 12.5px/1.3 var(--ui), sans-serif', color: 'var(--ink-45)', marginTop: '4px' }}>Today 08:40</div>
          </div>
          <div style={{ paddingRight: '12px' }}>
            <div style={{ height: '6px', borderRadius: '3px', background: '#e07b00' }} />
            <div style={{ font: '800 12.5px/1.3 var(--ui), sans-serif', marginTop: '12px', color: '#8a4b00' }}>Approval</div>
            <div style={{ font: '400 12.5px/1.3 var(--ui), sans-serif', color: '#8a4b00', marginTop: '4px' }}>You're here</div>
          </div>
          <div style={{ paddingRight: '12px' }}>
            <div style={{ height: '6px', borderRadius: '3px', background: 'rgba(22,24,29,.12)' }} />
            <div style={{ font: '600 12.5px/1.3 var(--ui), sans-serif', marginTop: '12px', color: 'var(--ink-45)' }}>Work</div>
            <div style={{ font: '400 12.5px/1.3 var(--ui), sans-serif', color: 'var(--ink-45)', marginTop: '4px' }}>~3h 30m est.</div>
          </div>
          <div>
            <div style={{ height: '6px', borderRadius: '3px', background: 'rgba(22,24,29,.12)' }} />
            <div style={{ font: '600 12.5px/1.3 var(--ui), sans-serif', marginTop: '12px', color: 'var(--ink-45)' }}>Ready</div>
            <div style={{ font: '400 12.5px/1.3 var(--ui), sans-serif', color: 'var(--ink-45)', marginTop: '4px' }}>Leave &amp; return</div>
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div
        style={{
          marginTop: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          borderTop: '1px solid rgba(22,24,29,.12)',
          background: '#fafbfc',
          padding: '22px 28px'
        }}
      >
        <div>
          <div style={{ font: '400 12.5px/1 var(--ui), sans-serif', color: 'var(--ink-45)' }}>Quote total, 4 items</div>
          <div
            style={{
              font: '800 26px/1 var(--ui), sans-serif',
              letterSpacing: '-.02em',
              marginTop: '9px',
              color: '#12735a'
            }}
          >
            ₦76,500
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="outline" onClick={() => openVisit(activeVisit.id)}>
            Track visit
          </Button>
          <Button variant="primary" onClick={() => navigateTo('quote')}>
            Review quote
          </Button>
        </div>
      </div>
    </article>
  );
}
