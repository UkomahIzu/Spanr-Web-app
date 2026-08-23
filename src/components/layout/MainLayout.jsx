import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Toast } from '../common/Toast';
import { useApp } from '../../context/AppContext';

export function MainLayout({ children }) {
  const { toastMessage } = useApp();

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', boxSizing: 'border-box' }}>
      {/* Full screen main app box */}
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#f4f5f7',
          overflow: 'hidden'
        }}
      >
        <Sidebar />

        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Header />

          <main
            style={{
              flex: 1,
              overflow: 'auto',
              padding: '36px 36px 44px',
              boxSizing: 'border-box'
            }}
          >
            {children}
          </main>
        </div>
      </div>

      <Toast message={toastMessage} />
    </div>
  );
}

