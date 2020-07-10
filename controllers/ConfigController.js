const Device = require("../models/Device");

module.exports = {
  async setConfigration(req, res) {
    let { server_id } = req.body.online_client;

    if (!server_id) {
      return res.send({ message: "O id é obrigatório" });
    }
    let device = await Device.findById({ _id: server_id });
    console.log(device);
    if (device) {
      return res.send({ ok: "ok" });
    } else {
      return res.send({ error: "Device não encontrado" });
    }
  },
};
