import React, { useState } from 'react';

// TODO: Temp info -> Facility_Data.lis
const facilities = [
    { id: "gym", name: "Gym", description: "sports hall", capacity: 4, location: "C1033", availability: "Available to all", image: "/src/images/gym.jpg" },
    { id: "auditorium", name: "Auditorium", description: "the auditorium theater", capacity: 30, location: "A234", availability: "Available to all", image: "/src/images/auditorium.jpg" },
    { id: "pool", name: "Swimming Pool", description: "aqautic center", capacity: 4, location: "C1033", availability: "Available to all", image: "/src/images/pool.jpg" },
    { id: "seminar", name: "Seminar Room", description: "lecture hall", capacity: 4, location: "C1033", availability: "Available to all", image: "/src/images/seminar.jpg" },
    { id: "conference", name: "Conference Room", description: "meeting space", capacity: 4, location: "C1033", availability: "Only for SUNY Korea", image: "/src/images/conference.jpg" },
    { id: "library", name: "Library", description: "study and read books", capacity: 4, location: "C1033", availability: "Only for SUNY Korea", image: "/src/images/library.jpg" },
];

const ReservationForm: React.FC = () => {
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

    if (people > facilityCapacity) {
      alert("Cannot reserve. (Capacity)");
      return;
    }

    if (selectedDate < today) {
      alert("Cannot reserve. (Date)");
      return;
    }

    if (selectedFacility.availability === "Only for SUNY Korea" && affiliation === 'no') {
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
    <form onSubmit={handleSubmit}>
      <select value={facility} onChange={e => setFacility(e.target.value)}>
        {facilities.map(f => (
          <option key={f.id} value={f.id}>{f.name}</option>
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
  );
};

export default ReservationForm;
