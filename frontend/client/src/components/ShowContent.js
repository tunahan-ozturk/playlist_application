import React, { useState, useEffect } from "react";
import "./styles/ShowContent.css";

const ShowContent = ({ contentUrl }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true); // Yükleniyor durumunu takip ediyoruz

  useEffect(() => {
    const fetchContent = async () => {
      // İçerik çekme işlemini bir fonksiyon içinde yapıyoruz
      try {
        const response = await fetch(contentUrl); // İçeriği çekiyoruz
        if (response.ok) {
          const data = await response.json(); // İçeriği JSON formatına çeviriyoruz
          setContent(data);
        } else {
          console.error("Failed to fetch content:", response.statusText);
          // Hata durumunda loading durumunu güncelliyoruz
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching content:", error);
        setLoading(false); // Hata durumunda loading durumunu güncelliyoruz
      }
    };
    fetchContent();
  }, [contentUrl]);

  // İçerik çekilirken kullanıcıya bir yükleniyor mesajı gösteriyoruz
  if (loading) {
    return <div>Loading...</div>;
  }

  // İçerik çekilemediğinde bir hata mesajı gösteriyoruz
  if (!content) {
    return <div>Failed to fetch content.</div>;
  }

  // İçeriği gösterme işlemi (bu kısmı özelleştirin, veri türüne ve nasıl göstermek istediğinize göre düzenleyin)
  return (
    <div className="show-content">
      <h2>{content.name}</h2>
      {content.type === "image" && <img src={content.url} alt={content.name} />}
      {content.type === "video" && (
        <video controls>
          <source src={content.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default ShowContent;
