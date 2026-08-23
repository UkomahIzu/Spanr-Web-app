import React from 'react';
import { useApp } from '../../../context/AppContext';
import { PAST_QUOTES, SHOPS } from '../../../data/mockData';
import { Badge } from '../../../components/common/Badge';

export function PastQuotesTable() {
  const { openVisit, showToast } = useApp();

  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '26px 28px 28px',
        marginTop: '24px'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '18px'
        }}
      >
        <h3 style={{ font: '600 17.5px/1.2 var(--ui), sans-serif', margin: 0 }}>
          Past quotes &amp; invoices
        </h3>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            showToast('Preparing your invoices for download...');
          }}
          style={{ font: '600 13.5px/1 var(--ui), sans-serif' }}
        >
          Download all
        </a>
      </div>

      {/* Header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '.7fr 1.4fr 1fr .8fr .8fr .9fr',
          gap: '16px',
          paddingBottom: '12px',
          borderBottom: '1px solid rgba(22,24,29,.12)',
          font: '800 10.5px/1 var(--ui), sans-serif',
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: 'var(--ink-45)'
        }}
      >
        <span>Job</span>
        <span>Service</span>
        <span>Workshop</span>
        <span>Date</span>
        <span style={{ textAlign: 'right' }}>Amount</span>
        <span style={{ textAlign: 'right' }}>Status</span>
      </div>

      {/* Rows */}
      {PAST_QUOTES.map((q) => {
        const shop = SHOPS[q.shopKey];
        const isKojo = q.shopKey === 'kojo';
        const shopBg = isKojo ? '#eef3ff' : '#f3eefb';
        const shopFg = isKojo ? '#0930a0' : '#5b3fa8';
        const noteColor = q.tone === 'green' ? '#12735a' : q.tone === 'amber' ? '#8a4b00' : 'rgba(22,24,29,.45)';

        return (
          <div
            key={q.id}
            onClick={() => openVisit(q.id)}
            className="hover-bg-light"
            style={{
              display: 'grid',
              gridTemplateColumns: '.7fr 1.4fr 1fr .8fr .8fr .9fr',
              gap: '16px',
              padding: '17px 0',
              borderBottom: '1px solid rgba(22,24,29,.08)',
              font: '400 14.5px/1.35 var(--ui), sans-serif',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'background 0.15s ease'
            }}
          >
            <span style={{ fontWeight: 600 }}>{q.id}</span>
            <span>
              <span style={{ fontWeight: 600, display: 'block' }}>{q.service}</span>
              <span
                style={{
                  font: '400 12.5px/1 var(--ui), sans-serif',
                  color: noteColor,
                  display: 'block',
                  marginTop: '6px'
                }}
              >
                {q.note}
              </span>
            </span>
            <span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: '26px',
                  padding: '0 9px',
                  borderRadius: '5px',
                  background: shopBg,
                  color: shopFg,
                  font: '700 11.5px/1 var(--ui), sans-serif',
                  whiteSpace: 'nowrap'
                }}
              >
                {shop.fullName}
              </span>
            </span>
            <span style={{ color: 'var(--ink-60)', fontSize: '13.5px' }}>{q.date}</span>
            <span style={{ textAlign: 'right', fontWeight: 600 }}>{q.amount}</span>
            <span style={{ textAlign: 'right' }}>
              <Badge variant={q.tone} dot>
                {q.status}
              </Badge>
            </span>
          </div>
        );
      })}
    </article>
  );
}
