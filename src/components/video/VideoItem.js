// src/components/video/VideoItem.js
import React from 'react';

const VideoItem = ({ video }) => {
    return (
        <div>
            <img src={video.thumbnailUrl} alt={video.title} />
            <p>{video.title}</p>
        </div>
    );
};

export default VideoItem;