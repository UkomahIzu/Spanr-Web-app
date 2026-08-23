import React from 'react';
import { useApp } from '../../../context/AppContext';
import { Button } from '../../../components/common/Button';
import { Badge } from '../../../components/common/Badge';

export function MarketplaceBanner() {
  const { navigateTo } = useApp();

  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'stretch'
      }}
    >
      <div
        style={{
          width: '300px',
          flex: 'none',
          background: '#eceef1',
          borderRight: '1px solid rgba(22,24,29,.1)',
          display: 'grid',
          placeItems: 'center',
          font: '600 12px/1 var(--ui), sans-serif',
          color: 'var(--ink-45)'
        }}
      >
        Vehicle photo
      </div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '28px',
          padding: '28px 30px'
        }}
      >
        <div>
          <Badge variant="green">Verified pre-owned</Badge>
          <h3 style={{ font: '600 21px/1.2 var(--ui), sans-serif', margin: '14px 0 0' }}>
            12 inspected vehicles, with full service history
          </h3>
          <p
            style={{
              margin: '9px 0 0',
              font: '400 14.5px/1.55 var(--ui), sans-serif',
              color: 'var(--ink-60)',
              maxWidth: '520px'
            }}
          >
            Every car on the Kojo Motors lot has passed a 42-point check. Reserve online with a refundable deposit, or list your own for trade-in.
          </p>
        </div>

        <Button
          variant="primary"
          size="lg"
          style={{ flex: 'none' }}
          onClick={() => navigateTo('market')}
        >
          Browse marketplace
        </Button>
      </div>
    </article>
  );
}
