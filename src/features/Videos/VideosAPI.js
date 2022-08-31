import axiosInstance from "../../Utility/axios"

export const getVideos = async ({ tags, search }) => {
    let queryString = '';
    if (tags.length > 0) queryString += tags.map(tag => `tags_like=${tag}`).join('&');
    if (search !== "") queryString += `&q=${search}`

    const response = await axiosInstance.get(`/videos?${queryString}`);
    return response.data;

    // &_page=1&_limit=4

}

