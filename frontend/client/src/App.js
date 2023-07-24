import React, { useState } from "react";
import AddContentForm from "./components/AddContentForm";
import ShowContent from "./components/ShowContent";
import "./App.css";

const App = () => {
  const [playlist, setPlaylist] = useState([]);

  const handleAddContent = (newContent) => {
    setPlaylist([...playlist, newContent]);
  };

  return (
    <div className="app">
      {/* onAddContent prop'unu AddContentForm bileşenine geçirin */}
      <AddContentForm onAddContent={handleAddContent} />
      <div className="playlist">
        {playlist.map((content, index) => (
          <ShowContent key={index} contentUrl={content.url} />
        ))}
      </div>
    </div>
  );
};

export default App;
