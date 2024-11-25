import React, { useEffect, useState } from 'react';

const InstagramReels = () => {
  const [isClient, setIsClient] = useState(false);

  const reels = [
    'https://www.instagram.com/reminfanmedia/reel/DCxEoD6uaUn/',
    'https://www.instagram.com/reminfanmedia/reel/CGfLaX2DZhM/',
    'https://www.instagram.com/reminfanmedia/reel/DCyAb7xoe9P/',
  ];

  useEffect(() => {
    setIsClient(true);
    
    // Cargar el script de Instagram solo en el cliente
    const loadInstagramEmbed = () => {
        //@ts-ignore
      if (window.instgrm) {
        //@ts-ignore
        window.instgrm.Embeds.process();
      }
    };

    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      script.onload = loadInstagramEmbed;
      document.body.appendChild(script);
    } else {
      loadInstagramEmbed();
    }
  }, []);

  // Solo renderizar el contenido cuando estamos en el cliente
  if (!isClient) {
    return null; // No renderizar nada en el servidor
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Instagram Reels</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reels.map((reel, idx) => (
          <div
            key={idx}
            className="instagram-embed-container rounded-lg overflow-hidden shadow-lg bg-gray-800 p-4"
          >
            <blockquote
              className="instagram-media w-full"
              data-instgrm-permalink={reel}
              data-instgrm-version="14"
            ></blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramReels;
