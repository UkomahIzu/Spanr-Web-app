import React from 'react';
import { useApp } from '../../../context/AppContext';
import { Badge } from '../../../components/common/Badge';
import { Button } from '../../../components/common/Button';
import { Check } from 'lucide-react';

export function ListingDetailView() {
  const { selectedListing, showToast } = useApp();

  return (
    <article
      id="listing-detail"
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        overflow: 'hidden',
        marginTop: '24px'
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 0, alignItems: 'stretch' }}>
        {/* Photos Grid */}
        <div style={{ background: '#eceef1', borderRight: '1px solid rgba(22,24,29,.1)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, minHeight: '280px', display: 'grid', placeItems: 'center', font: '600 12px/1 var(--ui), sans-serif', color: 'var(--ink-45)' }}>
            Vehicle photo
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(22,24,29,.1)' }}>
            {['Front', 'Interior', 'Engine', 'Rear'].map((viewName) => (
              <div
                key={viewName}
                style={{
                  aspectRatio: '4/3',
                  background: '#e3e5e9',
                  display: 'grid',
                  placeItems: 'center',
                  font: '600 10.5px/1 var(--ui), sans-serif',
                  color: 'var(--ink-45)'
                }}
              >
                {viewName}
              </div>
            ))}
          </div>
        </div>

        {/* Details Content */}
        <div style={{ padding: '28px 30px 30px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
            <div>
              <div style={{ font: '800 11px/1 var(--ui), sans-serif', letterSpacing: '.14em', textTransform: 'uppercase', color: '#0e4fff' }}>
                Listing details
              </div>
              <h3 style={{ font: '600 24px/1.2 var(--ui), sans-serif', letterSpacing: '-.015em', margin: '12px 0 0' }}>
                {selectedListing.title}
              </h3>
              <div style={{ font: '400 13.5px/1.4 var(--ui), sans-serif', color: 'var(--ink-60)', marginTop: '8px' }}>
                {selectedListing.subtitle}
              </div>
            </div>

            <Badge variant={selectedListing.tone} dot>
              {selectedListing.status}
            </Badge>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginTop: '18px' }}>
            <span style={{ font: '800 30px/1 var(--ui), sans-serif', letterSpacing: '-.025em' }}>
              {selectedListing.price}
            </span>
            <span style={{ font: '400 13.5px/1 var(--ui), sans-serif', color: 'var(--ink-45)' }}>
              {selectedListing.deposit}
            </span>
          </div>

          <div style={{ height: '1px', background: 'rgba(22,24,29,.12)', margin: '22px 0' }} />

          {/* Specifications Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px 24px' }}>
            {selectedListing.specs.map((sp, idx) => (
              <div key={idx}>
                <div style={{ font: '400 12px/1 var(--ui), sans-serif', color: 'var(--ink-45)' }}>{sp.label}</div>
                <div style={{ font: '700 14.5px/1.2 var(--ui), sans-serif', marginTop: '7px' }}>{sp.value}</div>
              </div>
            ))}
          </div>

          <div style={{ height: '1px', background: 'rgba(22,24,29,.12)', margin: '22px 0' }} />

          {/* Inspection Checks */}
          <div style={{ font: '800 11px/1 var(--ui), sans-serif', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-45)', marginBottom: '12px' }}>
            Inspection &amp; history
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {selectedListing.checks.map((ck, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  font: '400 13.5px/1.45 var(--ui), sans-serif',
                  color: 'var(--ink-60)'
                }}
              >
                <Check size={16} color="#12735a" strokeWidth={2.4} style={{ flex: 'none', marginTop: '2px' }} />
                {ck.text}
              </div>
            ))}
          </div>

          <p style={{ margin: '20px 0 0', font: '400 13.5px/1.55 var(--ui), sans-serif', color: 'var(--ink-60)' }}>
            {selectedListing.note}
          </p>

          <div style={{ display: 'flex', gap: '12px', marginTop: '22px' }}>
            <Button
              variant="outline"
              onClick={() => showToast('A sales advisor will call you about financing.')}
            >
              Financing interest
            </Button>
            <Button
              variant="primary"
              style={{ flex: 1 }}
              onClick={() => showToast('Reservation request sent — a sales advisor will call you back.')}
            >
              {selectedListing.cta}
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
