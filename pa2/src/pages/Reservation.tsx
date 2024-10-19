import ReservationForm from '../components/ReservationForm.tsx';

function Reservation() {
  return (
    <div>
      <ReservationForm onSelectFacility={(facility) => {}} />
    </div>
  );
}

export default Reservation;