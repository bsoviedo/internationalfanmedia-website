import React, { useEffect } from 'react';

const TikTokVideos = () => {
  const tiktoks = [
    'https://www.tiktok.com/@reminfanmedia/video/7440940293333191982',
    'https://www.tiktok.com/@reminfanmedia/video/7440606096378678570',
    'https://www.tiktok.com/@reminfanmedia/video/7440188328428948782',
    'https://www.tiktok.com/@reminfanmedia/video/7439101204422036778',
  ];

  useEffect(() => {
    // Cargar el script de TikTok para procesar los embeds
    if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="container mx-auto py-8 flex flex-col items-center">
      <h2 className="text-purple-600 text-3xl font-bold text-center md:text-4xl mb-4">
        TikTok Videos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {tiktoks.map((url, idx) => (
          <div
            key={idx}
            className="block rounded-lg overflow-hidden shadow-lg bg-gray-800"
          >
            <blockquote
              className="tiktok-embed"
              cite={url}
              data-video-id={url.split('/').pop()}
              style={{
                maxWidth: '700px',
                margin: '0 auto',
                height: '650px', // Ajustar altura para hacerlo más pequeño
              }}
            >
              <section></section>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TikTokVideos;
