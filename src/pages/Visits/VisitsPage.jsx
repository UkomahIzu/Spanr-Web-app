import React from 'react';
import { VisitsTable } from './components/VisitsTable';
import { VisitTimeline } from './components/VisitTimeline';
import { VisitRatingCard } from './components/VisitRatingCard';
import { TechnicianCard } from './components/TechnicianCard';

export function VisitsPage() {
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
          My visits
        </h1>
        <p
          style={{
            margin: '10px 0 0',
            font: '400 15px/1.5 var(--ui), sans-serif',
            color: 'var(--ink-60)'
          }}
        >
          One live job and everything you've had done before. Select a visit to see its full timeline.
        </p>
      </div>

      {/* Visits List Table */}
      <VisitsTable />

      {/* Selected Visit Detail Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 340px',
          gap: '24px',
          alignItems: 'start'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <VisitTimeline />
          <VisitRatingCard />
        </div>

        <TechnicianCard />
      </div>
    </div>
  );
}
