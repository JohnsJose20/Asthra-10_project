import React, { useState } from 'react';
import { fetchTracksByTag, Track } from '../services/jamendoApi';

const MusicPlayer: React.FC = () => {
  const [tag, setTag] = useState('');
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const results = await fetchTracksByTag(tag);
      setTracks(results);
    } catch (err) {
      setError('Error fetching tracks');
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-4 flex">
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Search by tag/genre (e.g. rock)"
          className="border p-2 flex-1"
          required
        />
        <button type="submit" className="ml-2 p-2 bg-blue-600 text-white rounded">Search</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-600">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tracks.map((track) => (
          <div key={track.id} className="border p-4 rounded flex items-center">
            <img src={track.image} alt={track.name} className="w-20 h-20 object-cover mr-4 rounded" />
            <div className="flex-1">
              <div className="font-bold">{track.name}</div>
              <div className="text-sm text-gray-700">{track.artist_name} — {track.album_name}</div>
              <audio controls src={track.audio} className="w-full mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;
