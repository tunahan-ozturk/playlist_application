// frontend/client/src/App.js

import React from 'react';
import Playlist from './components/Playlist';
import AddContentForm from './components/AddContentForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Playlist />
      <AddContentForm />
    </div>
  );
}

export default App;
