import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../features/Videos/VideosSlice';
import { searchedByAuthor } from '../../features/filter/filterSlice';

const VideoGridItem = ({ video }) => {
    const { id, thumbnail, title, duration, avatar, author: authorName, views, date } = video;

    const { tags, search } = useSelector(state => state.filter)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchVideos({ tags, search}))
    // }, [dispatch, tags, search]);

    const handleFilterByAuthor = (authorName) => {
        dispatch(searchedByAuthor(authorName))
    }
    const handleFilterByVideoCard = (emptystring) =>{
        // dispatch(searchedByAuthor(emptystring))
        // console.log('video card',emptystring);
    }
    return (
        <div
            className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]"
        >
            <div  onClick={()=>handleFilterByVideoCard()} className="w-full flex flex-col">
                <div className="relative">
                    <Link to={`/video/${id}`} >
                        <img
                            src={thumbnail}
                            className="w-full h-auto"
                            alt={title}
                        />
                    </Link>

                    <p
                        className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                    >
                        {duration}
                    </p>
                </div>

                <div className="flex flex-row mt-2 gap-2">
                    <Link to={`/video/${id}`} className="shrink-0">
                        <img
                            src={avatar}
                            className="rounded-full h-6 w-6"
                            alt={authorName}
                        />
                    </Link>

                    <div clas="flex flex-col">
                        <Link to={`/video/${id}`} >
                            <p
                                className="text-slate-900 text-sm font-semibold"
                            >
                                {title}
                            </p>
                        </Link>
                        <Link onClick={()=> handleFilterByAuthor(authorName)} to={`/video/${id}`}
                            className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                            href="#"
                        >
                            {authorName}
                        </Link>
                        <p className="text-gray-400 text-xs mt-1">
                            {views} views . {date}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoGridItem;