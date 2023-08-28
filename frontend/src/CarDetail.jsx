import React, { useState, useEffect } from 'react';
import { getCars } from './services/cars.service';
import Products from './components/Products';


const CarDetail = () => {
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
    <>
    <Products/>
    </>
  );
};

export default CarDetail;
