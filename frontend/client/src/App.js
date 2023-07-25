import React, { useState, useEffect } from "react";
import AddContentForm from "./components/AddContentForm";
import ShowContent from "./components/ShowContent";
import "./App.css";

const App = () => {
  const [playlist, setPlaylist] = useState([
    {
      name: "Sample Image 1",
      type: "image",
      url: "https://loremflickr.com/320/240/brazil,rio",
      duration: 5,
    },
    {
      name: "Sample Image 2",
      type: "image",
      url: "https://loremflickr.com/g/320/240/paris",
      duration: 3,
    },
  ]);

  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => { // setInterval ile playlist dizisindeki içeriklerin sürelerine göre geçiş yapacağız
      setCurrentContentIndex((prevIndex) => (prevIndex + 1) % playlist.length); // Geçerli içeriğin index'ini güncelliyoruz
    }, playlist[currentContentIndex]?.duration * 1000); // Geçerli içeriğin süresi kadar bekliyoruz

    return () => {
      clearInterval(interval);
    };
  }, [playlist, currentContentIndex]);

  const handleAddContent = (newContent) => {
    setPlaylist([...playlist, newContent]);
  };

  return (
    <div className="app">
      <AddContentForm onAddContent={handleAddContent} />
      <div className="playlist">
        <ul>
          {playlist.map((content, index) => (
            <li key={index} style={{ display: index === currentContentIndex ? "block" : "none" }}>
              <ShowContent contentUrl={content.url} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
