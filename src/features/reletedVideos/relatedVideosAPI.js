import axiosInstance from "../../Utility/axios";

export const getRelatedVideos = async ({tags,id,author}) => {
    const limit = 5;
    // let queryString='';
    // const queryString = tags.length > 0 ? tags.map(tag => `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}` : `&id_ne=${id}&_limit=${limit}`  

    // const queryString = tags.length > 0 ? tags.map(tag => `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}${author && `&author=${author}`}` : `&id_ne=${id}&_limit=${limit}`

    const queryString = tags.length > 0 && !author? tags.map(tag => `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}` : `&id_ne=${id}&_limit=${limit}${author && `&author=${author}`}`

    // if(tags.length > 0) queryString += tags.map(tag => `tags_like=${tag}`).join('&')
    // if(id) queryString+=`&id_ne=${id}&_limit=${limit}`
    // if(author) queryString+= `&author=${author}`

    //  

    // console.log('object',tags);
    

    const response = await axiosInstance.get(`/videos?${queryString}`);

    return response.data;

}

