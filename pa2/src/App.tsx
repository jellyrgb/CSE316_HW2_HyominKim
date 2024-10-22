import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Facility from "./pages/Facility.tsx";
import Reservation from "./pages/Reservation.tsx";
import Reservations from "./pages/Reservations.tsx";
import Profile from "./pages/Profile.tsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App
