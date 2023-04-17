import { Link } from "react-router-dom";

export default function Navbar() {
  return(
    <header className="nav">
        <nav>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/Guest">Guests</Link></li>
                <li><Link to = "/Staff">Staff</Link></li>
                <li><Link to = "/Room">Room </Link></li>
                <li><Link to = "/Reservations">Reservation </Link></li>
            </ul>
        </nav>
    </header>
  );
}