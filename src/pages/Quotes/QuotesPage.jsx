import React from 'react';
import { QuoteItemsList } from './components/QuoteItemsList';
import { TechFindings } from './components/TechFindings';
import { QuoteSummarySidebar } from './components/QuoteSummarySidebar';
import { PastQuotesTable } from './components/PastQuotesTable';
import { Badge } from '../../components/common/Badge';

export function QuotesPage() {
  return (
    <div>
      {/* Header Title */}
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
            Quote for JOB-4821
          </h1>
          <p
            style={{
              margin: '10px 0 0',
              font: '400 15px/1.5 var(--ui), sans-serif',
              color: 'var(--ink-60)'
            }}
          >
            Sent by Emeka at Kojo Motors, Ikeja · Today 08:40. Untick anything you don't want done.
          </p>
        </div>

        <Badge variant="amber" dot style={{ height: '34px', padding: '0 13px' }}>
          Awaiting approval
        </Badge>
      </div>

      {/* Grid Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 360px',
          gap: '24px',
          alignItems: 'start'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <QuoteItemsList />
          <TechFindings />
        </div>

        <QuoteSummarySidebar />
      </div>

      {/* Past Quotes Table */}
      <PastQuotesTable />
    </div>
  );
}
