// src/components/video/VideoDetail.js
import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) return <div>Loading...</div>;

    return (
        <div>
            <h1>{video.title}</h1>
            <video src={video.videoUrl} controls></video>
            <p>{video.description}</p>
        </div>
    );
};

export default VideoDetail;