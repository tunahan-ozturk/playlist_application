import React, { useState } from 'react';
import './styles/AddContentForm.css';

const AddContentForm = ({ onAddContent }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('image');
  const [url, setUrl] = useState(''); // Kullanıcıdan alınan URL'yi burada saklayacağız
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContent = {
      name,
      type,
      url, // Kullanıcıdan alınan URL'yi nesneye ekliyoruz
      duration: parseInt(duration), // Kullanıcıdan alınan süreyi sayıya çeviriyoruz
    };
    onAddContent(newContent); // onAddContent prop'unu kullanarak yeni içeriği ana bileşene gönderiyoruz
    setName('');
    setType('image');
    setUrl('');
    setDuration('');
  };

  return (
    <div className="add-content-form">
      <h2>Add New Content</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"> Content Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="url">URL:</label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            placeholder='https://'
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (in seconds):</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Content</button>
      </form>
    </div>
  );
};

export default AddContentForm;
