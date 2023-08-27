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

<<<<<<< HEAD
    const carItemStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '15px',
        marginBottom: '10px',
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
=======
>>>>>>> 47430db5ddadc0d509cca0b522567cad60fbb928



    return (
        <div>
            
            <div>
            <Navbar />
                <div className=' px-60'>
                <h1 className='font-heading text-heading text-60 pt-60'>Discover Your Dream Car</h1>
                <p className='text-16'>Explore our collection of top-quality vehicles</p>
                </div>
                <div>
                    {cars.map((car) => (
                        <Link to={`/car/${car._id}`} key={car._id} >
                            <div className=' w-full h-200 flex items-center justify-between  px-120 mt-32'>
                            <div className=' flex'>
                            <div >
                                <img className=' w-200 bg-heading h-150 rounded-xl' src={car.photo} alt={`${car.make} ${car.model}`} />
                            </div>
                            <div className=' ml-16'>
                                <h2 className=' font-heading text-24 pb-16'>{car.makemodel}</h2>
                                <p className=' font-body'>Year: {car.year}</p>
                                <p>Registered In: {car.registeredin}</p>
                            </div>
                            </div>
                            <button className=' px-30 py-30 bg-heading text-white rounded-full hover:bg-first font-heading'>Dicover</button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
