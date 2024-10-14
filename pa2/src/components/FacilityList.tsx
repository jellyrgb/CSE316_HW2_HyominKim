import React from 'react';
import FacilityItem from './FacilityItem.tsx';

// TODO: Temp info -> Facility_Data.lis
const facilities = [
    { id: "gym", name: "Gym", description: "sports hall", capacity: 4, location: "C1033", availability: "Available to all", image: "/src/images/gym.jpg" },
    { id: "auditorium", name: "Auditorium", description: "the auditorium theater", capacity: 30, location: "A234", availability: "Available to all", image: "/src/images/auditorium.jpg" },
    { id: "pool", name: "Swimming Pool", description: "aqautic center", capacity: 4, location: "C1033", availability: "Available to all", image: "/src/images/pool.jpg" },
    { id: "seminar", name: "Seminar Room", description: "lecture hall", capacity: 4, location: "C1033", availability: "Available to all", image: "/src/images/seminar.jpg" },
    { id: "conference", name: "Conference Room", description: "meeting space", capacity: 4, location: "C1033", availability: "Only for SUNY Korea", image: "/src/images/conference.jpg" },
    { id: "library", name: "Library", description: "study and read books", capacity: 4, location: "C1033", availability: "Only for SUNY Korea", image: "/src/images/library.jpg" },
  ];

function FacilityList() {
    return (
      <div className="facility-list">
        {facilities.map(facility => (
          <FacilityItem key={facility.id} facility={facility} />
        ))}
      </div>
    );
  }

export default FacilityList;
