// src/pages/VideoHome.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoList from '../components/video/VideoList';

const VideoHome = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const response = await axios.get('API_URL_TO_FETCH_VIDEOS');
            setVideos(response.data);
        };

        fetchVideos();
    }, []);
    return (
        <div>
            <VideoList videos={videos} />
        </div>
    );
};

export default VideoHome;