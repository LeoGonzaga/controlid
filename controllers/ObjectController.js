const User = require("../models/User");
const Device = require("../models/Device");

module.exports = {
  async createObject(req, res) {
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
    } else if (req.body.object == "devices") {
      console.log(req.body);
      for (let index = 0; index < req.body.values.length; index++) {
        const element = req.body.values[index];
        console.log(element);
        const { name, ip, public_key } = element;
        if (!name || !ip || !public_key) {
          return res.json({
            message: "Todo os campos são obrigatórios",
          });
        }
        let device = await Device.findOne({ ip });
        console.log("device", device);
        if (device) {
          return res.json({
            message: "Esse device já foi cadastrado anteriormente.",
          });
        }
        device = await Device.create({ name, ip, public_key });
        idArray.push(device._id);
      }
      return res.json({ ids: idArray });
    }
  },
};
