import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../features/Videos/VideosSlice';
import Loading from '../Ui/Loading';

import VideoGridItem from './VideoGridItem';

const VideoGrid = () => {

    const { videos, isLoading, isError, error } = useSelector((state) => state.videos);
    const { tags, search } = useSelector(state => state.filter)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchVideos({ tags, search }))
    }, [dispatch, tags, search]);

    // data for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = videos?.length > 0 ? videos?.slice(indexOfFirstPost, indexOfLastPost) : [];

    // get total page
    const totalPage = Math.ceil(videos?.length / postsPerPage);



    //decide what to rander
    let content;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && videos?.length === 0) content = <div className="col-span-12">No video found</div>
    if (!isLoading && !isError && videos?.length > 0) {
        content = currentPosts.map(video => <VideoGridItem key={video.id} video={video} />)
    }


    return (

        <div>
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {/* <!-- single video --> */}
                    {content}
                </div>
            </section>

            {/* pagination */}
            <section className="pt-12">

                {
                    videos?.length > 0 &&
                    <div class=" flex  justify-center">
                        <div className='flex justify center item-center '>
                            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage < 2} class="btn"><span className='text-2xl'>«</span></button>
                            <button class="btn font-semibold mt-2 px-3">Page {currentPage}/{totalPage}</button>
                            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPage} class="btn"><span className='text-2xl'>»</span></button>
                        </div>
                    </div>
                }


            </section>
        </div>

    );
};

export default VideoGrid;