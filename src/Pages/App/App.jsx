import './App.css'
import { Routes , Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage'
import EventsPage from '../EventsPage/EventsPage'
import InformationPage from '../InformationPage/InformationPage'
import ContactPage from '../ContactPage/ContactPage'


export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/information" element={<InformationPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </>
    )
}