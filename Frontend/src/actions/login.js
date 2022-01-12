import axios from "axios";

export const login = async ( email, password) => {
    
    try {
        const response = await axios.post('http://localhost:3001/api/user/login', {
        email,
        password
    }, { withCredentials: true })
        return response.data;
    } catch (error) {
        alert(error.response.data.message)
    }
}