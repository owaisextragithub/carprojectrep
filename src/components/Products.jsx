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
        <div className=' '>
             {/* Left info tab */}
            {/* <div className=' info-tab-left'>
            <ul>
                <li>
                <div className=' w-auto flex   justify-between'>
                    <div className=' py-42'>
                        <h2 className=' font-heading text-16 '>top speed</h2>
                        <ul>
                            <li className=' font-body font-bold text-32 text-hover -mt-12'>
                                169MPH
                            </li>
                            <li className=' font-body font-bold text-16 -mt-10' >
                                272KM/H
                            </li>
                        </ul>
                    </div>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                <div className=' w-auto flex   justify-between'>
                    <div className=' py-42'>
                        <h2 className=' font-heading text-16 '>top speed</h2>
                        <ul>
                            <li className=' font-body font-bold text-32 text-hover -mt-12'>
                                169MPH
                            </li>
                            <li className=' font-body font-bold text-16 -mt-10' >
                                272KM/H
                            </li>
                        </ul>
                    </div>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                <div className=' w-auto flex   justify-between'>
                    <div className=' py-42'>
                        <h2 className=' font-heading text-16 '>top speed</h2>
                        <ul>
                            <li className=' font-body font-bold text-32 text-hover -mt-12'>
                                169MPH
                            </li>
                            <li className=' font-body font-bold text-16 -mt-10' >
                                272KM/H
                            </li>
                        </ul>
                    </div>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                <div className=' w-auto flex   justify-between'>
                    <div className=' py-42'>
                        <h2 className=' font-heading text-16 '>top speed</h2>
                        <ul>
                            <li className=' font-body font-bold text-32 text-hover -mt-12'>
                                169MPH
                            </li>
                            <li className=' font-body font-bold text-16 -mt-10' >
                                272KM/H
                            </li>
                        </ul>
                    </div>
                </div>
                </li>
            </ul>
            </div> */}
         {/*Model Section*/}
        <div className=' Model-Section'>
        <div className=" w-847 mobile:w-500 translate-y-16 m-auto ">
                <h4 className=' font-sub text-64 mobile:text-32 -mb-16'>1989</h4>
                <h1 className=' font-heading text-64 '>Nissan Fairlady</h1>
                <h4 className=' font-sub text-64 float-right -mt-16'>300ZX</h4>
              </div>
        <div className=' w-full flex justify-center'>
            <ModelViewer/>
            <div className=" w-500 h-500 bg-first rounded-full absolute -z-10 flex ">
            </div>
        </div>
        </div>
        {/*Right Info tab*/}
        {/* <div className=' info-tab-right'>
            <ul>
                <li>
                <div className=' w-auto flex   justify-between'>
                    <div className=' py-42'>
                        <h2 className=' font-heading text-16 '>top speed</h2>
                        <ul>
                            <li className=' font-body font-bold text-32 text-hover -mt-12'>
                                169MPH
                            </li>
                            <li className=' font-body font-bold text-16 -mt-10' >
                                272KM/H
                            </li>
                        </ul>
                    </div>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                <div className=' w-auto flex   justify-between'>
                    <div className=' py-42'>
                        <h2 className=' font-heading text-16 '>top speed</h2>
                        <ul>
                            <li className=' font-body font-bold text-32 text-hover -mt-12'>
                                169MPH
                            </li>
                            <li className=' font-body font-bold text-16 -mt-10' >
                                272KM/H
                            </li>
                        </ul>
                    </div>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                <div className=' w-auto flex   justify-between'>
                    <div className=' py-42'>
                        <h2 className=' font-heading text-16 '>top speed</h2>
                        <ul>
                            <li className=' font-body font-bold text-32 text-hover -mt-12'>
                                169MPH
                            </li>
                            <li className=' font-body font-bold text-16 -mt-10' >
                                272KM/H
                            </li>
                        </ul>
                    </div>
                </div>
                </li>
            </ul>
            <ul>
                <li>
                <div className=' w-auto flex   justify-between'>
                    <div className=' py-42'>
                        <h2 className=' font-heading text-16 '>top speed</h2>
                        <ul>
                            <li className=' font-body font-bold text-32 text-hover -mt-12'>
                                169MPH
                            </li>
                            <li className=' font-body font-bold text-16 -mt-10' >
                                272KM/H
                            </li>
                        </ul>
                    </div>
                </div>
                </li>
            </ul>
            </div> */}
        </div>
        <div className=' pl-40 flex items-center'>
        <div>
         <ComponentList/>   
        </div>
            <ul className=' flex pl-60 '>
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