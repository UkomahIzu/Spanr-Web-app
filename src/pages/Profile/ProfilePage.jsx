import React from 'react';
import { UserProfileForm } from './components/UserProfileForm';
import { ChannelPreferences } from './components/ChannelPreferences';
import { ShopManagement } from './components/ShopManagement';

export function ProfilePage() {
  return (
    <div>
      <div style={{ marginBottom: '28px' }}>
        <h1
          style={{
            font: '600 30px/1.1 var(--ui), sans-serif',
            letterSpacing: '-.02em',
            margin: 0
          }}
        >
          Profile &amp; settings
        </h1>
        <p
          style={{
            margin: '10px 0 0',
            font: '400 15px/1.5 var(--ui), sans-serif',
            color: 'var(--ink-60)'
          }}
        >
          Your details, how you'd like to be reached, and the shops you use.
        </p>
      </div>

      <UserProfileForm />
      <ChannelPreferences />
      <ShopManagement />
    </div>
  );
}
