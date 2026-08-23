import React from 'react';
import { useApp } from '../../../context/AppContext';
import { SHOPS } from '../../../data/mockData';
import { Badge } from '../../../components/common/Badge';
import { Button } from '../../../components/common/Button';
import { Stepper } from '../../../components/common/Stepper';
import { RotateCw } from 'lucide-react';

export function VisitTimeline() {
  const { selectedVisit, navigateTo } = useApp();
  const shop = SHOPS[selectedVisit.shopKey];

  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '26px 30px 30px'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '22px'
        }}
      >
        <div>
          <h2
            style={{
              font: '600 22px/1.2 var(--ui), sans-serif',
              letterSpacing: '-.015em',
              margin: 0
            }}
          >
            {selectedVisit.title}
          </h2>
          <div
            style={{
              font: '400 13.5px/1.4 var(--ui), sans-serif',
              color: 'var(--ink-60)',
              marginTop: '8px'
            }}
          >
            {selectedVisit.vehicle} · {shop.shopName || shop.fullName} · {selectedVisit.date}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 'none' }}>
          <Badge variant={selectedVisit.tone} dot>
            {selectedVisit.status}
          </Badge>
          <Button
            variant="primary"
            icon={RotateCw}
            onClick={() => navigateTo('book')}
          >
            Reorder
          </Button>
        </div>
      </div>

      <Stepper steps={selectedVisit.steps} />
    </article>
  );
}
