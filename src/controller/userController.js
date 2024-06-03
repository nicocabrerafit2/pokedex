const controller = {
  formRegisterGet: (req, res) => {
    res.render("register");
  },
  formRegisterPost: (req, res) => {
    res.send(
      "Estas enviando la informacion del formulario de registro de nuevo usuario"
    );
  },
  formSessionGet: (req, res) => {
    res.render("session");
  },
  formSessionPost: (req, res) => {
    res.send("Estas enviando la informacion del formulario inicio de sesion");
  },
};

module.exports = controller;
