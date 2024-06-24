// src/pages/VideoPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoDetail from '../components/video/VideoDetail';

const VideoPage = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const fetchVideo = async () => {
            const response = await axios.get(`API_URL_TO_FETCH_VIDEO/${id}`);
            setVideo(response.data);
        };

        fetchVideo();
    }, [id]);

    return (
        <div>
            <VideoDetail video={video} />
        </div>
    );
};

export default VideoPage;
