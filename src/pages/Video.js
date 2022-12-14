import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Player from '../Components/VideoDescription/Player';
import RelatedVideos from '../Components/VideoDescription/RelatedVideos';
import VideoDescription from '../Components/VideoDescription/VideoDescription';
import Loading from '../Components/Ui/Loading'

import { fetchVideo } from '../features/video/videoSlice';

const Video = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { video, isLoading, isError, error } = useSelector((state) => state.video);

    const { author } = useSelector(state => state.filter);
    const { likes } = useSelector((state) => state.likes);
    useEffect(() => {
        dispatch(fetchVideo(id))
    }, [dispatch, id]);


    //decide what to render
    let content = null;

    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && !video.id) content = <div className="col-span-12">Something went wrong</div>
    if (!isLoading && !isError && video.id) {

        content =
            <div className="grid grid-cols-3 gap-2 lg:gap-8">

                <div className="col-span-full w-full space-y-8 lg:col-span-2">
                    {/* <!-- video player --> */}
                    <Player title={video.title} link={video.link} />
                    {/* <!-- video description --> */}
                    <VideoDescription video={video} />
                </div>

                {/* <!-- related videos --> */}
                <RelatedVideos tags={video?.tags} id={video.id} author={author} />

            </div>
    }



    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                {content}
            </div>
        </section>
    );
};

export default Video;