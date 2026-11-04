const express = require('express');
const app = express();
const animes =[
  { id: 1, titulo: "Solo Leveling", protagonista: "Sung Jin-woo", estudio: "A-1 Pictures" },
  { id: 2, titulo: "Jujutsu Kaisen", protagonista: "Yuji Itadori", estudio: "MAPPA" },
  { id: 3, titulo: "Demon Slayer", protagonista: "Tanjiro Kamado", estudio: "Ufotable" },
  { id: 4, titulo: "Chainsaw Man", protagonista: "Denji", estudio: "MAPPA" },
  { id: 5, titulo: "Attack on Titan", protagonista: "Eren Yeager", estudio: "Wit Studio" }
];

app.get('/itens', (req, res) => {res.json(animes)(status(200))});

app.get('/itens/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const anime = animes.find(a => a.id === id);
  if (anime) {
    res.json(anime);
  } else {
    res.status(404).json({ 
        mensagem: "Anime not found" });
  }
});

app.delete('/item/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const index = animes.findIndex(a => a.id === id);
    if (index !== -1) {
        animes.splice(index, 1);
        res.json({ 
            mensagem: "Anime deleted successfully" });
    } else {
        res.status(404).json({ 
            mensagem: "Anime not found" });
    }
});

app.listen(3000, () => { console.log('rodadando em http://localhost:3000');});

//teste curl -X DELETE http://localhost:3000/item/2