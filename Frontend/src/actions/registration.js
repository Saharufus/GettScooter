import axios from "axios";

export const registration = async (email, password, confirmpassword, firstname, lastname) => {
    try {
        const response = await axios.post('http://localhost:3001/api/user/register', {
        email,
        password,
        firstname,
        lastname,
        confirmpassword
    })
    console.log(response.data.message);
    alert(`Welcome, ${firstname} ${lastname}, now you can log in.`)
    } catch (error) {
        alert(error.response.data.message)
    }
}