import React, { useState } from 'react';
import { facilities } from '../data/FacilityData';
import ReservationItem from '../components/ReservationItem';

function ReservationForm() {
  const [facility, setFacility] = useState(facilities[0].name);
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
      <div className="container mt-4">
        <form onSubmit={handleSubmit}>
          <div id="facility-selector" className="form-group">
            <select
              id="facility"
              className="form-control"
              value={facility}
              onChange={e => setFacility(e.target.value)}
            >
              {facilities.map(f => (
                <option key={f.name} value={f.name}>{f.name}</option>
              ))}
            </select>
          </div>

          <ReservationItem facility={facilities.find(f => f.name === facility) || facilities[0]} />

          <div className="form-group">
            <label>Date to be Used:</label>
            <input
              type="date"
              id="date"
              className="form-control"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Number of People:</label>
            <input
              type="number"
              id="people"
              className="form-control"
              value={people}
              onChange={e => setPeople(Number(e.target.value))}
              min="1"
            />
          </div>

          <div className="form-group">
            <div className="form-check">
              <input
                type="radio"
                id="affiliationYes"
                className="form-check-input"
                value="yes"
                checked={affiliation === 'yes'}
                onChange={() => setAffiliation('yes')}
              />
              <label className="form-check-label" htmlFor="affiliationYes">
                SUNY Korea
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="affiliationNo"
                className="form-check-input"
                value="no"
                checked={affiliation === 'no'}
                onChange={() => setAffiliation('no')}
              />
              <label className="form-check-label" htmlFor="affiliationNo">
                Non-SUNY Korea
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Purpose of Use:</label>
            <textarea
              id="purpose"
              className="form-control"
              value={purpose}
              onChange={e => setPurpose(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
