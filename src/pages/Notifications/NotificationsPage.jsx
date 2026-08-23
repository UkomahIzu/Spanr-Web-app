import React from 'react';
import { useApp } from '../../context/AppContext';
import { NotificationsListCard } from './components/NotificationList';

export function NotificationsPage() {
  const { setNotificationsRead } = useApp();

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '24px',
          marginBottom: '28px'
        }}
      >
        <div>
          <h1
            style={{
              font: '600 30px/1.1 var(--ui), sans-serif',
              letterSpacing: '-.02em',
              margin: 0
            }}
          >
            Notifications
          </h1>
          <p
            style={{
              margin: '10px 0 0',
              font: '400 15px/1.5 var(--ui), sans-serif',
              color: 'var(--ink-60)'
            }}
          >
            Everything from Kojo Motors, in one place. The same updates go to WhatsApp.
          </p>
        </div>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setNotificationsRead(true);
          }}
          style={{ font: '600 13px/1 var(--ui), sans-serif', paddingTop: '8px' }}
        >
          Mark all as read
        </a>
      </div>

      <NotificationsListCard previewMode={false} />
    </div>
  );
}
