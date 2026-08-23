import React from 'react';

export function TechFindings() {
  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '26px 28px 28px'
      }}
    >
      <h3 style={{ font: '600 17.5px/1.2 var(--ui), sans-serif', margin: '0 0 8px' }}>
        What the technician found
      </h3>
      <p
        style={{
          margin: '0 0 18px',
          font: '400 14px/1.6 var(--ui), sans-serif',
          color: 'var(--ink-60)'
        }}
      >
        Front pads at 2mm with uneven wear on the driver side. Fluid dark and below minimum. No fault codes beyond the brake wear sensor.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            style={{
              aspectRatio: '4/3',
              borderRadius: '9px',
              background: '#eceef1',
              border: '1px dashed rgba(22,24,29,.2)',
              display: 'grid',
              placeItems: 'center',
              font: '600 11px/1 var(--ui), sans-serif',
              color: 'var(--ink-45)'
            }}
          >
            Photo {num}
          </div>
        ))}
      </div>
    </article>
  );
}
