'use client'
import React, { useState, useEffect, useRef } from 'react';

const Body: React.FC = () => {
    // States to manage visibility
    const [recentUploadsVisible, setRecentUploadsVisible] = useState<boolean>(false);
    const [shortsVisible, setShortsVisible] = useState<boolean>(false);

    // Refs to track divs
    const recentUploadsRef = useRef<HTMLDivElement | null>(null);
    const shortsRef = useRef<HTMLDivElement | null>(null);

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
        <div className="bg-gradient-to-r from-violet-500 to-purple-500 p-5 min-h-screen">
             <div className="mx-auto max-w-screen-xl px-4 lg:px-0 pt-2">
                {/* Shorts Section */}
                <div className="mt-9 mb-10" ref={shortsRef}>
                            <a href="https://www.youtube.com/@ReMinFanMedia/shorts" target="_blank" rel="noopener noreferrer" className='hover:underline'>
                                <h1 className={`text-white text-3xl font-bold mb-8 ${shortsVisible ? 'animate-fade-right animate-once animate-ease-in-out' : ''}`}>Shorts</h1>
                            </a>
                            <div id="uploads" className={`rounded-lg overflow-x-auto whitespace-nowrap ${shortsVisible ? 'animate-fade animate-once animate-ease-in-out' : ''}`}>
                                {[
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
                    
                    <div className="my-8 h-1 bg-white"></div>

                <div className="mt-8 mb-8" ref={recentUploadsRef} >
                    <a href="https://www.youtube.com/@ReMinFanMedia/videos" target="_blank" rel="noopener noreferrer" className='hover:underline'>
                            <h1 className={`text-white text-3xl font-bold mb-8 ${recentUploadsVisible ? 'animate-fade-right animate-once animate-ease-in-out' : ''}`}>Uploads</h1>
                        </a>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { thumbnail: '/thumbnail-18.png', videoId: 'YfW0R1RiRcE', title: '🚨👀Vinicius injury, Bellingham carries again! | Real Madrid vs. Celta Vigo La Liga Matchday #3 Vlog'},
                                { thumbnail: '/thumbnail-17.png', videoId: 'hIbC_5xf7Tw', title: "Rubiales Drama talk & Real Madrid vs. Celta Vigo analysis | LaLiga Match Day #3 Fan Interviews"},                            
                                { thumbnail: '/thumbnail-16.png', videoId: 'riLEVReVfJU', title: "Exclusive Footage from protest against Luis Rubiales in favor of Jenni Hermoso 📣🚨 | Sol, Madrid"},
                                { thumbnail: '/thumbnail-15.png', videoId: '0e17tzVH9JU&t', title: "Madridistas' Postgame Reactions: With this team... | LaLiga Match Day #2 Post Game Fan Interviews!"},
                                { thumbnail: '/thumbnail-14.png', videoId: 'j_aEskKHZ2E', title: 'Another Bellingham Masterclass | LaLiga Match Day #2 Vlog and Live Fan Cam Reactions'},
                                { thumbnail: '/thumbnail-13.png', videoId: 'uJ7Aj38GciQ', title: 'Barça Fan Confessions: This Madrid team... | LaLiga Match Day 2 Postgame Fan Interview'},
                                { thumbnail: '/thumbnail-12.png', videoId: '8-57_gGqcYQ', title: 'How do we replace Benzema? | The ReMin Podcast'},
                                { thumbnail: '/thumbnail-11.png', videoId: 'GhNuYNJnHP4', title: "Laporta's PR Stunts, The Negreira Case...👀 – The ReMin Podcast Last Preview"},
                                { thumbnail: '/thumbnail-10.png', videoId: 'MtaDVi9767M', title: 'Champions League Disaster: Real Madrid vs Man City Second Leg - Peña Madridista Sur de Florida Vlog'},
                                { thumbnail: '/thumbnail-9.png', videoId: '937wHQy-3kg', title: 'Fans rave about Bellingham, Unfiltered PSG Fan Opinions on Kylian Mbappé - LaLiga Bar Crawl Vlog!'},
                                { thumbnail: '/thumbnail-8.png', videoId: 'oEng4dtvr28', title: 'BARÇA IS A MEME...😂 - The ReMin Podcast Second Preview'},
                                { thumbnail: '/thumbnail-7.png', videoId: 'KYMWs4o61HA', title: "Uncovering Vini's Racist Incident in Valencia - A Madridista's firsthand account from the scene👀"},
                                { thumbnail: '/thumbnail-6.png', videoId: 'IEUjvBagcwo', title: 'SPAIN IS NOT RACIST...Vinicius Jr. and the fight against racism👊 – The ReMin Podcast First Preview'},
                                { thumbnail: '/thumbnail-5.png', videoId: 'Hfnwet_wlhw', title: 'Mbappé reinstated into the PSG first team😟 – 🚨BREAKING NEWS🚨'},
                                { thumbnail: '/thumbnail-4.png', videoId: 'rZGGvNNlti0', title: 'Courtois replacement talk & Mbappé transfer news update! - Fan Interviews and Vlog'},
                                { thumbnail: '/thumbnail-1.png', videoId: 'ifJkNlgl5vE', title: "Real Madrid Fans in Miami have their say after Champions League Debacle against Haaland's Man City😡" },
                                { thumbnail: '/thumbnail-3.png', videoId: '_UeLCe_xmSw', title: 'MBAPPÉ TIC TAC: Fans speak about his rumored arrival, Bernabéu Construction Update, & City Vlog' },
                                { thumbnail: '/thumbnail-2.png', videoId: 'Ohgk9Ad7TeY&t', title: 'Welcome to ReMin Fan Media!🏴󠁧󠁢󠁥󠁮󠁧󠁿🇪🇸🇫🇷' }
                            ].map((item, idx) => (
                                <a href={`https://youtu.be/${item.videoId}`} key={idx} target="_blank" rel="noopener noreferrer" className="relative group block ">
                                    <div className="aspect-w-16 aspect-h-9 mb-2 hover:scale-105">
                                        <img src={item.thumbnail} alt={`Vid-${idx + 1}`} className={`object-cover w-full h-full rounded-lg transition duration-150 ease-in-out shadow-lg ${recentUploadsVisible ? 'animate-fade animate-once animate-ease-in' : ''}`} />
                                        <p className="text-white text-lg font-bold text-left pt-3 ">{item.title}</p>
                                    </div>
                                </a>                              
                            ))}
                        </div>
                </div>   
        
                    
                </div>
        </div>
    );
}


export default Body;
