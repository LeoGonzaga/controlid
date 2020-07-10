module.exports = {
  async clockwise(req, res) {
    let idArray = [];

    if (req.body.object == "users") {
      for (let index = 0; index < req.body.values.length; index++) {
        const element = req.body.values[index];
        console.log(element);
        const { name, registration, password, salt } = element;
        if (!name || !registration) {
          return res.json({
            message: "O campo de nome e registro são obrigatórios",
          });
        }
        let user = await User.findOne({ registration });
        console.log("user", user);
        if (user) {
          return res.json({
            message: "Esse registro já foi cadastrado anteriormente.",
          });
        }
        user = await User.create({ name, registration, password, salt });
        idArray.push(user._id);
      }
      return res.json({ ids: idArray });
    }
  },
};
