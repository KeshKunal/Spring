import React, { useRef, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

function Audio() {
    const [currentAudio, setCurrentAudio] = useState('/Therapy-AV/audio3.mp3');
    const audioRef = useRef();

    const audios = [
        {
            img: "/AV/a1.svg",
            song: "/Therapy-AV/audio3.mp3"
        },
        {
            img: "/AV/a2.svg",
            song: "/Therapy-AV/audio1.mp3"
        },
        {
            img: "/AV/a3.svg",
            song: "/Therapy-AV/audio2.mp3"
        },
        {
            img: "/AV/a4.svg",
            song: "/Therapy-AV/audio4.mp3"
        },
        // {
        //     img: "/AV/a5.svg",
        //     song: "/Therapy-AV/audio4.mp3"
        //   }
    ];

    const handleOpen = (song) => {
        setCurrentAudio(song);
        if (audioRef.current) {
            audioRef.current.audio.load();
            audioRef.current.audio.play();
        }
    };

    return (
        <div className='bg-[#F3F3F9]'>
            <div className='flex justify-center items-center pt-14 flex-wrap'>
                <img src="/AV/head.svg" alt="head" className='pr-5' />
                <div className='inline-block bg-[#fffbad] relative mt-4 md:mt-0'>
                    <div className='font-Rspring text-3xl md:text-5xl text-center md:text-left'>
                        Take a Break from <span className='text-[#0E176E] relative'>Screen</span>
                        <img src="/AV/line.svg" alt="line" className='hidden md:block absolute left-96 top-4' />
                    </div>
                </div>
            </div>

            <ReactAudioPlayer
                ref={audioRef}
                src={currentAudio}
                controls
                className='player scale-100 mt-8 block sm:hidden '
            />

            <div className='flex justify-center items-center py-16 flex-wrap'>
                {audios.map((audio, index) => (
                    <img
                        key={index}
                        src={audio.img}
                        alt="image"
                        className='md:pr-14 cursor-pointer mb-4 md:mb-0'
                        onClick={() => handleOpen(audio.song)}
                    />
                ))}
            </div>
            <div className='flex justify-center'>
                <ReactAudioPlayer
                    ref={audioRef}
                    src={currentAudio}
                    controls
                    className='player scale-125 mb-14 hidden sm:block'
                />
            </div>
        </div>
    );
}

export default Audio;
