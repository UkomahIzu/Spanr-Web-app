import React from 'react';
import { useApp } from '../../../context/AppContext';
import { VEHICLES } from '../../../data/mockData';
import { Badge } from '../../../components/common/Badge';
import { Plus } from 'lucide-react';

export function VehicleCardList() {
  const { selectedVehicleId, setSelectedVehicleId, showToast } = useApp();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {VEHICLES.map((v) => {
        const isSelected = selectedVehicleId === v.id;

        return (
          <div
            key={v.id}
            onClick={() => setSelectedVehicleId(v.id)}
            style={{
              background: '#fff',
              border: isSelected ? '2px solid #0e4fff' : '1px solid rgba(22,24,29,.12)',
              borderRadius: '10px',
              padding: '22px 22px 24px',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
              <div>
                <div style={{ font: '800 17px/1.2 var(--ui), sans-serif' }}>{v.model}</div>
                <div style={{ font: '400 13.5px/1.35 var(--ui), sans-serif', color: 'var(--ink-60)', marginTop: '7px' }}>
                  {v.year} · {v.plate}
                </div>
              </div>
              <Badge variant={v.statusTone}>{v.status}</Badge>
            </div>

            <div style={{ display: 'flex', gap: '28px', marginTop: '20px', paddingTop: '18px', borderTop: '1px solid rgba(22,24,29,.1)' }}>
              <div>
                <div style={{ font: '400 11px/1 var(--ui), sans-serif', color: 'var(--ink-45)' }}>Visits</div>
                <div style={{ font: '800 16px/1 var(--ui), sans-serif', marginTop: '7px' }}>{v.visitsCount}</div>
              </div>
              <div>
                <div style={{ font: '400 11px/1 var(--ui), sans-serif', color: 'var(--ink-45)' }}>Mileage</div>
                <div style={{ font: '800 16px/1 var(--ui), sans-serif', marginTop: '7px' }}>{v.mileage}</div>
              </div>
              <div>
                <div style={{ font: '400 11px/1 var(--ui), sans-serif', color: 'var(--ink-45)' }}>Last service</div>
                <div style={{ font: '800 16px/1 var(--ui), sans-serif', marginTop: '7px' }}>{v.lastService}</div>
              </div>
            </div>
          </div>
        );
      })}

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          showToast('Add-vehicle form opened.');
        }}
        className="hover-blue-accent"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '9px',
          height: '52px',
          border: '1px dashed rgba(22,24,29,.28)',
          borderRadius: '10px',
          color: '#16181d',
          font: '800 13px/1 var(--ui), sans-serif',
          textDecoration: 'none',
          transition: 'all 0.15s ease'
        }}
      >
        <Plus size={16} strokeWidth={2.5} />
        Add a vehicle
      </a>
    </div>
  );
}
