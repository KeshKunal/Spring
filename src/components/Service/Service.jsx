import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Service() {
    const services = [
        { name: "WANNA TALK ABOUT IT ?", link: "#Talk", bgColor: "bg-[#eba0b1]" },
        { name: "WHO DO YOU THINK NEEDS HELP ?", link: "#Help", bgColor: "bg-[#9097FD]" },
        { name: "BOOK A SESSION", link: "#Session", bgColor: "bg-[#F5F5A0]" },
        { name: "DIGITAL DETOX", link: "#Detox", bgColor: "bg-[#9BC5C2]" },
        { name: "AI BASED DREAM ANALYZER", link: "#Dream", bgColor: "bg-[#EFDDD8]" },
        { name: "AUDIO AND VIDEO THERAPY", link: "#Therapy", bgColor: "bg-[#87CEFA]" }
    ];

    return (
        <div className="relative w-full overflow-hidden mb-8">
            <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
            <div className="flex animate-scroll">
                {[...services, ...services , ...services].map((service, index) => (
                    <Link 
                        key={index}
                        smooth
                        to={service.link}
                        className={`
                            flex-none w-64 h-64 m-4 p-4 rounded-xl shadow-md 
                            flex items-center justify-center text-center cursor-pointer
                            hover:bg-opacity-85 transition-opacity duration-300 
                            font-betofin text-2xl leading-10
                            ${service.bgColor}
                        `}
                    >
                        {service.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Service;



