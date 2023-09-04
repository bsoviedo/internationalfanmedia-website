'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Body: React.FC = () => {
    // States to manage visibility
    const [recentUploadsVisible, setRecentUploadsVisible] = useState<boolean>(false);
    const [shortsVisible, setShortsVisible] = useState<boolean>(false);
    const [divider1Visible, setDivider1Visible] = useState<boolean>(false);
    const [divider2Visible, setDivider2Visible] = useState<boolean>(false);

    

    // Refs to track divs
    const recentUploadsRef = useRef<HTMLDivElement | null>(null);
    const shortsRef = useRef<HTMLDivElement | null>(null);
    const divider1Ref = useRef<HTMLDivElement | null>(null);
    const divider2Ref = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === recentUploadsRef.current && entry.isIntersecting) {
                    setRecentUploadsVisible(true);
                } else if (entry.target === shortsRef.current && entry.isIntersecting) {
                    setShortsVisible(true);
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.1
        });

        if (recentUploadsRef.current) {
            observer.observe(recentUploadsRef.current);
        }

        if (shortsRef.current) {
            observer.observe(shortsRef.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (recentUploadsRef.current) observer.unobserve(recentUploadsRef.current);
            if (shortsRef.current) observer.unobserve(shortsRef.current);
        };
    }, []);

    return (
        <div className="bg-violet-500 p-5 min-h-screen">
                <div className="mx-auto max-w-screen-xl px-4 lg:px-0 pt-5">
    
                    {/* Responsive Video */}
                    <div className="relative rounded-lg shadow-2xl overflow-hidden animate-fade animate-duration-500 animate-ease-in">
                        <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/Ohgk9Ad7TeY?autoplay=1&mute=1&loop=1" title="Welcome to ReMin Fan Media" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <div style={{ paddingTop: '56.25%' }}></div>  {/* For 16:9 aspect ratio */}
                    </div>
    
                    <div className="my-8 h-1 bg-white"></div>
                    
                    {/* Recent Uploads Section */}
                    <div className="mt-8" ref={recentUploadsRef}>
                    <a href="https://www.youtube.com/@ReMinFanMedia/videos" target="_blank" rel="noopener noreferrer" className='hover:underline'>
                            <h1 className={`text-white text-3xl font-bold mb-8 ${recentUploadsVisible ? 'animate-fade-right animate-once animate-ease-in-out' : ''}`}>Recent Uploads</h1>
                        </a>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { thumbnail: '/thumbnail-19.png', videoId: 'sMgouNAKRUI', title: 'Champions League draw FULL LIVE REACTION! Madrid & Barça get easy draws, PSG in the group of death!'},
                                { thumbnail: '/thumbnail-18.png', videoId: 'YfW0R1RiRcE', title: '🚨👀Vinicius injury, Bellingham carries again! | Real Madrid vs. Celta Vigo La Liga Matchday #3 Vlog'},
                                { thumbnail: '/thumbnail-17.png', videoId: 'hIbC_5xf7Tw', title: "Rubiales Drama talk & Real Madrid vs. Celta Vigo analysis | LaLiga Match Day #3 Fan Interviews"},                            
                                { thumbnail: '/thumbnail-16.png', videoId: 'riLEVReVfJU', title: "Exclusive Footage from protest against Luis Rubiales in favor of Jenni Hermoso 📣🚨 | Sol, Madrid"},

                            ].map((item, idx) => (
                                <a href={`https://youtu.be/${item.videoId}`} key={idx} target="_blank" rel="noopener noreferrer" className="relative group block ">
                                    <div className="aspect-w-16 aspect-h-9 mb-2 hover:scale-105">
                                        <img src={item.thumbnail} alt={`Vid-${idx + 1}`} className={`object-cover w-full h-full rounded-lg transition duration-150 ease-in-out shadow-lg ${recentUploadsVisible ? 'animate-fade animate-once animate-ease-in' : ''}`} />
                                        <p className="text-white text-lg font-bold text-left pt-3 ">{item.title}</p>
                                    </div>
                                </a>                              
                            ))}
                        </div>
                        <div className='flex justify-center mt-4'>
                            <Link href="/ReMin/Videos#uploads" className=" bg-white text-purple-600 w-screen text-center text-lg py-2 rounded-full mt-4 hover:bg-slate-900 hover:text-white transition duration-300 ease-in-out">View More</Link>
                        </div>
                </div>   
                        
                    <div className="my-8 h-1 bg-white"></div>
    
                    {/* Shorts Section */}
                    <div className="mt-8 mb-10" ref={shortsRef}>
                        <a href="https://www.youtube.com/@ReMinFanMedia" target="_blank" rel="noopener noreferrer" className='hover:underline'>
                            <h1 className={`text-white text-3xl font-bold mb-8 ${shortsVisible ? 'animate-fade-right animate-once animate-ease-in-out' : ''}`}>Shorts</h1>
                        </a>
                        <div className={`rounded-lg overflow-x-auto whitespace-nowrap ${shortsVisible ? 'animate-fade animate-once animate-ease-in-out' : ''}`}>
                            {[
                                'n-BLTgZD9KE',
                                '0PVi3Eymor8',
                                'a-EWzo6-ZEA',
                                'idGe9A7-WvQ',
                                'nEOaoY-qgas',
                                '0kMO8JenhnY',
                                'pW1Ku2Hepyg',
                                '7AVQ8vE2Vw4',
                                'HXIJee4ONBQ',
                                '1db8vaP4XU8',
                                'IUw3_E9rjak',
                                'e6YBjjP686o', 
                                '09XrLKx461A', 
                                'qawtlkcHOKE', 
                                'Iw8H-OF48L4', 
                                '_iMqynHUdH4', 
                                'ZUeRVtvPXlA', 
                                's5453Xn48B0'
                            ].map((videoId, idx) => (
                                <iframe key={idx} width="320" height="550" src={`https://www.youtube.com/embed/${videoId}`} title={`Short ${idx + 1}`} frameBorder="0" allow="accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg transition duration-150 ease-in-out inline-block mr-2 shadow-lg"></iframe>
                            ))}
                        </div>
                    </div>
                    <div className='pb-20'>

                    </div>
                </div>
            </div>
            
        );
}

export default Body;
