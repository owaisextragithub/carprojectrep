import axios from "axios";

let API_URL = 'http://localhost:3000/main/'

export const handleLogin = async () => {
    try {
        await axios.post(API_URL + 'login');

        setFormData({
            username: "",
            password: ""
        });
    } catch (error) {
        console.error(error);
        alert("Could not log in");
    }
};

export const register = async (formData) => {
    try {
        let response = await axios.post(API_URL + 'register', formData);
        return response.data;
        
    } catch (error) {
        console.error(error);
        alert("Could not Register");
    }
};