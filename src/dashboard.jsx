import React from "react";
import CarForm from "./components/carForm.component.js";
import axios from "axios";
import './dashboard.css'

function Dashboard() {

    return (
        <div>
            <h1>Dashboard</h1>
            <CarForm />
        </div>
    );
}

export default Dashboard;
