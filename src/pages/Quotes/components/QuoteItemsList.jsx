import React from 'react';
import { useApp } from '../../../context/AppContext';
import { Check } from 'lucide-react';

export function QuoteItemsList() {
  const { quoteItems, toggleQuoteItem } = useApp();

  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '26px 28px 10px'
      }}
    >
      <div
        style={{
          font: '800 11px/1 var(--ui), sans-serif',
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          color: 'var(--ink-45)',
          marginBottom: '6px'
        }}
      >
        Line items
      </div>

      {quoteItems.map((item, index) => {
        const isSelected = item.selected;
        const boxBg = isSelected ? '#0e4fff' : 'transparent';
        const boxBorder = isSelected ? 'none' : '1.5px solid rgba(22,24,29,.28)';
        const titleColor = isSelected ? '#16181d' : 'var(--ink-60)';
        const isLast = index === quoteItems.length - 1;

        return (
          <div
            key={item.id}
            onClick={() => toggleQuoteItem(index)}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              padding: '20px 0',
              borderBottom: isLast ? 'none' : '1px solid rgba(22,24,29,.08)',
              cursor: 'pointer'
            }}
          >
            <span
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '6px',
                background: boxBg,
                border: boxBorder,
                display: 'grid',
                placeItems: 'center',
                flex: 'none',
                marginTop: '2px',
                transition: 'all 0.15s ease'
              }}
            >
              {isSelected && <Check size={13} strokeWidth={3.5} color="#fff" />}
            </span>

            <div style={{ flex: 1 }}>
              <div style={{ font: '700 15.5px/1.3 var(--ui), sans-serif', color: titleColor }}>
                {item.name}
                {item.isOptional && <span style={{ color: '#8a4b00', fontWeight: 600 }}> · optional</span>}
              </div>
              <div
                style={{
                  font: '400 13.5px/1.45 var(--ui), sans-serif',
                  color: 'var(--ink-60)',
                  marginTop: '6px'
                }}
              >
                {item.desc}
              </div>
            </div>

            <span
              style={{
                font: '700 15px/1 var(--ui), sans-serif',
                marginTop: '2px',
                color: titleColor
              }}
            >
              ₦{item.price.toLocaleString()}
            </span>
          </div>
        );
      })}
    </article>
  );
}
