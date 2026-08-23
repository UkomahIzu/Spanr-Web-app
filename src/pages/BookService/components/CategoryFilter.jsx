import React from 'react';
import { useApp } from '../../../context/AppContext';
import { CATEGORIES, CATALOG } from '../../../data/mockData';

export function CategoryFilter() {
  const {
    selectedCategory,
    setSelectedCategory,
    handoverPreference,
    setHandoverPreference
  } = useApp();

  const counts = {};
  CATALOG.forEach((item) => {
    counts[item.cat] = (counts[item.cat] || 0) + 1;
  });

  return (
    <aside
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '22px 20px 24px'
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
        Categories
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count = cat.id === 'all' ? CATALOG.length : counts[cat.id] || 0;

          return (
            <a
              key={cat.id}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory(cat.id);
              }}
              className="hover-bg-light"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '44px',
                padding: '0 12px',
                borderRadius: '8px',
                font: '600 14.5px/1 var(--ui), sans-serif',
                background: isActive ? '#eef3ff' : 'transparent',
                color: isActive ? '#0e4fff' : '#16181d',
                fontWeight: isActive ? '700' : '600',
                transition: 'background 0.15s ease'
              }}
            >
              {cat.label}
              <span
                style={{
                  font: '600 12.5px/1 var(--ui), sans-serif',
                  color: isActive ? '#0e4fff' : 'rgba(22,24,29,.45)'
                }}
              >
                {count}
              </span>
            </a>
          );
        })}
      </div>

      <div style={{ height: '1px', background: 'rgba(22,24,29,.12)', margin: '22px 0' }} />

      {/* Handover Preference Radio */}
      <div
        style={{
          font: '800 11px/1 var(--ui), sans-serif',
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          color: 'var(--ink-45)',
          marginBottom: '14px'
        }}
      >
        Handover
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', font: '600 14px/1 var(--ui), sans-serif' }}>
        {[
          { id: 'leave', label: 'Leave and return' },
          { id: 'wait', label: 'Wait on-site' },
          { id: 'delivery', label: 'Delivery to me' }
        ].map((opt) => {
          const isSelected = handoverPreference === opt.id;
          return (
            <label
              key={opt.id}
              onClick={() => setHandoverPreference(opt.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                color: isSelected ? '#16181d' : 'var(--ink-60)'
              }}
            >
              <span
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  border: isSelected ? '5px solid #0e4fff' : '1.5px solid rgba(22,24,29,.3)',
                  boxSizing: 'border-box',
                  transition: 'border 0.15s ease'
                }}
              />
              {opt.label}
            </label>
          );
        })}
      </div>
    </aside>
  );
}
