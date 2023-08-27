import Logo from './assets/logoWhite.png'
import { useState, useEffect } from 'react';
import { getCars } from './services/cars.service.js';
import Navbar from './components/Navbar';
import './home.css'

export default function Home() {

    const [cars, setCars] = useState([]);


    useEffect(() => {
        async function fetchCars() {
            try {
                const carData = await getCars();
                setCars(carData);
            } catch (error) {
                console.error(error);
            }
        }

        fetchCars();
    }, []);
    
    return (
        <div>
            <Navbar />
            <hr style={{ width: '98%', margin: 'auto', border: 'none', borderTop: '1px solid white' }} />
            <div className="homeContainer" style={{ width: '100%', height: '100vh', backgroundColor: '#262626' }}>
                <h1 style={{ width: '100%', textAlign: 'center', color: '#fff' }}>Welcome to Our Car Dealership</h1>
                <div className="car-list">
                    {cars.map((car) => (
                        <div key={car._id} className="car-item">
                            <div className="car-image">
                                <img src={car.photo} alt={`${car.make} ${car.model}`} />
                            </div>
                            <div className="car-details">
                                <h2>{car.makemodel}</h2>
                                <p>Year: {car.year}</p>
                                <p>Registered In: {car.registeredin}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div >
    );
}
