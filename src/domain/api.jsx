import axios from "axios";

const BASE_URL = 'http://localhost:5000';

export const fetchPasswords = async () => {
    
    const response = await axios.get(`${BASE_URL}/passwords`);
    return response.data;

};


export const fetchPasswordDetail = async (id) => {
    const response = await axios.get(`http://localhost:5000/passwords/${id}`);
    return response.data;
};
export const fetchCategoryPasswords = async (category) => {
    const response = await axios.get(`http://localhost:5000/passwords?category=${category}`);
    return response.data;
}

export const postNewPassword = async (formData) => {
    const response = await axios.post('http://localhost:5000/passwords', formData);
    return response.data;
}
export const deletePassword = async (id) => {
    const response = await axios.delete(`http://localhost:5000/passwords/${id}`);
    return response.data;
}
