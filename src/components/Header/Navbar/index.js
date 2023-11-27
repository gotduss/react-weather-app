/* Imports */
import { Link } from "react-router-dom";

/* Navbar page component */
const Navbar = () => {
    return (
        <nav>
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
    )
}

export default Navbar;
