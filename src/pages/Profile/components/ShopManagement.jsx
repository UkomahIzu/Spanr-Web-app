import React from 'react';
import { useApp } from '../../../context/AppContext';
import { Button } from '../../../components/common/Button';
import { Badge } from '../../../components/common/Badge';
import { LogOut } from 'lucide-react';

export function ShopManagement() {
  const { currentShop, setCurrentShop, showToast } = useApp();

  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '26px 30px 28px'
      }}
    >
      <h3 style={{ font: '600 17.5px/1.2 var(--ui), sans-serif', margin: '0 0 18px' }}>
        Your shops
      </h3>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          padding: '16px 0',
          borderBottom: '1px solid rgba(22,24,29,.08)'
        }}
      >
        <div>
          <div style={{ font: '600 14.5px/1.3 var(--ui), sans-serif' }}>Kojo Motors — Ikeja</div>
          <div style={{ font: '400 13.5px/1.35 var(--ui), sans-serif', color: 'var(--ink-60)', marginTop: '5px' }}>
            7 visits · Silver member
          </div>
        </div>
        {currentShop === 'kojo' ? (
          <Badge variant="blue">Current</Badge>
        ) : (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentShop('kojo');
              showToast('Switched to Kojo Motors — Ikeja.');
            }}
            style={{ font: '600 13px/1 var(--ui), sans-serif' }}
          >
            Switch
          </a>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          padding: '16px 0'
        }}
      >
        <div>
          <div style={{ font: '600 14.5px/1.3 var(--ui), sans-serif' }}>Autoworks — Lekki Phase 1</div>
          <div style={{ font: '400 13.5px/1.35 var(--ui), sans-serif', color: 'var(--ink-60)', marginTop: '5px' }}>
            1 visit · no points yet
          </div>
        </div>
        {currentShop === 'auto' ? (
          <Badge variant="blue">Current</Badge>
        ) : (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentShop('auto');
              showToast('Switched to Autoworks — Lekki Phase 1.');
            }}
            style={{ font: '600 13px/1 var(--ui), sans-serif' }}
          >
            Switch
          </a>
        )}
      </div>

      <Button
        variant="outline"
        style={{ marginTop: '22px' }}
        onClick={() => showToast('Add-shop flow opened.')}
      >
        Add a shop
      </Button>

      <div style={{ height: '1px', background: 'rgba(22,24,29,.1)', margin: '26px 0 22px' }} />

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          showToast('You have been logged out.');
        }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '9px',
          font: '800 13px/1 var(--ui), sans-serif',
          color: '#ae1800',
          textDecoration: 'none'
        }}
      >
        <LogOut size={16} strokeWidth={2} />
        Log out
      </a>
    </article>
  );
}
