import { facilities } from "../data/FacilityData";
import FacilityItem from "../components/FacilityItem";

function Facility() {
  return (
    <div className="facility-list">
      {facilities.map(facility => (
        <FacilityItem key={facility.name} facility={facility} />
      ))}
    </div>
  );
}

export default Facility;