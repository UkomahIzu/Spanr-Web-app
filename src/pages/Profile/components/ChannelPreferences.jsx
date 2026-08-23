import React from 'react';
import { useApp } from '../../../context/AppContext';
import { ToggleSwitch } from '../../../components/common/ToggleSwitch';

export function ChannelPreferences() {
  const { channelToggles, toggleChannelSwitch } = useApp();

  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '26px 30px 28px',
        marginBottom: '24px'
      }}
    >
      <h3 style={{ font: '600 17.5px/1.2 var(--ui), sans-serif', margin: '0 0 18px' }}>
        Notification channel preferences
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
          <div style={{ font: '600 14.5px/1.3 var(--ui), sans-serif' }}>WhatsApp updates</div>
          <div style={{ font: '400 13.5px/1.35 var(--ui), sans-serif', color: 'var(--ink-60)', marginTop: '5px' }}>
            Quotes, status changes and receipts
          </div>
        </div>
        <ToggleSwitch
          checked={channelToggles.whatsapp}
          onChange={() => toggleChannelSwitch('whatsapp')}
        />
      </div>

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
          <div style={{ font: '600 14.5px/1.3 var(--ui), sans-serif' }}>SMS fallback</div>
          <div style={{ font: '400 13.5px/1.35 var(--ui), sans-serif', color: 'var(--ink-60)', marginTop: '5px' }}>
            Used if WhatsApp doesn't deliver
          </div>
        </div>
        <ToggleSwitch
          checked={channelToggles.sms}
          onChange={() => toggleChannelSwitch('sms')}
        />
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
          <div style={{ font: '600 14.5px/1.3 var(--ui), sans-serif' }}>Offers from this shop</div>
          <div style={{ font: '400 13.5px/1.35 var(--ui), sans-serif', color: 'var(--ink-60)', marginTop: '5px' }}>
            Promotions and reward reminders
          </div>
        </div>
        <ToggleSwitch
          checked={channelToggles.offers}
          onChange={() => toggleChannelSwitch('offers')}
        />
      </div>
    </article>
  );
}
