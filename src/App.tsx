import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import MoodSelector from './components/MoodSelector';
import DemoSection from './components/DemoSection';
import HowItWorks from './components/HowItWorks';
import SpotifySection from './components/SpotifySection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import MusicVisualizer from './components/MusicVisualizer';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [selectedMood, setSelectedMood] = useState('excited');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-x-hidden">
      <MusicVisualizer />

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero selectedMood={selectedMood} />
            <MoodSelector 
              selectedMood={selectedMood} 
              setSelectedMood={setSelectedMood} 
            />

            {/* Music Player Trigger Button */}
            <div className="flex justify-center my-8">
              <button
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow hover:shadow-lg transition-all duration-300"
                onClick={() => setShowPlayer(true)}
              >
                Open Music Player
              </button>
            </div>

            {/* Music Player Modal */}
            <AnimatePresence>
              {showPlayer && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative"
                  >
                    <button
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                      onClick={() => setShowPlayer(false)}
                      aria-label="Close"
                    >
                      ×
                    </button>
                    {/* Pass selectedMood as the default tag */}
                    <MusicPlayer key={selectedMood} defaultTag={selectedMood} />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <DemoSection />
            <HowItWorks />
            <SpotifySection />
            <TeamSection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
