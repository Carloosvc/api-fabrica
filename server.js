const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/estado", (req, res) => {
  res.json({
    modoFabrica: "AUTOMATICO",
    alarma: false,
    puerta: {
      estado: "CERRADA",
      ultimoAcceso: "BOTON"
    },
    prensa: {
      estado: "TRABAJANDO",
      ciclos: 24,
      error: false
    },
    generador: {
      estado: "NORMAL",
      energia: 75,
      consumo: 35
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});
