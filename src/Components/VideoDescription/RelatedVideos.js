import React, { useEffect } from 'react';
import RelatedVideo from './RelatedVideo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/reletedVideos/relatedVideosSlice';
import Loading from '../Ui/Loading';

const RelatedVideos = ({ tags, id,author }) => {

    const { relatedVideos, isLoading, isError, error } = useSelector((state) => state.relatedVideos)


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, id ,author}))
    }, [dispatch, tags, id,author])

    //decide what to do
    let content;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && relatedVideos.length === 0)  content = <div className="col-span-12">No related video found</div>
    if (!isLoading && !isError && relatedVideos.length > 0) {
        content = relatedVideos.map(relatedVideo => <RelatedVideo 
            key={relatedVideo.id}
            relatedVideo={relatedVideo}
        />)
    }


    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {/* <!-- single related video --> */}
            {content}

        </div>
    );
};

export default RelatedVideos;