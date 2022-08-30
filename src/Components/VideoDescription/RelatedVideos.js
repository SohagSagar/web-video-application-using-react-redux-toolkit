import React from 'react';
import RelatedVideo from './RelatedVideo';

const RelatedVideos = () => {
    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {/* <!-- single related video --> */}
            <RelatedVideo/>
            
        </div>
    );
};

export default RelatedVideos;