"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("coding tutorials");

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(`/api/youtube?searchTerm=${searchTerm}`);
      const data = await response.json();
      setVideos(data.items);
    };

    fetchVideos();
  }, [searchTerm]);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
      <p className='mb-4'>This is where you will see your social media feeds.</p>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Search YouTube'
        className='border p-2 mb-4 w-full'
      />
      {videos.length > 0 ? (
        videos.map((video) => (
          <div
            key={video.id.videoId}
            className='mb-4'
          >
            <h3 className='text-xl font-semibold'>{video.snippet.title}</h3>
            <p className='text-gray-700'>{video.snippet.description}</p>
            <div className='relative w-full h-48'>
              <Image
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                layout='fill'
                objectFit='cover'
                quality={75}
              />
            </div>
          </div>
        ))
      ) : (
        <p>Loading videos...</p>
      )}
    </div>
  );
};

export default Dashboard;
