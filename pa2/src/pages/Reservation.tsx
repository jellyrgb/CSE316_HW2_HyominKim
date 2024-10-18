import { useState } from 'react';
import { facilities } from '../data/FacilityData.ts';
import ReservationForm from '../components/ReservationForm.tsx';
import ReservationItem from '../components/ReservationItem.tsx';

function Reservation() {
  const [selectedFacility, setSelectedFacility] = useState(facilities[0]);

  const handleSelectFacility = (facility: typeof facilities[0]) => {
    setSelectedFacility(facility);
  };

  return (
    <div>
      <ReservationForm />
    </div>
  );
}

export default Reservation;