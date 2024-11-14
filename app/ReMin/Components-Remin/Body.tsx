"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Body: React.FC = () => {
  // States to manage visibility
  const [recentUploadsVisible, setRecentUploadsVisible] =
    useState<boolean>(false);
  const [shortsVisible, setShortsVisible] = useState<boolean>(false);
  const [divider1Visible, setDivider1Visible] = useState<boolean>(false);
  const [divider2Visible, setDivider2Visible] = useState<boolean>(false);

  // Refs to track divs
  const recentUploadsRef = useRef<HTMLDivElement | null>(null);
  const shortsRef = useRef<HTMLDivElement | null>(null);
  const divider1Ref = useRef<HTMLDivElement | null>(null);
  const divider2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.target === recentUploadsRef.current &&
            entry.isIntersecting
          ) {
            setRecentUploadsVisible(true);
          } else if (
            entry.target === shortsRef.current &&
            entry.isIntersecting
          ) {
            setShortsVisible(true);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (recentUploadsRef.current) {
      observer.observe(recentUploadsRef.current);
    }

    if (shortsRef.current) {
      observer.observe(shortsRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (recentUploadsRef.current)
        observer.unobserve(recentUploadsRef.current);
      if (shortsRef.current) observer.unobserve(shortsRef.current);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="w-full px-0 pt-5">
        <div className="relative w-full flex flex-col">
          <div className="relative z-10 p-5 text-center md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 md:w-1/2 md:text-left">
            <h1 className="text-purple-600 text-4xl font-bold">
              Feel the Bernabéu Wherever You Are
            </h1>
            <p className="text-lg mt-5">
              From the roars of the crowd to the thrill of every goal, Remin
              brings the Santiago Bernabéu right to you, no matter where you
              are.
            </p>
          </div>
          <div className="relative w-full">
    <img
        src="/imgs/Remin/coverPhoto.png"
        className="w-full object-cover max-h-[400px] sm:max-h-[600px] md:max-h-[500px] lg:max-h-[700px] xl:max-h-[900px]"
        alt="Santiago Bernabéu"
    />
    {/** Gradiente para pantallas pequeñas */}
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/90 via-white/40 to-transparent md:hidden"></div>

    {/** Gradiente para pantallas grandes y medianas */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/95 to-transparent hidden md:block"></div>
</div>


        </div>
        <div className="relative w-full h-full flex flex-col">
  <div className="relative z-10 p-5 text-center md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 md:w-full md:text-center md:mt-20 lg:mt-28 xl:mt-36 flex items-center justify-center">
    <div className="w-full max-w-screen-lg mx-auto text-center">
      <h2 className="text-purple-600 text-3xl font-bold">Real Madrid</h2>
      <h3 className="text-black text-3xl font-bold">
        {" "}isn't just a team{" "}
      </h3>
      <p className="mt-5">
        It's a lifestyle. With Remin, you'll feel like you're seated in
        the Bernabéu stands, chanting alongside thousands, united by
        passion.
      </p>
    </div>
  </div>
</div>

        {/* Responsive Video   src="https://www.youtube.com/embed/Ohgk9Ad7TeY?autoplay=1&mute=1&loop=1" --- enlace con autoplay
           https://www.youtube.com/embed/Ohgk9Ad7TeY?mute=1&loop=1 ---enlace sin autoplay
           */}
      <div className="relative flex justify-center items-center shadow-2xl overflow-hidden animate-fade animate-duration-500 animate-ease-in mt-12 md:mt-48 lg:mt-48 xl:mt-56">
    <div className="relative w-4/5" style={{ paddingTop: "50.25%" }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/Ohgk9Ad7TeY?autoplay=1&mute=1&loop=1"
        title="Welcome to ReMin Fan Media"
        style={{ border: "none" }}
        allow="accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </div>
        {/* Recent Uploads Section */}
        <div className="relative w-full flex flex-col bg-white" ref={recentUploadsRef}>
  {/* Sección de Texto */}
  <div className="relative w-full flex flex-col justify-center items-center p-5 md:absolute md:left-0 md:top-20 md:transform md:-translate-y-1/2 md:w-full">
  <h2 className="text-black text-3xl font-bold text-center md:text-left">Recent Uploads</h2>
  <p className="mt-5 text-center md:text-center">
    It's a lifestyle. With Remin, you'll feel like you're seated in the Bernabéu stands, chanting alongside thousands, united by passion.
  </p>
</div>

  {/* Sección de Recent Uploads (Videos) */}
  <div className="max-w-screen-md mx-auto p-5 sm:mt-20 md:mt-36"> {/* Limitar el contenedor a un ancho máximo y añadir margen superior */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { thumbnail: '/thumbnail-24.png', videoId: '9YQVFveNspM', title: "The Bernabéu’s Live Reaction to Another Late Winner by Jude!🤩 Real Madrid vs Union Berlin Vlog" },
        { thumbnail: '/thumbnail-23.png', videoId: 'mG0ke8s5mjQ', title: "👀 Real Madrid vs Real Sociedad Postgame Reactions: The KuboMania is Real! 😍| LaLiga Fan Interviews!" },
        { thumbnail: '/thumbnail-22.png', videoId: 'kDvnzYNVf70', title: "😱The Bernabéu's Live Reaction to Valverde's Stunner & KuboMania🥵 | Real Madrid vs Real Sociedad Vlog" },
        { thumbnail: '/thumbnail-21.png', videoId: 'F7LfqKku2_s', title: "🚨🎙️Real Madrid vs. Getafe Post Game Reactions to Jude’s last minute winner! - LaLiga Fan Interviews!" },
      ].map((item, idx) => (
        <a href={`https://youtu.be/${item.videoId}`} key={idx} target="_blank" rel="noopener noreferrer" className="relative group block">
          <div className="aspect-w-16 aspect-h-9 mb-2 hover:scale-105">
            <img
              src={item.thumbnail}
              alt={`Vid-${idx + 1}`}
              className="object-cover w-full h-full transition duration-150 ease-in-out shadow-xl"
            />
          </div>
        </a>
      ))}
    </div>
  </div>

  {/* Botón para ver más */}
  <div className="flex justify-center mt-4 mb-10">
    <Link
      href="/ReMin/Videos#uploads"
      className="bg-purple-600 text-white w-auto text-center text-lg py-2 px-6 rounded-lg mt-4 hover:bg-purple-700 transition duration-300 ease-in-out"
    >
      View More
    </Link>
  </div>
</div>


      </div>
    </div>
  );
};

export default Body;
