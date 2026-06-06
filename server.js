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
