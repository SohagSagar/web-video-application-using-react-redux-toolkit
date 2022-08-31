import React, { useState } from 'react';
import likeImg from '../../assets/like.svg';
import UnlikeImg from '../../assets/unlike.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLikes } from '../../features/like/likeSlice';
import { fetchUnlikes } from '../../features/unlike/unlikeSlice';



const LikeUnlike = ({ id, likes, unlikes }) => {
    const [updateLikeState, setUpdateLikeState] = useState(false);
    const [updateUnlikeState, setUpdateUnlikeState] = useState(false);

    //updated like unlike count
    const { likes: updatedLikes } = useSelector((state) => state.likes);
    const { unlikes: updatedUnlikes } = useSelector((state) => state.unlikes);

    const dispatch = useDispatch();

    const handleLike = (id) => {
        dispatch(fetchLikes(id))
        setUpdateLikeState(true)
    }
    const handleUnlike = (id) => {
        dispatch(fetchUnlikes(id))
        setUpdateUnlikeState(true)
    }
    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <div onClick={() => handleLike(id)} className="shrink-0 cursor-pointer">
                    <img
                        className="w-5 block"
                        src={likeImg}
                        alt="Like"
                    />
                </div>
                <div
                    className="text-sm leading-[1.7142857] text-slate-600"
                >
                    {updateLikeState ? updatedLikes : likes}
                </div>
            </div>
            <div className="flex gap-1">
                <div onClick={() => handleUnlike(id)} className="shrink-0 cursor-pointer">
                    <img
                        className="w-5 block"
                        src={UnlikeImg}
                        alt="Unlike"
                    />
                </div>
                <div
                    className="text-sm leading-[1.7142857] text-slate-600"
                >
                    {updateUnlikeState ? updatedUnlikes : unlikes}
                </div>
            </div>
        </div>
    );
};

export default LikeUnlike;