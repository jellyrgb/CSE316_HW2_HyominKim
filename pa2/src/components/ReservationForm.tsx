import React, { useState, useEffect } from 'react';
import { facilities, Facility } from '../data/FacilityData';
import ReservationItem from '../components/ReservationItem';

interface ReservationFormProps {
  onSelectFacility: (facility: Facility | null) => void;
}

function ReservationForm({ onSelectFacility }: ReservationFormProps) {
  const [facility, setFacility] = useState<Facility | null>(null);
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(1);
  const [affiliation, setAffiliation] = useState('yes');
  const [purpose, setPurpose] = useState('');

  useEffect(() => {
    const initialFacility = facilities.find(f => f.name === 'Gym') || null;
    setFacility(initialFacility);
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!facility) return;

    const facilityCapacity = facility.participants;
    const today = new Date();
    const selectedDate = new Date(date);

    if (people > facilityCapacity.split(' - ').map(Number)[1] || people < facilityCapacity.split(' - ').map(Number)[0]) {
      alert("Cannot reserve. (Capacity)");
      return;
    }

    if (selectedDate < today) {
      alert("Cannot reserve. (Date)");
      return;
    }

    if (facility.available === "Only for SUNY Korea" && affiliation === 'no') {
      alert("Cannot reserve. (Affiliation)");
      return;
    }

    const reservation = {
      facility,
      date,
      people,
      affiliation,
      purpose
    };

    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));

    alert("Reserved successfully.");
  };

  const handleFacilityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFacility = facilities.find(f => f.name === event.target.value) || null;
    setFacility(selectedFacility);
    onSelectFacility(selectedFacility);
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <select id="facility" className="form-control" value={facility?.name || ''} onChange={handleFacilityChange}>
            {facilities.map(f => (
              <option key={f.name} value={f.name}>{f.name}</option>
            ))}
          </select>
        </div>

        {facility && <ReservationItem facility={facility} />}

        <div className="form-group">
          <label className="form-label">Date to be Used:</label>
          <input type="date" id="date" className="form-control" value={date} onChange={e => setDate(e.target.value)}/>
        </div>

        <div className="form-group">
          <label className="form-label">Number of People:</label>
          <input type="number" id="people" className="form-control" value={people} onChange={e => setPeople(Number(e.target.value))} min="1"/>
        </div>

        <div className="form-group">
          <div className="form-check">
            <input type="radio" id="affiliationYes" className="form-check-input" value="yes" checked={affiliation === 'yes'} onChange={() => setAffiliation('yes')}/>
            <label className="form-check-label">SUNY Korea</label>
          </div>

          <div className="form-check">
            <input type="radio" id="affiliationNo" className="form-check-input" value="no" checked={affiliation === 'no'} onChange={() => setAffiliation('no')}/>
            <label className="form-check-label">Non-SUNY Korea</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="purpose" className="form-label">Purpose of Use:</label>
          <textarea id="purpose" className="form-control" value={purpose} onChange={e => setPurpose(e.target.value)}/>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary submit-button">Reserve</button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;