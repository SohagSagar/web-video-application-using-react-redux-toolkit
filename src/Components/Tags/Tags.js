import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../../features/tags/tagsSlice';
import Loading from '../Ui/Loading';
import Tag from './Tag';
import { resetFilter } from '../../features/filter/filterSlice';


const Tags = () => {

    const dispatch = useDispatch();
    const { tags, isLoading, isError, error } = useSelector((state => state.tags));
    const { tags: filterTags, search, author } = useSelector((state => state.filter));

    console.log(filterTags, search, author);


    useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch]);

    const handleClearFilter = () => {
        dispatch(resetFilter())
    }

    //decide what to rander
    let content;
    if (isLoading) content = <Loading />
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && tags?.length === 0) content = false;
    if (!isLoading && !isError && tags?.length > 0) {
        content = tags.map(tag => <Tag key={tag.id} title={tag.title} />)
    }


    return (

        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-between border-b overflow-y-auto ">

                <div className='flex gap-2'>{content}</div>
                {
                    filterTags.length > 0 | search !== "" | author !== "" ?
                    <div onClick={() => handleClearFilter()}><button className='bg-red-400 text-white px-4 py-1 rounded-full cursor-pointer'><img className='inline w-4 ' src='https://img.icons8.com/material-rounded/24/000000/filter.png' alt=''></img> Clear all filters</button></div> : ''
                }


            </div>

        </section>
    );
};

export default Tags;



// < !--selected -->
//     <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
//         redux
//     </div>