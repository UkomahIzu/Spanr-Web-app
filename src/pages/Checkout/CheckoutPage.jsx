import React from 'react';
import { PaymentMethodSelector } from './components/PaymentMethodSelector';
import { OrderSummarySidebar } from './components/OrderSummarySidebar';

export function CheckoutPage() {
  return (
    <div>
      <div style={{ marginBottom: '28px' }}>
        <h1
          style={{
            font: '600 30px/1.1 var(--ui), sans-serif',
            letterSpacing: '-.02em',
            margin: 0
          }}
        >
          Checkout
        </h1>
        <p
          style={{
            margin: '10px 0 0',
            font: '400 15px/1.5 var(--ui), sans-serif',
            color: 'var(--ink-60)'
          }}
        >
          Quote JOB-4821 approved. Pay now to release the work, or settle at the shop.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 360px',
          gap: '24px',
          alignItems: 'start'
        }}
      >
        <PaymentMethodSelector />
        <OrderSummarySidebar />
      </div>
    </div>
  );
}
