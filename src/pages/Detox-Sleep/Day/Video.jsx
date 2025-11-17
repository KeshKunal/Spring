import React, { useState, useRef } from 'react';

function Video() {
    const openModal1 = () => document.getElementById('my_modal_1').showModal();
    const openModal2 = () => document.getElementById('my_modal_2').showModal();
    const openModal3 = () => document.getElementById('my_modal_3').showModal();
    const openModal4 = () => document.getElementById('my_modal_4').showModal();

    const closeRef = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    const closeVideo = (index) => {
        const video = (closeRef[index].current);
        video.pause();
    }

    return (
        <div className="px-5 sm:px-20 mb-10 mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">

                {/* First Row */}
                <div
                    className="col-span-3 bg-[#4A3A37] bg-[url('/Meditation/d1.svg')] bg-no-repeat bg-cover p-8 h-52 rounded-[40px] flex items-center justify-center cursor-pointer sm:col-span-6 lg:col-span-3"
                    onClick={openModal1}
                >
                    <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            viewBox="0 0 384 512"
                            className="fill-black"
                        >
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                        </svg>
                    </div>
                </div>

                <div
                    className="col-span-3 bg-[#4A3A37] bg-[url('/Meditation/d2.svg')] bg-no-repeat bg-cover p-8 h-52 rounded-[40px] flex items-center justify-center cursor-pointer sm:col-span-6 lg:col-span-3"
                    onClick={openModal2}
                >
                    <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            viewBox="0 0 384 512"
                            className="fill-black"
                        >
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                        </svg>
                    </div>
                </div>

                {/* Second Row */}
                <div className="col-span-2 bg-[#D5C5B5] p-2 rounded-[40px] flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
                    <img src="/Meditation/h2.svg" alt="sad" className='scale-[1.35] md:h-40 mx-auto sm:w-full' />
                    <div className='px-4 pb-4 text-lg font-medium sm:w-full'>"Meditation? Hmph! I just don’t wanna do it! It won’t help me—I’m grumpy, and nothing can change that!"</div>
                </div>

                <div className="col-span-2 bg-[#F7E0BD] p-2 rounded-[40px] flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
                    <img src="/Meditation/m1.svg" alt="sad" className='scale-[1.35] h-40 mx-auto sm:w-full' />
                    <div className='px-4 pb-4 text-lg font-medium sm:w-full'>"Hmm... maybe this meditation thing isn’t so bad... I’m feeling a bit better, I think."</div>
                </div>

                <div className="col-span-2 bg-[#4A3A37] text-white p-2 rounded-[40px] flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
                    <img src="/Meditation/s1.svg" alt="sad" className='scale-[1.35] h-40 mx-auto sm:w-full' />
                    <div className='px-4 pb-4 text-lg font-medium sm:w-full'>"Yay! Meditation makes me feel all warm and fuzzy inside, and I’m so much happier!"</div>
                </div>

                {/* Third Row */}
                <div
                    className="col-span-3 bg-[#4A3A37] bg-[url('/Meditation/d3.svg')] bg-no-repeat bg-cover p-8 rounded-[40px] flex items-center justify-center cursor-pointer sm:col-span-6 lg:col-span-3"
                    onClick={openModal3}
                >
                    <div className="h-14 w-14 rounded-full m-10 bg-white flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            viewBox="0 0 384 512"
                            className="fill-black"
                        >
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                        </svg>
                    </div>
                </div>

                <div
                    className="col-span-3 bg-[#4A3A37] bg-[url('/Meditation/d4.svg')] bg-no-repeat bg-cover p-8 rounded-[40px] flex items-center justify-center cursor-pointer sm:col-span-6 lg:col-span-3"
                    onClick={openModal4}
                >
                    <div className="h-14 w-14 rounded-full m-10 bg-white flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            viewBox="0 0 384 512"
                            className="fill-black"
                        >
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                        </svg>
                    </div>
                </div>

                {/* Modals */}
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box w-full max-w-2xl h-180px">
                        <div className="aspect-w-9 aspect-h-16">
                            <video
                                ref={closeRef[0]}
                                src="/Meditation/d1.mp4"
                                controls
                                style={{ width: "635px", height: "374px" }}
                            >
                            </video>
                        </div>
                        <div className="modal-action ">
                            <form method="dialog">
                                <button className="btn" onClick={() => { closeVideo(0) }}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box w-full max-w-2xl h-180px">
                        <div className="aspect-w-9 aspect-h-16">
                            <video
                                ref={closeRef[1]}
                                src="/Meditation/d2.mp4"
                                controls
                                style={{ width: "635px", height: "374px" }}
                            >
                            </video>
                        </div>
                        <div className="modal-action ">
                            <form method="dialog">
                                <button className="btn" onClick={() => { closeVideo(1) }}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box w-full max-w-2xl h-180px">
                        <div className="aspect-w-9 aspect-h-16">
                            <video
                                ref={closeRef[2]}
                                src="/Meditation/d3.mp4"
                                controls
                                style={{ width: "635px", height: "374px" }}
                            >
                            </video>
                        </div>
                        <div className="modal-action ">
                            <form method="dialog">
                                <button className="btn" onClick={() => { closeVideo(2) }}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-full max-w-2xl h-180px">
                        <div className="aspect-w-9 aspect-h-16">
                            <video
                                ref={closeRef[3]}
                                src="/Meditation/d4.mp4"
                                controls
                                style={{ width: "635px", height: "374px" }}
                            >
                            </video>
                        </div>
                        <div className="modal-action ">
                            <form method="dialog">
                                <button className="btn" onClick={() => { closeVideo(3) }}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
}

export default Video;
