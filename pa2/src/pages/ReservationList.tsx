// Hyomin Kim
// hyomin.kim@stonybrook.edu

import { useState, useEffect } from "react";
import ReservedItem from "../components/ReservedItem";

function Reservations() {
  const [reservations, setReservations] = useState<any[]>([]);

  useEffect(() => {
    const savedReservations = JSON.parse(
      localStorage.getItem("reservations") || "[]"
    );
    setReservations(savedReservations);
  }, []);

  const handleDelete = (facilityName: string) => {
    const updatedReservations = reservations.filter(
      (reservation) => reservation.facility.name !== facilityName
    );
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
  };

  return (
    <div className="container mt-4">
      {reservations.length === 0 ? (
        <h1>No reservations found.</h1>
      ) : (
        <div className="reservation-list">
          {reservations.map((reservation, index) => (
            <ReservedItem
              key={index}
              reservation={reservation}
              onDelete={() => handleDelete(reservation.facility.name)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Reservations;
