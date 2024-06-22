const controller = {
  showFormRegister: (req, res) => {
    res.render("register");
  },
  createUser: (req, res) => {
    res.send(
      "Estas enviando la informacion del formulario de registro de nuevo usuario"
    );
  },
  showFormLogin: (req, res) => {
    res.render("session");
  },
  loginUser: (req, res) => {
    res.send("Estas enviando la informacion del formulario inicio de sesion");
  },
};

module.exports = { controller };
