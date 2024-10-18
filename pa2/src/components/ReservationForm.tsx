import React, { useState } from 'react';
import { facilities } from '../data/FacilityData';

function ReservationForm() {
  const [facility, setFacility] = useState('gym');
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(1);
  const [affiliation, setAffiliation] = useState('yes');
  const [purpose, setPurpose] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const selectedFacility = facilities.find(f => f.name === facility);
    if (!selectedFacility) return;

    const facilityCapacity = selectedFacility.participants;
    const today = new Date();
    const selectedDate = new Date(date);

    if (people > facilityCapacity.split(' - ').map(Number)[1]) {
      alert("Cannot reserve. (Capacity)");
      return;
    }

    if (selectedDate < today) {
      alert("Cannot reserve. (Date)");
      return;
    }

    if (selectedFacility.available === "Only for SUNY Korea" && affiliation === 'no') {
      alert("Cannot reserve. (Affiliation)");
      return;
    }

    const reservation = { facility, date, people, affiliation, purpose };
    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));

    alert("Reserved successfully.");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={facility} onChange={e => setFacility(e.target.value)}>
          {facilities.map(f => (
            <option key={f.name} value={f.name}>{f.name}</option>
          ))}
        </select>

        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <input type="number" value={people} onChange={e => setPeople(Number(e.target.value))} min="1" />
      
        <div>
          <label>
            <input type="radio" value="yes" checked={affiliation === 'yes'} onChange={() => setAffiliation('yes')} />
            SUNY Korea
          </label>
          <label>
            <input type="radio" value="no" checked={affiliation === 'no'} onChange={() => setAffiliation('no')} />
            Non-SUNY Korea
          </label>
        </div>

        <textarea value={purpose} onChange={e => setPurpose(e.target.value)} placeholder="Purpose of Reservation" />

        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default ReservationForm;
