import React from 'react';

const InstagramThumbnail = () => {
  const reels = [
    {
      url: 'https://www.instagram.com/reel/DCxEoD6uaUn/',
      thumbnail: '/imgs/thumbnails/instagram/1_instagram.png',
    },
    {
      url: 'https://www.instagram.com/reminfanmedia/reel/DCuwrlsIvFC/',
      thumbnail: '/imgs/thumbnails/instagram/2_instagram.png',
    },
    {
      url: 'https://www.instagram.com/reminfanmedia/reel/DCr23w7uzyR/',
      thumbnail: '/imgs/thumbnails/instagram/3_instagram.png',
    },
    {
      url: 'https://www.instagram.com/reminfanmedia/reel/DChqiMLurVO/',
      thumbnail: '/imgs/thumbnails/instagram/4_instagram.png',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
    <h2 className="text-purple-600 text-3xl font-bold text-center md:text-4xl mb-4">
      Instagram Reels
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {reels.map((reel, idx) => (
        <a
          key={idx}
          href={reel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg overflow-hidden shadow-lg bg-gray-800"
        >
          <img
            src={reel.thumbnail}
            alt={`Instagram Reel ${idx + 1}`}
            className="w-full h-75"
          />
        </a>
      ))}
    </div>
  </div>
  );
};

export default InstagramThumbnail;
