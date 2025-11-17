import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Blob() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 300);
    };

    return (
        <div className='blob-wrapper' style={{
            position: 'relative', width: '650px', height: '650px', transform: isClicked ? 'scale(0.8)' : 'scale(1)',
            transition: 'transform 0.3s ease'
        }}
            onClick={handleClick}
        >
            <svg
                viewBox="0 0 892 876"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '200%', height: '200%', pointerEvents: 'none' }}
            >
                <defs>
                    <linearGradient id="paint0_linear_1125_286" x1="681.626" y1="38.6128" x2="465.031" y2="821.847" gradientUnits="userSpaceOnUse">
                        <stop offset="0.00399963" stopColor="#695E91" />
                        <stop offset="0.144" stopColor="#BC48AA" />
                        <stop offset="0.424" stopColor="#FF5775" />
                        <stop offset="0.694" stopColor="#FEB9B9" />
                        <stop offset="0.92" stopColor="#F5F5A0" />
                        <stop offset="1" stopColor="#F5F5A0" />
                    </linearGradient>
                </defs>
                <path
                    id="blob"
                    fill="url(#paint0_linear_1125_286)"
                    style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                >
                    <animate
                        attributeName='d'
                        dur='20000ms'
                        repeatCount='indefinite'
                        values="
                        M414.5,321Q363,392,286.5,408.5Q210,425,119,391Q28,357,42.5,257Q57,157,126,82.5Q195,8,288.5,46Q382,84,424,167Q466,250,414.5,321Z;
                        M411,331Q379,412,292.5,427.5Q206,443,116,400.5Q26,358,34,254Q42,150,122,95.5Q202,41,304,48Q406,55,424.5,152.5Q443,250,411,331Z;
                        M422,330.5Q379,411,291,433Q203,455,122,403Q41,351,63.5,261Q86,171,143,101Q200,31,299,48Q398,65,431.5,157.5Q465,250,422,330.5Z;
                        M435,330Q378,410,292.5,425Q207,440,145,385Q83,330,83,249.5Q83,169,138.5,87.5Q194,6,297,34Q400,62,446,156Q492,250,435,330Z;
                        M426,332.5Q382,415,291,443Q200,471,133,404.5Q66,338,64,248.5Q62,159,130.5,93Q199,27,286,61.5Q373,96,421.5,173Q470,250,426,332.5Z;
                        M417.58777,348.27293Q407.23668,446.54585,306.77293,443.52576Q206.30917,440.50568,131.94847,391.35589Q57.58777,342.20611,44.02096,243.24236Q30.45415,144.2786,113.67555,81.43319Q196.89694,18.58777,278.6393,64.65459Q360.38166,110.7214,394.16026,180.3607Q427.93886,250,417.58777,348.27293Z;
                        M414.5,321Q363,392,286.5,408.5Q210,425,119,391Q28,357,42.5,257Q57,157,126,82.5Q195,8,288.5,46Q382,84,424,167Q466,250,414.5,321Z;
                        M411,331Q379,412,292.5,427.5Q206,443,116,400.5Q26,358,34,254Q42,150,122,95.5Q202,41,304,48Q406,55,424.5,152.5Q443,250,411,331Z;
                        M422,330.5Q379,411,291,433Q203,455,122,403Q41,351,63.5,261Q86,171,143,101Q200,31,299,48Q398,65,431.5,157.5Q465,250,422,330.5Z;
                        M426,332.5Q382,415,291,443Q200,471,133,404.5Q66,338,64,248.5Q62,159,130.5,93Q199,27,286,61.5Q373,96,421.5,173Q470,250,426,332.5Z;
                        M435,330Q378,410,292.5,425Q207,440,145,385Q83,330,83,249.5Q83,169,138.5,87.5Q194,6,297,34Q400,62,446,156Q492,250,435,330Z;
                        M425.5,347Q405,444,307,436.5Q209,429,149.5,378Q90,327,60.5,236Q31,145,117,95.5Q203,46,300.5,55Q398,64,422,157Q446,250,425.5,347Z;
                        M417.58777,348.27293Q407.23668,446.54585,306.77293,443.52576Q206.30917,440.50568,131.94847,391.35589Q57.58777,342.20611,44.02096,243.24236Q30.45415,144.2786,113.67555,81.43319Q196.89694,18.58777,278.6393,64.65459Q360.38166,110.7214,394.16026,180.3607Q427.93886,250,417.58777,348.27293Z;
                        "
                    />
                </path>
            </svg>
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                <div style={{ display: 'flex', gap: '40px' }}>
                    {/* Left Eye */}
                    <img src="/blob/eye1.svg" alt="eye" className='scale-[.6]'/>

                    {/* Right Eye */}
                    <img src="/blob/eye2.svg" alt="eye" className='scale-[.6]'/>
                </div>
                {/* Mouth */}
                <img src="/blob/mouth.svg" alt="eye" className='scale-[.6] mt-3'/>
            </div>
        </div>
    );
}

export default Blob;
