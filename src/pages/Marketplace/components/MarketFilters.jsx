import React from 'react';
import { useApp } from '../../../context/AppContext';
import { Checkbox } from '../../../components/common/Checkbox';

export function MarketFilters() {
  const { marketFilter, toggleMarketFilter } = useApp();

  return (
    <aside
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '22px 20px 24px'
      }}
    >
      <div
        style={{
          font: '800 11px/1 var(--ui), sans-serif',
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          color: 'var(--ink-45)',
          marginBottom: '16px'
        }}
      >
        Filters
      </div>

      <div style={{ font: '600 13px/1 var(--ui), sans-serif', marginBottom: '10px' }}>
        Make
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
        <Checkbox
          checked={marketFilter.make.mb}
          onChange={() => toggleMarketFilter('make', 'mb')}
          label="Mercedes-Benz"
        />
        <Checkbox
          checked={marketFilter.make.toyota}
          onChange={() => toggleMarketFilter('make', 'toyota')}
          label="Toyota"
        />
        <Checkbox
          checked={marketFilter.make.lexus}
          onChange={() => toggleMarketFilter('make', 'lexus')}
          label="Lexus"
        />
        <Checkbox
          checked={marketFilter.make.honda}
          onChange={() => toggleMarketFilter('make', 'honda')}
          label="Honda"
        />
      </div>

      <div style={{ height: '1px', background: 'rgba(22,24,29,.12)', margin: '20px 0' }} />

      <div style={{ font: '600 13px/1 var(--ui), sans-serif', marginBottom: '12px' }}>
        Price
      </div>
      <div style={{ height: '6px', borderRadius: '3px', background: '#eceef1' }}>
        <div style={{ width: '58%', height: '6px', borderRadius: '3px', background: '#0e4fff' }} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
          font: '400 12.5px/1 var(--ui), sans-serif',
          color: 'var(--ink-45)'
        }}
      >
        <span>₦8m</span>
        <span>₦45m</span>
      </div>

      <div style={{ height: '1px', background: 'rgba(22,24,29,.12)', margin: '20px 0' }} />

      <div style={{ font: '600 13px/1 var(--ui), sans-serif', marginBottom: '10px' }}>
        Status
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
        <Checkbox
          checked={marketFilter.status.available}
          onChange={() => toggleMarketFilter('status', 'available')}
          label="Available"
        />
        <Checkbox
          checked={marketFilter.status.reserved}
          onChange={() => toggleMarketFilter('status', 'reserved')}
          label="Reserved"
        />
      </div>
    </aside>
  );
}
