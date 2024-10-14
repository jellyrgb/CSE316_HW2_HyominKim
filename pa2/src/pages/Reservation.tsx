import React, { useState } from 'react';

// TODO: Temp info -> Facility_Data.lis
const facilities = [
  { id: "gym", name: "Gym", capacity: 4, availability: "Available to all" },
  { id: "auditorium", name: "Auditorium", capacity: 30, availability: "Available to all" },
  { id: "pool", name: "Swimming Pool", capacity: 4, availability: "Available to all" },
  { id: "seminar", name: "Seminar Room", capacity: 4, availability: "Available to all" },
  { id: "conference", name: "Conference Room", capacity: 4, availability: "Only for SUNY Korea" },
  { id: "library", name: "Library", capacity: 4, availability: "Only for SUNY Korea" },
];

function Reservation() {
  const [facility, setFacility] = useState('gym');
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(1);
  const [affiliation, setAffiliation] = useState('yes');
  const [purpose, setPurpose] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const selectedFacility = facilities.find(f => f.id === facility);
    if (!selectedFacility) return;

    const facilityCapacity = selectedFacility.capacity;
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

    if (selectedFacility.availability === "Only for SUNY Korea" && affiliation === 'no') {
      alert("Cannot reserve. (Affiliation requirement)");
      return;
    }

    // Store reservation
    const reservation = { facility, date, people, affiliation, purpose };
    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));

    alert("Reservation successful.");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Select facility */}
        <div>
          <label htmlFor="facility">Facility</label>
          <select id="facility" value={facility} onChange={e => setFacility(e.target.value)}>
            {facilities.map(f => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        </div>

        {/* Select date */}
        <div>
          <label htmlFor="date">Reservation Date</label>
          <input 
            type="date" 
            id="date" 
            value={date} 
            onChange={e => setDate(e.target.value)} 
            required 
          />
        </div>

        {/* Select number of people */}
        <div>
          <label htmlFor="people">Number of People</label>
          <input 
            type="number" 
            id="people" 
            value={people} 
            onChange={e => setPeople(Number(e.target.value))} 
            min="1" 
            max={facilities.find(f => f.id === facility)?.capacity || 1} 
            required 
          />
        </div>

        {/* Select affiliation */}
        <div>
          <label>Affiliation</label>
          <div>
            <label>
              <input 
                type="radio" 
                value="yes" 
                checked={affiliation === 'yes'} 
                onChange={() => setAffiliation('yes')} 
              />
              SUNY Korea
            </label>
            <label>
              <input 
                type="radio" 
                value="no" 
                checked={affiliation === 'no'} 
                onChange={() => setAffiliation('no')} 
              />
              Non-SUNY Korea
            </label>
          </div>
        </div>

        {/* Purpose */}
        <div>
          <label htmlFor="purpose">Purpose of Reservation</label>
          <textarea 
            id="purpose" 
            value={purpose} 
            onChange={e => setPurpose(e.target.value)} 
            placeholder="Enter the purpose" 
            required 
          />
        </div>

        {/* Submit button */}
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}

export default Reservation;
