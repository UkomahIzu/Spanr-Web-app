import React from 'react';
import { useApp } from '../../../context/AppContext';
import { RatingStars } from '../../../components/common/RatingStars';
import { Button } from '../../../components/common/Button';

export function VisitRatingCard() {
  const { selectedVisit, visitRatings, setRatingForVisit, showToast } = useApp();

  // Only show rating card for completed visits
  if (selectedVisit.status !== 'Completed') return null;

  const currentRating = visitRatings[selectedVisit.id] || 0;

  return (
    <article
      style={{
        background: '#fff',
        border: '1px solid rgba(22,24,29,.12)',
        borderRadius: '10px',
        padding: '24px 28px 26px'
      }}
    >
      <h3 style={{ font: '600 17.5px/1.2 var(--ui), sans-serif', margin: '0 0 6px' }}>
        Rate this visit
      </h3>
      <p
        style={{
          margin: '0 0 16px',
          font: '400 13.5px/1.55 var(--ui), sans-serif',
          color: 'var(--ink-60)'
        }}
      >
        {selectedVisit.rated || 'Share your feedback for the technician and workshop team.'}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <RatingStars
          rating={currentRating}
          onRate={(r) => setRatingForVisit(selectedVisit.id, r)}
        />
        <Button
          variant="primary"
          onClick={() => showToast('Thanks for your feedback!')}
        >
          Submit rating
        </Button>
      </div>
    </article>
  );
}
