import React from 'react';
import { VehicleCardList } from './components/VehicleCardList';
import { ServiceHistoryDetail } from './components/ServiceHistoryDetail';

export function VehiclesPage() {
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
          My vehicles
        </h1>
        <p
          style={{
            margin: '10px 0 0',
            font: '400 15px/1.5 var(--ui), sans-serif',
            color: 'var(--ink-60)'
          }}
        >
          Every visit, invoice and technician note, kept per vehicle.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '340px 1fr',
          gap: '24px',
          alignItems: 'start'
        }}
      >
        <VehicleCardList />
        <ServiceHistoryDetail />
      </div>
    </div>
  );
}
