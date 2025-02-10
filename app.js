const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("Server del mio blog")
})

app.get("/bacheca", (req, res) => {
    const posts = [
        {
          titolo: "Ciambellone soffice e goloso",
          contenuto: "Il ciambellone è uno dei dolci più amati della tradizione italiana. Con la sua consistenza morbida e il sapore delicato, è perfetto per la colazione o una merenda golosa.",
          immagine: "http://localhost:3000/img/ciambellone.jpeg",
          tags: ["dolce", "colazione", "merenda", "tradizione", "ciambellone"]
        },
        {
          titolo: "Cracker alla barbabietola: uno snack sano",
          contenuto: "I cracker alla barbabietola sono un'alternativa salutare e gustosa agli snack tradizionali. Con il loro colore vivace e il sapore unico, sono ideali per una pausa snack nutriente.",
          immagine: "http://localhost:3000/img/cracker_barbabietola.jpeg",
          tags: ["snack", "salute", "barbabietola", "crackers", "vegano"]
        },
        {
          titolo: "Pane fritto dolce: la ricetta irresistibile",
          contenuto: "Il pane fritto dolce è una delizia che unisce il sapore croccante e la dolcezza, perfetto per un dessert o una merenda. Facile e veloce da preparare, conquisterà tutti.",
          immagine: "http://localhost:3000/img/pane_fritto_dolce.jpeg",
          tags: ["dolce", "dessert", "fritto", "facile", "pane"]
        },
        {
          titolo: "Pasta alla barbabietola: un piatto colorato e saporito",
          contenuto: "La pasta alla barbabietola è un piatto ricco di gusto e colore. La barbabietola dona un sapore dolce e una tonalità intensa che rende ogni piatto speciale.",
          immagine: "http://localhost:3000/img/pasta_barbabietola.jpeg",
          tags: ["pasta", "barbabietola", "colorato", "vegetariano", "ricetta"]
        },
        {
          titolo: "Torta paesana: il dolce della tradizione contadina",
          contenuto: "La torta paesana è un dolce rustico tipico delle campagne italiane. Con il suo sapore semplice e genuino, è perfetta per chi cerca un dolce ricco di tradizione.",
          immagine: "http://localhost:3000/img/torta_paesana.jpeg",
          tags: ["dolce", "tradizione", "contadina", "rustico", "torta"]
        }
      ];
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})