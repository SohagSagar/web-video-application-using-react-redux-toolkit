import axios from "axios";
import axiosInstance from "../../Utility/axios"
import axiosPut from "../../Utility/putAxios";

export const getLikes = async (id) => {

    const getResponse = await axiosInstance.get(`/videos?id=${id}`);
    const { likes } = await getResponse.data[0];


    const patchResponse = await axios.patch(`http://localhost:9000/videos/${id}`, {
        likes: likes + 1
    });

    return patchResponse.data.likes;

}

