import React from 'react';
import { useApp } from '../../../context/AppContext';
import { Button } from '../../../components/common/Button';

export function MaintenanceCatalogPreview() {
  const { navigateTo } = useApp();

  const services = [
    { title: 'Oil change', price: '₦68,000' },
    { title: 'Tyre replacement', price: '₦42,000' },
    { title: 'Wheel alignment', price: '₦35,000' },
    { title: 'General diagnostic', price: 'Quoted after' }
  ];

  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '24px 26px 26px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <h3 style={{ font: '600 17.5px/1.2 var(--ui), sans-serif', margin: '0 0 18px' }}>
        Popular maintenance services
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {services.map((item, index) => (
          <a
            key={index}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('book');
            }}
            className="hover-blue-accent"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              height: '52px',
              padding: '0 16px',
              border: '1px solid rgba(22,24,29,.12)',
              borderRadius: '9px',
              color: '#16181d',
              font: '600 14.5px/1 var(--ui), sans-serif',
              transition: 'all 0.15s ease'
            }}
          >
            {item.title}
            <span style={{ font: '400 13.5px/1 var(--ui), sans-serif', color: 'var(--ink-45)' }}>
              {item.price}
            </span>
          </a>
        ))}
      </div>

      <Button
        variant="primary"
        fullWidth
        style={{ marginTop: 'auto', marginTop: '16px' }}
        onClick={() => navigateTo('book')}
      >
        See full catalogue
      </Button>
    </article>
  );
}
