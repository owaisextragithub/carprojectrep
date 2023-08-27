export const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:3000/admin/dashboard", formData);
        alert("Car information uploaded successfully!");

        setFormData({
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
    } catch (error) {
        console.error(error);
        alert("Error uploading car information");
    }
};