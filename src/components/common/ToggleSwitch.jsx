import React from 'react';

export function ToggleSwitch({ checked, onChange }) {
  return (
    <span
      onClick={onChange}
      style={{
        width: '46px',
        height: '26px',
        borderRadius: '13px',
        background: checked ? '#0e4fff' : '#dcdfe4',
        position: 'relative',
        flex: 'none',
        cursor: 'pointer',
        display: 'inline-block',
        transition: 'background 0.2s ease'
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '3px',
          left: checked ? 'auto' : '3px',
          right: checked ? '3px' : 'auto',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: '#ffffff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
          transition: 'all 0.2s ease'
        }}
      />
    </span>
  );
}
