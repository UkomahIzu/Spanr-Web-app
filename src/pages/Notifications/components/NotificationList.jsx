import React from 'react';
import { useApp } from '../../../context/AppContext';
import { NOTIFICATIONS_LIST } from '../../../data/mockData';
import { FileText, Lock, Clock, CheckSquare, Star } from 'lucide-react';

export function NotificationsListCard({ previewMode = false }) {
  const { notificationsRead, navigateTo, openVisit } = useApp();

  const items = previewMode ? NOTIFICATIONS_LIST.slice(0, 3) : NOTIFICATIONS_LIST;

  const getIcon = (type) => {
    switch (type) {
      case 'quote':
        return <FileText size={19} color="#0e4fff" strokeWidth={2} />;
      case 'payment':
        return <Lock size={19} color="#0e4fff" strokeWidth={2} />;
      case 'progress':
        return <Clock size={19} color="#0e4fff" strokeWidth={2} />;
      case 'diag':
        return <CheckSquare size={19} color="rgba(22,24,29,.45)" strokeWidth={2} />;
      case 'reward':
      case 'rating':
        return <Star size={19} color="rgba(22,24,29,.45)" strokeWidth={2} />;
      default:
        return <FileText size={19} color="#0e4fff" strokeWidth={2} />;
    }
  };

  if (previewMode) {
    return (
      <article
        style={{
          background: '#fff',
          border: '1px solid rgba(22,24,29,.12)',
          borderRadius: '10px',
          padding: '24px 26px 12px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px' }}>
          <h3 style={{ font: '600 17.5px/1.2 var(--ui), sans-serif', margin: 0 }}>
            Notifications
          </h3>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('notif');
            }}
            style={{ font: '600 13.5px/1 var(--ui), sans-serif' }}
          >
            See all
          </a>
        </div>

        {items.map((n, idx) => {
          const isUnread = !n.read && !notificationsRead;
          const dotBg = isUnread ? '#0e4fff' : 'rgba(22,24,29,.18)';
          const isLast = idx === items.length - 1;

          return (
            <div
              key={n.id}
              onClick={() => (n.screen === 'quote' ? navigateTo('quote') : openVisit('JOB-4821'))}
              className="hover-bg-light"
              style={{
                display: 'flex',
                gap: '13px',
                padding: '18px 0',
                borderBottom: isLast ? 'none' : '1px solid rgba(22,24,29,.08)',
                cursor: 'pointer',
                transition: 'background 0.15s ease'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: dotBg,
                  marginTop: '7px',
                  flex: 'none'
                }}
              />
              <div>
                <div
                  style={{
                    font: `${isUnread ? '600' : '400'} 14.5px/1.4 var(--ui), sans-serif`,
                    color: isUnread ? '#16181d' : 'var(--ink-60)'
                  }}
                >
                  {n.title}
                </div>
                <div
                  style={{
                    font: '400 12.5px/1 var(--ui), sans-serif',
                    color: 'var(--ink-45)',
                    marginTop: '6px'
                  }}
                >
                  {n.time}
                </div>
              </div>
            </div>
          );
        })}
      </article>
    );
  }

  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '8px 28px'
      }}
    >
      {items.map((n, idx) => {
        const isUnread = !n.read && !notificationsRead;
        const isLast = idx === items.length - 1;

        return (
          <div
            key={n.id}
            onClick={() => (n.screen === 'quote' ? navigateTo('quote') : openVisit('JOB-4821'))}
            className="hover-bg-light"
            style={{
              display: 'flex',
              gap: '16px',
              padding: '22px 0',
              borderBottom: isLast ? 'none' : '1px solid rgba(22,24,29,.08)',
              cursor: 'pointer',
              transition: 'background 0.15s ease'
            }}
          >
            <div style={{ marginTop: '2px', flex: 'none' }}>{getIcon(n.type)}</div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  font: `${isUnread ? '700' : '600'} 15.5px/1.3 var(--ui), sans-serif`,
                  color: isUnread ? '#16181d' : 'var(--ink-60)'
                }}
              >
                {n.title}
              </div>
              <div
                style={{
                  font: '400 13.5px/1.45 var(--ui), sans-serif',
                  color: 'var(--ink-60)',
                  marginTop: '6px'
                }}
              >
                {n.desc}
              </div>
            </div>
            <span
              style={{
                font: '400 12.5px/1 var(--ui), sans-serif',
                color: 'var(--ink-45)',
                marginTop: '4px',
                whiteSpace: 'nowrap'
              }}
            >
              {n.time}
            </span>
          </div>
        );
      })}
    </article>
  );
}
