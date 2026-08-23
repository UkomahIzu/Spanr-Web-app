import React from 'react';
import { useApp } from '../../../context/AppContext';
import { VISITS, SHOPS } from '../../../data/mockData';
import { Badge } from '../../../components/common/Badge';
import { Car } from 'lucide-react';

export function VisitsTable() {
  const { selectedVisitId, setSelectedVisitId } = useApp();

  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '26px 28px 28px',
        marginBottom: '24px'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '18px'
        }}
      >
        <h3 style={{ font: '600 17.5px/1.2 var(--ui), sans-serif', margin: 0 }}>
          All visits
        </h3>
        <span style={{ font: '400 13.5px/1 var(--ui), sans-serif', color: 'var(--ink-45)' }}>
          {VISITS.length} visits
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '88px .7fr 1.8fr 1fr .8fr .8fr .9fr',
          gap: '16px',
          paddingBottom: '12px',
          borderBottom: '1px solid rgba(22,24,29,.12)',
          font: '800 10.5px/1 var(--ui), sans-serif',
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: 'var(--ink-45)',
          alignItems: 'center'
        }}
      >
        <span>Car</span>
        <span>Job</span>
        <span>Service</span>
        <span>Vehicle</span>
        <span>Date</span>
        <span style={{ textAlign: 'right' }}>Amount</span>
        <span style={{ textAlign: 'right' }}>Status</span>
      </div>

      {VISITS.map((visit) => {
        const shop = SHOPS[visit.shopKey];
        const isKojo = visit.shopKey === 'kojo';
        const shopBg = isKojo ? '#eef3ff' : '#f3eefb';
        const shopFg = isKojo ? '#0930a0' : '#5b3fa8';
        const isSelected = selectedVisitId === visit.id;

        return (
          <div
            key={visit.id}
            onClick={() => setSelectedVisitId(visit.id)}
            className="hover-bg-light"
            style={{
              display: 'grid',
              gridTemplateColumns: '88px .7fr 1.8fr 1fr .8fr .8fr .9fr',
              gap: '16px',
              padding: '16px 0',
              borderBottom: '1px solid rgba(22,24,29,.08)',
              background: isSelected ? '#f7faff' : 'transparent',
              font: '400 14.5px/1.35 var(--ui), sans-serif',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'background 0.15s ease'
            }}
          >
            <div
              style={{
                width: '80px',
                height: '52px',
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#eceef1',
                border: '1px solid rgba(22,24,29,.1)',
                display: 'grid',
                placeItems: 'center'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: visit.colorHex,
                    border: '1px solid rgba(22,24,29,.2)'
                  }}
                />
                <Car size={20} color="rgba(22,24,29,.35)" strokeWidth={2} />
              </span>
            </div>

            <span style={{ fontWeight: 600, color: isSelected ? '#0e4fff' : '#16181d' }}>
              {visit.id}
            </span>

            <span>
              <span style={{ fontWeight: 600, display: 'block' }}>{visit.title}</span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: '24px',
                  marginTop: '7px',
                  padding: '0 8px',
                  borderRadius: '5px',
                  background: shopBg,
                  color: shopFg,
                  font: '700 11.5px/1 var(--ui), sans-serif',
                  whiteSpace: 'nowrap'
                }}
              >
                {shop.shopName || shop.fullName}
              </span>
            </span>

            <span>
              <span style={{ color: 'var(--ink-60)', fontSize: '13.5px', display: 'block' }}>
                {visit.short}
              </span>
              <span
                style={{
                  font: '400 12.5px/1 var(--ui), sans-serif',
                  color: 'var(--ink-45)',
                  display: 'block',
                  marginTop: '5px'
                }}
              >
                {visit.color}
              </span>
            </span>

            <span style={{ color: 'var(--ink-60)', fontSize: '13.5px' }}>{visit.date}</span>

            <span style={{ textAlign: 'right', fontWeight: 600 }}>{visit.amount}</span>

            <span style={{ textAlign: 'right' }}>
              <Badge variant={visit.tone} dot>
                {visit.status}
              </Badge>
            </span>
          </div>
        );
      })}
    </article>
  );
}
