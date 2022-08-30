import axiosInstance from "../../Utility/axios"

export const getVideos = async () => {
    const response = await axiosInstance.get('/videos');
    console.log(response?.data);
    return response.data;

}

