import React, { useState } from "react";
import './carForm.css'
import { handleSubmit } from "../services/dashboard.service.js";

function CarForm() {
    const [formData, setFormData] = useState({
        year: "",
        makemodel: "",
        tagline: "",
        topspeed: "",
        power: "",
        torque: "",
        fuelcapacity: "",
        color: "",
        bodytype: "",
        registeredin: "",
        assembly: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="car-form-container">
            <h2 className="form-title">Upload Car Information</h2>
            <form onSubmit={handleSubmit} className="form">
                <label>
                    Make and Model:
                    <input
                        type="text"
                        name="makemodel"
                        value={formData.makemodel}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Year:
                    <input
                        type="text"
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    tagline:
                    <input
                        type="text"
                        name="tagline"
                        value={formData.tagline}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Top Speed:
                    <input
                        type="text"
                        name="topspeed"
                        value={formData.topspeed}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Power:
                    <input
                        type="text"
                        name="power"
                        value={formData.power}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Torque:
                    <input
                        type="text"
                        name="torque"
                        value={formData.torque}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Fuel Capacity:
                    <input
                        type="text"
                        name="fuelcapacity"
                        value={formData.fuelcapacity}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Color:
                    <input
                        type="text"
                        name="color"
                        value={formData.color}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    BodyType:
                    <input
                        type="text"
                        name="bodytype"
                        value={formData.bodytype}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Registered In:
                    <input
                        type="text"
                        name="registeredin"
                        value={formData.registeredin}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Assembly:
                    <input
                        type="text"
                        name="assembly"
                        value={formData.assembly}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit" className="submit-button">Upload Car</button>
            </form>
        </div>
    );
}

export default CarForm;
