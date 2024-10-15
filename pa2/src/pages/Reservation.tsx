import React, { useState } from 'react';
import FacilityList from '../components/FacilityList';
import { facilities } from '../data/FacilityData.ts';

function Reservation() {
  const [facility, setFacility] = useState('gym');
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(1);
  const [affiliation, setAffiliation] = useState('yes');
  const [purpose, setPurpose] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const selectedFacility = facilities.find(f => f.name === facility);
    if (!selectedFacility) return;

    const facilityCapacity = selectedFacility.participants.split(' - ').map(Number)[1];
    const today = new Date();
    const selectedDate = new Date(date);

    // Validation
    if (people > facilityCapacity) {
      alert("Cannot reserve. (Capacity exceeded)");
      return;
    }

    if (selectedDate < today) {
      alert("Cannot reserve. (Date is in the past)");
      return;
    }

    if (selectedFacility.available === "Only for SUNY Korea" && affiliation === 'no') {
      alert("Cannot reserve. (Affiliation requirement)");
      return;
    }

    // Store reservation
    const reservation = { facility, date, people, affiliation, purpose };
    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));
  };

  return (
    <div>
      <FacilityList onSelect={setFacility} />
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Number of People:
          <input type="number" value={people} onChange={(e) => setPeople(Number(e.target.value))} />
        </label>
        <label>
          Affiliation (SUNY Korea):
          <select value={affiliation} onChange={(e) => setAffiliation(e.target.value)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label>
          Purpose:
          <input type="text" value={purpose} onChange={(e) => setPurpose(e.target.value)} />
        </label>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}

export default Reservation;