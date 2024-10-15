import { useState, useEffect } from 'react';

function Reservations() {
  const [reservations, setReservations] = useState<any[]>([]);

  useEffect(() => {
    const savedReservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    setReservations(savedReservations);
  }, []);

  return (
    <div>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <div className="reservation-list">
          {reservations.map((reservation, index) => (
            <div key={index} className="reservation-item">
              <h2>{reservation.facility}</h2>
              <p>Date: {reservation.date}</p>
              <p>Number of People: {reservation.people}</p>
              <p>Affiliation: {reservation.affiliation === 'yes' ? 'SUNY Korea' : 'Non-SUNY Korea'}</p>
              <p>Purpose: {reservation.purpose}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Reservations;
