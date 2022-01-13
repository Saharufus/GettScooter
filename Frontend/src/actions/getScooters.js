import Axios from "axios";

export const getScooters = async (hours) => {
    
    try {
        const response = await Axios.get(`http://ec2-35-158-103-25.eu-central-1.compute.amazonaws.com:8080/predict_scooters_west_town?hours_ahead=${hours}`, {
            headers: {
                'Access-Control-Allow-Origin' : '*'              
            }})
        return response;
    } catch (error) {
        alert(error.response.data.message)
    }
}