import { useState, useEffect } from 'react';
import { getCars } from '../services/cars.service.js';
import Navbar from "./Navbar"
import ComponentList from "./componentsList"
import ModelViewer from './ModelViewer.jsx';

export default function Products(){

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
    return(
        <>
        <Navbar/>
        <div>
        <div className=' w-full flex justify-center'>
            <ModelViewer/>
        </div>
        <div className=' pl-40 flex justify-between items-center absolute bottom-0'>
        <ComponentList/>
            <ul className=' flex'>
               <li className=' pr-42'>
                <h2 className=' font-heading text-16'>Top Speed</h2>
                <p className=' font-sub text-32 text-hover -mt-6'>169MPH</p>
                <p className=' font-sub -mt-8'>272KM/H</p>
                </li> 
               <li className=' pr-42'>
                <h2 className=' font-heading text-16'>power</h2>
                <p className=' font-sub text-32 text-hover -mt-6'>162 HP</p>
                <p className=' font-sub -mt-8'>9,250 RPM</p>
                </li> 
               <li className=' pr-42'>
                <h2 className=' font-heading text-16'>Torque</h2>
                <p className=' font-sub text-32 text-hover -mt-6'>130.5 N.M</p>
                <p className=' font-sub -mt-8'>96.3 LBF.FT</p>
                </li> 
               <li className=' pr-42'>
                <h2 className=' font-heading text-16'>Fuel Capacity</h2>
                <p className=' font-sub text-32 text-hover -mt-6'>17 L</p>
                <p className=' font-sub -mt-8'>3.7IMP CAL</p>
                </li> 
            </ul>
        </div>
        </div>
        </>
    )
}