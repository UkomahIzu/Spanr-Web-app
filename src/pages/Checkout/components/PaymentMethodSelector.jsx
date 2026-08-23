import React from 'react';
import { useApp } from '../../../context/AppContext';

export function PaymentMethodSelector() {
  const { paymentMethod, setPaymentMethod } = useApp();

  const methods = [
    { id: 'card', title: 'Card', subtitle: 'Visa, Mastercard or Verve' },
    { id: 'transfer', title: 'Bank transfer', subtitle: 'Account details shown after you continue' },
    { id: 'momo', title: 'Mobile money', subtitle: 'Pay from your wallet balance' },
    { id: 'cash', title: 'Cash at the shop', subtitle: 'Work starts once the front desk confirms' }
  ];

  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '26px 28px 30px'
      }}
    >
      <h3 style={{ font: '600 17.5px/1.2 var(--ui), sans-serif', margin: '0 0 20px' }}>
        Payment method
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {methods.map((method) => {
          const isSelected = paymentMethod === method.id;
          return (
            <label
              key={method.id}
              onClick={() => setPaymentMethod(method.id)}
              className="hover-blue-accent"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '18px',
                border: isSelected ? '2px solid #0e4fff' : '1px solid rgba(22,24,29,.12)',
                borderRadius: '9px',
                background: isSelected ? '#f7faff' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <span
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  border: isSelected ? '5px solid #0e4fff' : '1.5px solid rgba(22,24,29,.3)',
                  boxSizing: 'border-box',
                  flex: 'none'
                }}
              />
              <span style={{ flex: 1 }}>
                <span style={{ display: 'block', font: '700 15px/1.2 var(--ui), sans-serif' }}>
                  {method.title}
                </span>
                <span
                  style={{
                    display: 'block',
                    font: '400 13.5px/1.35 var(--ui), sans-serif',
                    color: 'var(--ink-60)',
                    marginTop: '5px'
                  }}
                >
                  {method.subtitle}
                </span>
              </span>
            </label>
          );
        })}
      </div>

      <div style={{ height: '1px', background: 'rgba(22,24,29,.12)', margin: '26px 0' }} />

      {/* Card Form Fields */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
        <div style={{ gridColumn: '1 / -1' }}>
          <div style={{ font: '600 12.5px/1 var(--ui), sans-serif', color: 'var(--ink-60)', marginBottom: '8px' }}>
            Card number
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
            4242 4242 4242 4242
          </div>
        </div>

        <div>
          <div style={{ font: '600 12.5px/1 var(--ui), sans-serif', color: 'var(--ink-60)', marginBottom: '8px' }}>
            Expiry
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
            MM / YY
          </div>
        </div>

        <div>
          <div style={{ font: '600 12.5px/1 var(--ui), sans-serif', color: 'var(--ink-60)', marginBottom: '8px' }}>
            CVV
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
            •••
          </div>
        </div>
      </div>
    </article>
  );
}
