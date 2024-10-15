import React from 'react';
import { facilities, Facility } from '../data/FacilityData';

interface FacilityListProps {
  onSelect: (facilityName: string) => void;
}

const FacilityList: React.FC<FacilityListProps> = ({ onSelect }) => {
  return (
    <div>
      {facilities.map((facility: Facility, index: number) => (
        <div key={index} onClick={() => onSelect(facility.name)}>
          <h2>{facility.name}</h2>
          <p>{facility.desc}</p>
          <p>{facility.days.join(', ')}</p>
          <p>{facility.participants}</p>
          <p>{facility.location}</p>
          <p>{facility.available}</p>
        </div>
      ))}
    </div>
  );
}

export default FacilityList;