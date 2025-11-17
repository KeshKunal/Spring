import React, { useState } from 'react'
import Music from "./Music"
import Video from "./Video"
import BreathSync from '../../../components/BreathSync/BreathSync'

function Night() {
  const [showBreathSync, setShowBreathSync] = useState(false);

  return (
    <div>
        <div className="relative bg-[#0D1E44] py-12">
          {/* Breath Sync Feature at Top */}
          <div className="container mx-auto px-4 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-white mb-2">Breath Sync</h3>
              <p className="text-blue-200">Guided breathing exercise with eye tracking</p>
            </div>
            <div className="flex justify-center">
              <button 
                onClick={() => setShowBreathSync(true)}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
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
            theme="night"
          />
        )}
    </div>
  )
}

export default Night