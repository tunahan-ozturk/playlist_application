// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 1955;

const allowedOrigins = ['http://localhost:3000'];

app.use(cors({
  origin: allowedOrigins, // frontend'in adresi
  methods: ['GET', 'POST'],
}));

app.use(bodyParser.json());

let playlist = [
  {
    name: "My Video",
    type: "video",
    url: "video.mp4",
    duration: 3,
  },
  {
    name: "My Image",
    type: "image",
    url: "image.jpg",
    duration: 3,
  },
];

app.get('/api/playlist', async (req, res) => { // playlist dizisini döndürüyoruz
  res.json(playlist); // JSON formatında döndürüyoruz
});

app.post('/api/add', (req, res) => { // playlist dizisine yeni içerik ekliyoruz
  const { name, type, url, duration } = req.body;
  playlist.push({ name, type, url, duration });
  res.status(201).json({ message: 'Yeni içerik başarıyla eklendi.' });
});

app.listen(port, () => { // sunucuyu başlatıyoruz
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});