// FacilityData.ts
export interface Facility {
    name: string;
    desc: string;
    days: string[];
    participants: string;
    location: string;
    available: string;
    image: string;
}
  
export const facilities: Facility[] = [
    {
        name: "Gym",
        desc: "A place used for physical activity",
        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        participants: "1 - 5",
        location: "A101",
        available: "Available to all",
        image: "../images/gym.jpg"
    },
    {
        name: "Auditorium",
        desc: "A place for large events",
        days: ["Mon", "Tue", "Wed", "Thu"],
        participants: "10 - 40",
        location: "A234",
        available: "Available to all",
        image: "../images/auditorium.jpg"
    },
    {
        name: "Swimming Pool",
        desc: "A place for physical activity",
        days: ["Sun", "Sat"],
        participants: "1 - 8",
        location: "B403",
        available: "Available to all",
        image: "../images/pool.jpg"
    },
    {
        name: "Seminar Room",
        desc: "A place for large meetings",
        days: ["Mon", "Wed", "Fri"],
        participants: "10 - 30",
        location: "B253",
        available: "Available to all",
        image: "../images/seminar.jpg"
    },
    {
        name: "Conference Room",
        desc: "A place for small but important meetings",
        days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        participants: "5 - 15",
        location: "C101",
        available: "Available to all",
        image: "../images/conference.jpg"
    }
];