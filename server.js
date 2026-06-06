const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API fabrica funcionando");
});

app.get("/estado", (req, res) => {
  res.json({
    modoFabrica: "AUTOMATICO",
    alarma: false,
    puerta: {
      estado: "ABIERTA",
      ultimoAcceso: "RFID"
    },
    prensa: {
      estado: "TRABAJANDO",
      ciclos: 24,
      error: false
    },
    generador: {
      estado: "CRITICO",
      energia: 75,
      consumo: 35
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});
