import React from 'react';
import { useApp } from '../../../context/AppContext';
import { SHOPS } from '../../../data/mockData';
import { Button } from '../../../components/common/Button';
import { Wrench, Phone } from 'lucide-react';

export function WorkshopBanner() {
  const { currentShop, navigateTo, showToast } = useApp();
  const shop = SHOPS[currentShop] || SHOPS.kojo;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        background: '#eef3ff',
        border: '1px solid #c9d8ff',
        borderRadius: '10px',
        padding: '18px 22px',
        marginBottom: '22px'
      }}
    >
      <div
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '10px',
          background: '#0e4fff',
          color: '#fff',
          display: 'grid',
          placeItems: 'center',
          flex: 'none'
        }}
      >
        <Wrench size={22} strokeWidth={2} />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            font: '800 11px/1 var(--ui), sans-serif',
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: '#0930a0'
          }}
        >
          Current workshop
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '12px',
            marginTop: '9px',
            flexWrap: 'wrap'
          }}
        >
          <span style={{ font: '800 18px/1.2 var(--ui), sans-serif' }}>
            {shop.name} — {shop.branch}
          </span>
          <span style={{ font: '400 13.5px/1.2 var(--ui), sans-serif', color: 'var(--ink-60)' }}>
            {shop.address} · {shop.hours}
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', flex: 'none' }}>
        <Button
          variant="secondary"
          icon={Phone}
          onClick={() => showToast(`Calling ${shop.name} front desk...`)}
        >
          Call front desk
        </Button>
        <Button
          variant="primary"
          onClick={() => navigateTo('profile')}
        >
          Switch shop
        </Button>
      </div>
    </div>
  );
}
