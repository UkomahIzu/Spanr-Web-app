import React from 'react';

export function Stepper({ steps }) {
  if (!steps || !steps.length) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {steps.map((step, index) => {
        const isDone = step.state === 'done';
        const isCurrent = step.state === 'current';
        const isTodo = step.state === 'todo';
        const isLast = index === steps.length - 1;

        return (
          <div key={index} style={{ display: 'flex', gap: '18px', paddingBottom: '22px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
              <span
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: isTodo ? '#fff' : '#0e4fff',
                  border: isTodo ? '2px solid rgba(22, 24, 29, 0.18)' : 'none',
                  boxSizing: 'border-box',
                  boxShadow: isCurrent ? '0 0 0 5px #dbe5ff' : 'none'
                }}
              />
              {!isLast && (
                <span
                  style={{
                    width: '2px',
                    flex: 1,
                    background: isDone ? '#0e4fff' : 'rgba(22, 24, 29, 0.12)',
                    marginTop: '4px'
                  }}
                />
              )}
            </div>
            <div>
              <div
                style={{
                  font: '800 15px/1.2 var(--ui), sans-serif',
                  color: isTodo ? 'rgba(22, 24, 29, 0.45)' : '#16181d'
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  font: '400 13.5px/1.45 var(--ui), sans-serif',
                  color: 'var(--ink-60)',
                  marginTop: '6px'
                }}
              >
                {step.desc}
              </div>
              <div
                style={{
                  font: '400 12.5px/1 var(--ui), sans-serif',
                  color: 'var(--ink-45)',
                  marginTop: '7px'
                }}
              >
                {step.time}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
