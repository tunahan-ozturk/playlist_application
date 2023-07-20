// frontend/client/src/components/Playlist.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Playlist = () => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    axios.get('/api/playlist')
      .then((response) => setPlaylist(response.data))
      .catch((error) => console.error('Çalma listesi alınamadı:', error));
  }, []);

  return (
    <div>
      <h1>Çalma Listesi</h1>
      {playlist.map((content, index) => (
        <div key={index}>
          {content.type === 'video' ? (
            <video
              src={content.url}
              controls
              muted
              style={{ width: '100%', marginBottom: '20px' }}
            />
          ) : (
            <img src={content.url} alt={content.name} style={{ width: '100%', marginBottom: '20px' }} />
          )}
          <p>{content.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
