// src/components/video/VideoList.js
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    return (
        <div>
            {videos.map((video) => (
                <VideoItem key={video.id} video={video} />
            ))}
        </div>
    );
};

export default VideoList;