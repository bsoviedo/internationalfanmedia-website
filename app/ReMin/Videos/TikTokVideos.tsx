import React, { useEffect } from 'react';

const TikTokVideos = () => {
  const tiktoks = [
    'https://www.tiktok.com/@reminfanmedia/video/7440940293333191982',
    'https://www.tiktok.com/@reminfanmedia/video/7440606096378678570',
    'https://www.tiktok.com/@reminfanmedia/video/7440188328428948782',
    'https://www.tiktok.com/@reminfanmedia/video/7439101204422036778',
  ];

  useEffect(() => {
    const loadTikTokScript = () => {
      // Verifica si el script ya está cargado
      if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        script.onload = () => {
          // Inicializa TikTok Embeds si el script ya está cargado
          //@ts-ignore
          if (window.tiktokEmbed && window.tiktokEmbed.init) {
              //@ts-ignore
            window.tiktokEmbed.init();
          }
        };
        document.body.appendChild(script);
      } else {
        // Inicializa directamente si el script ya estaba presente
          //@ts-ignore
        if (window.tiktokEmbed && window.tiktokEmbed.init) {
            //@ts-ignore
          window.tiktokEmbed.init();
        }
      }
    };

    loadTikTokScript();
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
                maxWidth: '100%', // Diseño flexible
                margin: '0 auto',
                height: 'auto', // Ajusta la altura automáticamente
              }}
            >
              <section>
                {/* Fallback para mostrar un enlace en caso de fallo */}
                <a href={url} target="_blank" rel="noopener noreferrer" style={{"color": "#ffffff"}}>
                  Watch on TikTok
                </a>
              </section>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TikTokVideos;
