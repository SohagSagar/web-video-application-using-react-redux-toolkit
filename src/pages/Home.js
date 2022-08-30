import React from 'react';
import VideoGrid from '../Components/Grid/VideoGrid';
import Tags from '../Components/Tags/Tags';
import Pagination from '../Components/Ui/Pagination';

const Home = () => {
    return (
        <>

            <Tags />
            <VideoGrid />
            <Pagination />

        </>
    );
};

export default Home;