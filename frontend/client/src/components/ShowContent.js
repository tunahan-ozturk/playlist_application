import React, { useState, useEffect } from "react";
import "./styles/ShowContent.css";

const ShowContent = ({ contentUrl }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(contentUrl);
        if (response.ok) {
          const data = await response.blob();
          setContent(URL.createObjectURL(data)); // Düzeltme burada!
        } else {
          console.error("Failed to fetch content:", response.statusText);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching content:", error);
        setLoading(false);
      }
    };
    fetchContent();
  }, [contentUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!content) {
    return <div>Failed to fetch content.</div>;
  }

  return (
    <div className="show-content">
      {/* İçerik türüne göre resim ya da video gösterimi */}
      {contentUrl.endsWith(".mp4") ? (
        <video controls>
          <source src={content} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={content} alt="Content" />
      )}
    </div>
  );
};

export default ShowContent;
