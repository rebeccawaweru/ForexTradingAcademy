import axios from 'axios';

const apiUrl = 'http://localhost:5000/forexarena/';

export const singleFileUpload = async (data, options) => {
    try {
        await axios.post(apiUrl + 'singleFile', data, options);
    } catch (error) {
        throw error;
    }
}
export const getSingleFiles = async () => {
    try {
            const {data} = await axios.get("http://localhost:5000/forexarena/getSingleFiles");
            return data;
    } catch (error) {
        throw error.message;
    }
}

export const multipleFilesUpload = async (data, options) => {
    try {
        await axios.post(apiUrl + 'multipleFiles', data, options);
    } catch (error) {
        throw error;
    }
}
export const getMultipleFiles = async () => {
    try{
        const {data} = await axios.get("http://localhost:5000/forexarena/getMultipleFiles");
        return data;
    }catch(error){
        throw error;
    }
}