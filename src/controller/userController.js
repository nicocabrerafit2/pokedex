const controller = {
  showFormRegister: (req, res) => {
    res.render("register"); //http://localhost:3001/user/register
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

export default controller;
