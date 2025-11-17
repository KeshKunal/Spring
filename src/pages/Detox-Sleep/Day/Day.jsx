import React, { useState } from 'react'
import Music from "./Music"
import Video from "./Video"
import BreathSync from '../../../components/BreathSync/BreathSync'

function Day() {
  const [showBreathSync, setShowBreathSync] = useState(false);

  return (
    <div>
        <div className="relative bg-[#FBF4EE] py-12">
          {/* Breath Sync Feature at Top */}
          <div className="container mx-auto px-4 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-[#372E2C] mb-2">Breath Sync</h3>
              <p className="text-gray-600">Guided breathing exercise with eye tracking</p>
            </div>
            <div className="flex justify-center">
              <button 
                onClick={() => setShowBreathSync(true)}
                className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                  <span className="text-lg font-semibold">Start Breathing Exercise</span>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>
        <Music/>
        <Video/>
        {showBreathSync && (
          <BreathSync 
            onClose={() => setShowBreathSync(false)} 
            theme="day"
          />
        )}
    </div>
  )
}

export default Day