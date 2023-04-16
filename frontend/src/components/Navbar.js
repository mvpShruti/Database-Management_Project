import { Link } from "react-router-dom";

export default function Navbar() {
  return(
    <header className="nav">
        <nav>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/guests">Guests</Link></li>
                <li><Link to = "/staff">Staff</Link></li>
                <li><Link to = "/rooms">Room </Link></li>
            </ul>
        </nav>
    </header>
  );
}