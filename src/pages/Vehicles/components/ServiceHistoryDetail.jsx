import React from 'react';
import { useApp } from '../../../context/AppContext';
import { VEHICLES } from '../../../data/mockData';
import { ChevronRight } from 'lucide-react';

export function ServiceHistoryDetail() {
  const { selectedVehicleId, openVisit, showToast } = useApp();
  const vehicle = VEHICLES.find((v) => v.id === selectedVehicleId) || VEHICLES[0];

  const history = [
    {
      id: 'JOB-4821',
      title: 'Brake service + general diagnostic',
      meta: 'JOB-4821 · Chidi O. · in progress',
      amount: '₦71,500',
      date: 'Today'
    },
    {
      id: 'JOB-4390',
      title: 'Full synthetic oil change',
      meta: 'JOB-4390 · Chidi O. · you rated 5 ★',
      amount: '₦68,000',
      date: '12 Feb 2026'
    },
    {
      id: 'JOB-4102',
      title: 'AC regas & cabin filter',
      meta: 'JOB-4102 · Musa B. · not yet rated',
      amount: '₦54,500',
      date: '04 Nov 2025'
    }
  ];

  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '26px 28px 28px'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '6px'
        }}
      >
        <h3 style={{ font: '600 18px/1.2 var(--ui), sans-serif', margin: 0 }}>
          Service history — {vehicle.model}
        </h3>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            showToast('Preparing your invoices for download...');
          }}
          style={{ font: '600 13px/1 var(--ui), sans-serif' }}
        >
          Download all invoices
        </a>
      </div>

      {history.map((item, idx) => (
        <div
          key={item.id}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '20px',
            padding: '22px 0',
            borderBottom: idx === history.length - 1 ? 'none' : '1px solid rgba(22,24,29,.08)'
          }}
        >
          <div>
            <div style={{ font: '700 15.5px/1.3 var(--ui), sans-serif' }}>{item.title}</div>
            <div
              style={{
                font: '400 13.5px/1.45 var(--ui), sans-serif',
                color: 'var(--ink-60)',
                marginTop: '6px'
              }}
            >
              {item.meta}
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ font: '700 15px/1 var(--ui), sans-serif' }}>{item.amount}</div>
            <div
              style={{
                font: '400 12.5px/1 var(--ui), sans-serif',
                color: 'var(--ink-45)',
                marginTop: '7px'
              }}
            >
              {item.date}
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openVisit(item.id);
              }}
              className="hover-blue-accent"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '9px',
                height: '34px',
                padding: '0 12px',
                border: '1px solid rgba(22,24,29,.16)',
                borderRadius: '8px',
                color: '#16181d',
                font: '700 12.5px/1 var(--ui), sans-serif',
                textDecoration: 'none'
              }}
            >
              View detail
              <ChevronRight size={13} strokeWidth={2.4} />
            </a>
          </div>
        </div>
      ))}
    </article>
  );
}
