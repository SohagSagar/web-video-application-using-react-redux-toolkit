import axiosInstance from "../../Utility/axios"

export const getTags = async () => {
    const response = await axiosInstance.get('/tags');
    console.log(response?.data);
    return response.data;

}

