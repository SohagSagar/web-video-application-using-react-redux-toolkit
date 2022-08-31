import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Pagination = () => {
    const { videos, isLoading, isError, error } = useSelector((state) => state.videos);

    // data for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = videos?.length > 0 ? videos?.slice(indexOfFirstPost, indexOfLastPost) : [];

    // get total page
    const totalPage = Math.ceil(videos?.length / postsPerPage);
    let content;

    for (let index = 0; index < totalPage; index++) {
        content = 
        <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
            {index+1}
        </div>

    }


    // const totalPage = Math.celi(videos.length / 5)
    return (
        <section className="pt-12">
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-center"
            >
                {/* <div className="bg-blue-600 text-white px-4 py-1 rounded-full">
                    1
                </div> */}

                {
                    content
                }




                {/* <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
                    1
                </div> */}





            </div>
        </section>
    );
};

export default Pagination;