import React from 'react';
import { useApp } from '../../../context/AppContext';
import { CATALOG, CATEGORIES } from '../../../data/mockData';
import { Button } from '../../../components/common/Button';
import { Search, Check } from 'lucide-react';

export function ServiceGrid() {
  const {
    selectedCategory,
    selectedService,
    setSelectedService,
    navigateTo
  } = useApp();

  const filteredCatalog =
    selectedCategory === 'all'
      ? CATALOG
      : CATALOG.filter((item) => item.cat === selectedCategory);

  const activeCategoryObj =
    CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];

  return (
    <div>
      {/* Diagnostic Request Box */}
      <div
        style={{
          background: '#fff',
          border: '1px dashed rgba(22,24,29,.28)',
          borderRadius: '10px',
          padding: '24px 24px 26px',
          marginBottom: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px'
        }}
      >
        <div>
          <div style={{ font: '800 16.5px/1.25 var(--ui), sans-serif' }}>
            Not sure what's wrong?
          </div>
          <p
            style={{
              margin: '8px 0 0',
              font: '400 13.5px/1.55 var(--ui), sans-serif',
              color: 'var(--ink-60)'
            }}
          >
            Request a general diagnostic. The shop inspects first, then sends you an itemised quote — no price shown up front.
          </p>
        </div>
        <Button variant="outline" onClick={() => navigateTo('diagnostic')}>
          Request diagnostic
        </Button>
      </div>

      {/* Catalogue Label */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px'
        }}
      >
        <div
          style={{
            font: '800 11px/1 var(--ui), sans-serif',
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: '#0e4fff'
          }}
        >
          {activeCategoryObj.label}
        </div>
        <div style={{ font: '400 13.5px/1 var(--ui), sans-serif', color: 'var(--ink-45)' }}>
          {filteredCatalog.length} services
        </div>
      </div>

      {/* Services Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
        {filteredCatalog.map((svc) => {
          const isSelected = selectedService === svc.id;

          return (
            <div
              key={svc.id}
              onClick={() => setSelectedService(svc.id)}
              style={{
                background: '#fff',
                border: isSelected ? '2px solid #0e4fff' : '1px solid rgba(22,24,29,.12)',
                borderRadius: '10px',
                padding: '18px 20px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                  <div style={{ font: '800 15.5px/1.2 var(--ui), sans-serif' }}>
                    {svc.title}
                  </div>
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '6px',
                      background: isSelected ? '#0e4fff' : 'transparent',
                      border: isSelected ? 'none' : '1.5px solid rgba(22,24,29,.2)',
                      display: 'grid',
                      placeItems: 'center',
                      flex: 'none'
                    }}
                  >
                    {isSelected && <Check size={12} strokeWidth={3.5} color="#fff" />}
                  </span>
                </div>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '8px',
                    font: '700 11.5px/1 var(--ui), sans-serif',
                    letterSpacing: '.01em',
                    color: '#0930a0',
                    background: '#eef3ff',
                    padding: '5px 8px',
                    borderRadius: '5px'
                  }}
                >
                  <Search size={11} strokeWidth={2.4} />
                  {svc.diag}
                </span>

                <p
                  style={{
                    margin: '8px 0 0',
                    font: '400 13px/1.4 var(--ui), sans-serif',
                    color: 'var(--ink-60)'
                  }}
                >
                  {svc.desc}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginTop: '14px' }}>
                <span style={{ font: '800 18px/1 var(--ui), sans-serif' }}>
                  {svc.priceLabel}
                </span>
                <span style={{ font: '400 12.5px/1 var(--ui), sans-serif', color: 'var(--ink-45)' }}>
                  ≈ {svc.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
