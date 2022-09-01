import axios from "axios";
import axiosInstance from "../../Utility/axios"

export const getUnlikes = async (id) => {

    const getResponse = await axiosInstance.get(`/videos?id=${id}`);
    const { unlikes } = await getResponse.data[0];


    const patchResponse = await axios.patch(`https://react-redux-json-server.herokuapp.com/videos/${id}`, {
        unlikes: unlikes + 1
    });

    return patchResponse.data.unlikes;

}

