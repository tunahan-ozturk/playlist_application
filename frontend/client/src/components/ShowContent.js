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
          const data = await response.blob();// blob() metoduyla içeriği blob olarak alıyoruz
          setContent(data);
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
      <h2>{content.name}</h2>
      <img src={URL.createObjectURL(content)} alt="Content" />
    </div>
  );
};

export default ShowContent;
