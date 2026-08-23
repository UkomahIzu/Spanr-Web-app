import React from 'react';
import { useApp } from '../../../context/AppContext';
import { Badge } from '../../../components/common/Badge';
import { Button } from '../../../components/common/Button';
import { Heart } from 'lucide-react';

export function ListingCard({ listing }) {
  const { setSelectedListingId, wishlist, toggleWishlist } = useApp();
  const isWishlisted = !!wishlist[listing.id];

  return (
    <article
      className="hover-blue-accent"
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        overflow: 'hidden',
        transition: 'all 0.15s ease'
      }}
    >
      <div
        style={{
          aspectRatio: '4/3',
          background: '#eceef1',
          borderBottom: '1px solid rgba(22,24,29,.1)',
          display: 'grid',
          placeItems: 'center',
          font: '600 11px/1 var(--ui), sans-serif',
          color: 'var(--ink-45)'
        }}
      >
        Vehicle photo
      </div>

      <div style={{ padding: '20px 20px 22px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
          <div style={{ font: '800 15px/1.25 var(--ui), sans-serif' }}>{listing.title}</div>
          <Badge variant={listing.tone}>{listing.status}</Badge>
        </div>

        <div style={{ font: '400 13px/1 var(--ui), sans-serif', color: 'var(--ink-60)', marginTop: '9px' }}>
          {listing.subtitle}
        </div>

        <div style={{ font: '800 19px/1 var(--ui), sans-serif', marginTop: '16px' }}>
          {listing.price}
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
          <Button
            variant="outline"
            style={{ flex: 1 }}
            onClick={() => setSelectedListingId(listing.id)}
          >
            View listing details
          </Button>

          <button
            aria-label="Save to wishlist"
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(listing.id);
            }}
            style={{
              width: '44px',
              height: '44px',
              flex: 'none',
              display: 'grid',
              placeItems: 'center',
              border: isWishlisted ? '1px solid #e0a45c' : '1px solid rgba(22,24,29,.16)',
              background: isWishlisted ? '#fff8ee' : '#fff',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            <Heart
              size={18}
              color={isWishlisted ? '#e07b00' : 'rgba(22,24,29,.45)'}
              fill={isWishlisted ? '#e07b00' : 'none'}
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
    </article>
  );
}
