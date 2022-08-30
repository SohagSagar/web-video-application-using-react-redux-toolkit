import axiosInstance from "../../Utility/axios"

export const getVideo = async (id) => {
    const response = await axiosInstance.get(`/videos/${id}`);
    return response.data;

}

