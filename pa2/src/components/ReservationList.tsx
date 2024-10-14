import React from 'react';

const ReservationList: React.FC = () => {
  const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');

  if (reservations.length === 0) {
    return <h1>No Reservation Found</h1>;
  }

  return (
    <div className="reservation-list">
      {reservations.map((reservation: any, index: number) => (
        <div key={index} className="reserved-item">
          <h2>{reservation.facility}</h2>
          <p>Date: {reservation.date}</p>
          <p>People: {reservation.people}</p>
          <p>Purpose: {reservation.purpose}</p>
        </div>
      ))}
    </div>
  );
};

export default ReservationList;
