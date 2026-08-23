import React from 'react';

export function Checkbox({ checked, onChange, label, style = {} }) {
  return (
    <label
      onClick={onChange}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
        font: '600 14px/1 var(--ui), sans-serif',
        userSelect: 'none',
        ...style
      }}
    >
      <span
        style={{
          width: '22px',
          height: '22px',
          borderRadius: '6px',
          background: checked ? '#0e4fff' : 'transparent',
          border: checked ? 'none' : '1.5px solid rgba(22, 24, 29, 0.28)',
          display: 'grid',
          placeItems: 'center',
          flex: 'none',
          transition: 'all 0.15s ease'
        }}
      >
        {checked && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3.5">
            <path d="m5 12 5 5L19 7" />
          </svg>
        )}
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
