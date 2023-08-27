import axios from "axios";

let API_URL = "http://localhost:3000/main/";

export const getCars = async() => {

    try{

        let response = await axios.get(API_URL + 'cars');
        
        return response.data;
    }
    catch(err){
        console.error(err);
    }
};