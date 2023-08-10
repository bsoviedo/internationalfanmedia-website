'use client'
import React, { useState, useEffect, useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Resizable from './testSlider';


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
        <div className="bg-gradient-to-t from-amber-300 to-blue-600 to-purple-500 overflow-y-auto p-4 h-screen">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-0 pt-5">
                <div>
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/Ohgk9Ad7TeY?autoplay=1" title="Welcome to ReMin Fan Media" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture; web-share" allowFullScreen className='rounded-lg animate-fade animate-ease-in' ></iframe>
                </div>

                <div className="my-8 h-1 bg-gradient-to-r from-fuchsia-200 via-purple-200 to-blue-200"></div>

                {/* Recent Uploads Section */}
                <div className="mt-8" ref={recentUploadsRef}>
                    <a href="https://www.youtube.com/@ReMinFanMedia" target="_blank" rel="noopener noreferrer" className='hover:underline '>
                    <h1 className={`text-white text-3xl font-bold mb-8 ${recentUploadsVisible ? 'animate-fade-right animate-once animate-ease-in-out' : ''}`}>Recent Uploads</h1>
                    </a>
                    <div className="flex space-x-4">
                        <a href="" className="">
                            <img src="/thumbnail-1.png" height={1000} width={1000} alt="Vid-1" className={`rounded-lg hover:scale-105 transition duration-150 ease-in-out ${recentUploadsVisible ? 'animate-fade animate-once animate-ease-in' : ''}`}></img>
                        </a>
                        <a href="" className="">
                            <img src="/thumbnail-3.png" height={1000} width={1000} alt="Vid-2" className={`rounded-lg hover:scale-105 transition duration-150 ease-in-out ${recentUploadsVisible ? 'animate-fade animate-once animate-ease-in' : ''}`}></img>
                        </a>
                    </div>
                </div>
                <div className="my-8 h-1 bg-gradient-to-r from-fuchsia-200 via-purple-200 to-blue-200"></div>

                {/* Shorts Section */}
                <div className="mt-8 mb-10 relative rounded-lg" ref={shortsRef}>
                    <a href="https://www.youtube.com/@ReMinFanMedia" target="_blank" rel="noopener noreferrer" className='hover:underline'>
                        <h1 className={`text-white text-3xl font-bold mb-8 ${shortsVisible ? 'animate-fade-right animate-once animate-ease-in-out' : ''}`}>Shorts</h1>
                    </a>
                        <div className={`overflow-x-auto whitespace-nowrap overflow-x-scroll ${shortsVisible ? 'animate-fade animate-once animate-ease-in-out' : ''}`}>
                            <iframe width="320" height="550" src="https://www.youtube.com/embed/pW1Ku2Hepyg" title="Short 1" frameBorder="0" allow="accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg transition duration-150 ease-in-out inline-block mr-2"></iframe>

                            <iframe width="320" height="550" src="https://www.youtube.com/embed/s5453Xn48B0" title="Short 2" frameBorder="0" allow="accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg  transition duration-150 ease-in-out inline-block mx-2"></iframe>

                            <iframe width="320" height="550" src="https://www.youtube.com/embed/ZUeRVtvPXlA" title="Short 3" frameBorder="0" allow="accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg transition duration-150 ease-in-out inline-block mx-2"></iframe>

                            <iframe width="320" height="550" src="https://www.youtube.com/embed/qawtlkcHOKE" title="Short 3" frameBorder="0" allow="accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg  transition duration-150 ease-in-out inline-block mx-2"></iframe>

                            <iframe width="320" height="550" src="https://www.youtube.com/embed/IUw3_E9rjak" title="Short 3" frameBorder="0" allow="accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg transition duration-150 ease-in-out inline-block mx-2"></iframe>

                            <iframe width="320" height="550" src="https://www.youtube.com/embed/1db8vaP4XU8" title="Short 3" frameBorder="0" allow="accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg transition duration-150 ease-in-out inline-block mx-2"></iframe>

                        </div>
                </div>
                
            </div>
        </div>
    );
}

export default Body;
