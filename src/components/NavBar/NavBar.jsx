import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <ul>
                <Link to="/" id="home">HOME</Link>
                <Link to="/events" id="events">EVENTS</Link>
                <Link to="/information" id="information">INFORMATION</Link>
                <Link to="/contact" id="contact">CONTACT</Link>
            </ul>
        </nav>
    )
}