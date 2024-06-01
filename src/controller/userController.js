const path = require("path");
const controller = {
  formRegisterGet: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/register.html"));
  },
  formRegisterPost: (req, res) => {
    res.send(
      "Estas enviando la informacion del formulario de registro de nuevo usuario"
    );
  },
  formSessionGet: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/session.html"));
  },
  formSessionPost: (req, res) => {
    res.send("Estas enviando la informacion del formulario inicio de sesion");
  },
};

module.exports = controller;
