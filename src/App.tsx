import React from 'react';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-700 text-white p-6 mb-6 shadow">
        <h1 className="text-3xl font-bold">Jamendo Music Player</h1>
        <p className="mt-2 text-blue-100">Search and play free tracks from Jamendo by genre/tag.</p>
      </header>
      <main className="max-w-3xl mx-auto px-4">
        <MusicPlayer />
      </main>
      <footer className="mt-12 p-4 text-center text-gray-500">
        Powered by Jamendo | Built with React + TypeScript
      </footer>
    </div>
  );
}

export default App;
