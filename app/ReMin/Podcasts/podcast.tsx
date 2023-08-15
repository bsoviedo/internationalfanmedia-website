'use client'
import React, { useState, useEffect, useRef } from 'react';

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
        <div className="bg-gradient-to-r from-violet-500 to-purple-500 p-5 min-h-screen">
                <div className="mx-auto max-w-screen-xl px-4 lg:px-0 pt-5">  
                    <div className="mt-8" ref={recentUploadsRef}>
                        <a href="https://www.youtube.com/@ReMinFanMedia/videos" target="_blank" rel="noopener noreferrer" className='hover:underline'>
                                <h1 className={`text-white text-3xl font-bold mb-8 ${recentUploadsVisible ? 'animate-fade-right animate-once animate-ease-in-out' : ''}`}>Podcasts</h1>
                            </a>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { thumbnail: '/thumbnail-6.png', videoId: 'IEUjvBagcwo'}
                                    ].map((item, idx) => (
                                        <a href={`https://youtu.be/${item.videoId}`} key={idx} target="_blank" rel="noopener noreferrer" className="relative">
                                            <div className="aspect-w-16 aspect-h-9">
                                                <img src={item.thumbnail} alt={`Vid-${idx + 1}`} className={`object-cover w-full h-full rounded-lg hover:scale-105 transition duration-150 ease-in-out shadow-lg ${recentUploadsVisible ? 'animate-fade animate-once animate-ease-in' : ''}`} />
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
