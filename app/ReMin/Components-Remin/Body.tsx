type VideoData = {
    id: string;
    title: string;
    caption: string;
}

const mainVideo: VideoData = {
    id: 'Ohgk9Ad7TeY',
    title: 'Main Video',
    caption: 'This is the main video.'
};

const sideVideos: VideoData[] = [
    {
        id: 'sampleId1',
        title: 'Side Video 1',
        caption: 'This is a side video 1.'
    },
    {
        id: 'sampleId2',
        title: 'Side Video 2',
        caption: 'This is a side video 2.'
    }
];

export default function Body() {
    return (
        <div className="bg-gray-200 overflow-y-auto p-4 h-screen">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-0 flex pt-5">

                {/* Main Video on the Left */}
                <div className="flex-1 pr-2 relative">
                    <div className="absolute top-0 left-0 w-full flex justify-center">
                        <span className="bg-black bg-opacity-60 text-white text-xl px-2 py-1 rounded">{mainVideo.title}</span>
                    </div>
                    <iframe 
                        className="rounded-lg w-full" 
                        height="200"
                        width="200"
                        src={`https://www.youtube.com/embed/${mainVideo.id}`} 
                        title={mainVideo.title} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                    </iframe>
                </div>

                {/* Two Videos on the Right */}
                <div className="flex-1 pl-4 space-y-4">
                    {sideVideos.map(video => (
                        <div key={video.id} className="relative">
                            <div className="absolute top-0 left-0 w-full flex justify-center">
                                <span className="bg-black bg-opacity-60 text-white px-2 py-1 rounded">{video.title}</span>
                            </div>
                            <iframe 
                                className="rounded-lg w-full" 
                                height="50" 
                                width="50"
                                src={`https://www.youtube.com/embed/${video.id}`} 
                                title={video.title} 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



