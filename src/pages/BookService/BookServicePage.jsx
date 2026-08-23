import React from 'react';
import { CategoryFilter } from './components/CategoryFilter';
import { ServiceGrid } from './components/ServiceGrid';
import { BookingSidebar } from './components/BookingSidebar';
import { AlertCircle } from 'lucide-react';

export function BookServicePage() {
  return (
    <div>
      {/* Page Title & Description */}
      <div style={{ marginBottom: '28px' }}>
        <h1
          style={{
            font: '600 30px/1.1 var(--ui), sans-serif',
            letterSpacing: '-.02em',
            margin: 0
          }}
        >
          Book a service
        </h1>
        <p
          style={{
            margin: '10px 0 0',
            font: '400 15px/1.5 var(--ui), sans-serif',
            color: 'var(--ink-60)'
          }}
        >
          Pick a service from the Kojo Motors catalogue, or request a general diagnostic and let the shop quote after inspection.
        </p>
      </div>

      {/* Mandatory diagnostic fee notice banner */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          padding: '16px 20px',
          border: '1.5px dashed #e0a45c',
          borderRadius: '10px',
          background: '#fff8ee'
        }}
      >
        <span
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '9px',
            background: '#e07b00',
            color: '#fff',
            display: 'grid',
            placeItems: 'center',
            flex: 'none'
          }}
        >
          <AlertCircle size={20} strokeWidth={2.2} />
        </span>
        <div>
          <div
            style={{
              font: '800 11px/1 var(--ui), sans-serif',
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: '#8a4b00'
            }}
          >
            Mandatory diagnostic fee
          </div>
          <div
            style={{
              font: '600 14.5px/1.5 var(--ui), sans-serif',
              color: '#8a4b00',
              marginTop: '7px'
            }}
          >
            A mandatory ₦5,000 in-person diagnostic fee applies, credited toward any work you approve.
          </div>
        </div>
      </div>

      <div style={{ height: '24px' }} />

      {/* 3 Column Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '220px 1fr 300px',
          gap: '24px',
          alignItems: 'start'
        }}
      >
        <CategoryFilter />
        <ServiceGrid />
        <BookingSidebar />
      </div>
    </div>
  );
}
