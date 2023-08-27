import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCars } from './services/cars.service.js';
import Navbar from './components/Navbar';

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

    const carItemStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '15px',
        marginBottom: '10px',
        borderRadius: '5px',
        background: "rgba(255, 255, 255, 0.16)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        webkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        textDecoration: 'none',
        color: '#000',
        transition: 'transform 0.2s',
        cursor: 'pointer',
        width: '90%',
        fontFamily: 'Arial, sans-serif',
        ':hover': {
            transform: 'scale(1.05)',
        },
    };

    const carImageStyle = {
        flex: '0 0 auto',
        marginRight: '20px',
        width: '120px',
        height: '80px',
    };

    const carDetailsStyle = {
        flex: '1',
    };

    return (
        <div>
            
            <div style={{ width: '100%', height: '100vh', backgroundColor:"#303634"}}>
                <br />
            <Navbar />
                <br />
                <h1 style={{ width: '100%', textAlign: 'center', color: '#000', fontFamily: 'Impact, sans-serif', fontSize: '36px' }}>Discover Your Dream Car</h1>
                <p style={{ width: '100%', textAlign: 'center', color: '#000', fontSize: '18px', marginBottom: '30px' }}>Explore our collection of top-quality vehicles</p>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                    {cars.map((car) => (
                        <Link to={`/car/${car._id}`} key={car._id} style={carItemStyle}>
                            <div style={carImageStyle}>
                                <img src={car.photo} alt={`${car.make} ${car.model}`} />
                            </div>
                            <div style={carDetailsStyle}>
                                <h2>{car.makemodel}</h2>
                                <p>Year: {car.year}</p>
                                <p>Registered In: {car.registeredin}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
