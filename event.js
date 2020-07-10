const pathUtils = require("./path-utils");
var secret = "this is the secret secret secret 12356";
const UserController = require("./controllers/ObjectController");

const paths = [
  "new_biometric_image.fcgi",
  "new_biometric_template.fcgi",
  "new_card.fcgi",
  "new_user_id_and_password.fcgi",
  "new_user_identified.fcgi",
  "user_get_image.fcgi",
  "device_is_alive.fcgi",
  "template_create.fcgi",
  "fingerprint_create.fcgi",
  "card_create.fcgi",
  "new_rex_log.fcgi",
  "master_password.fcgi",
  "login.fcgi",
  "session_is_valid.fcgi",
  "execute_actions.fcgi",
  "create_objects.fcgi",
  "remote_user_authorization.fcgi",
];

module.exports = (request, response) => {
  const lastPathname = pathUtils.extractLastPathname(request.path);

  if (pathUtils.notHasPath(lastPathname, paths)) {
    return;
  }

  var contentType = request.get("content-type");

  if (
    ["application/json", "application/x-www-form-urlencoded"].includes(
      contentType
    )
  ) {
    console.log("Body content:\n" + JSON.stringify(request.body, null, 2));
  }

  if ("application/octet-stream" === contentType) {
    let bytes = [];
    let uploadProgress = 0;

    request.on("data", (byte) => {
      uploadProgress += byte.length;

      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write("Loading -> " + uploadProgress);

      bytes.push(byte);
    });

    request.on("end", () => console.log("\nLoaded!"));
  }

  if (lastPathname === "new_user_identified.fcgi") {
    console.log("New User", request.body);
    let { portal_id, user_name, user_id, event } = request.body;

    let userID = parseInt(user_id, 10);
    let porterID = parseInt(portal_id, 10);

    // if (event == 3) {
    //   return response.send({
    //     result: {
    //       event: 3,
    //       user_id: userID,
    //       user_name: user_name,
    //       user_image: false,
    //       portal_id: porterID,
    //       message: "Usuário não identificado",
    //     },
    //   });
    // }

    return response.send({
      result: {
        event: 7,
        user_id: userID,
        user_name: user_name,
        user_image: false,
        portal_id: porterID,
        message: "Bem-vindo (a),",
        actions: [{ action: "catra", parameters: "allow=clockwise" }],
      },
    });
  }

  if (lastPathname === "new_user_id_and_password.fcgi") {
    console.log(request.body);

    let {
      device_id,
      identifier_id,
      password,
      portal_id,
      time,
      user_id,
      user_name,
      uuid,
    } = request.body;

    let userID = parseInt(user_id, 10);
    let porterID = parseInt(portal_id, 10);
    return response.send({
      result: {
        event: 7,
        user_id: userID,
        user_name: user_name,
        user_image: false,
        portal_id: porterID,
        message: "Bem-vindo (a),",
        actions: [{ action: "catra", parameters: "allow=clockwise" }],
      },
    });
  }

  if (lastPathname === "device_is_alive.fcgi") {
    console.log("Devide conectado:", request.body);
    response.sendStatus(200);
    return;
  }

  if (lastPathname === "login.fcgi") {
  }

  if (lastPathname === "remote_user_authorization.fcgi") {
    console.log("remote", request.body);
    let {
      device_id,
      identifier_id,
      password,
      portal_id,
      time,
      user_id,
      user_name,
      uuid,
    } = request.body;
    let userID = parseInt(user_id, 10);
    let porterID = parseInt(portal_id, 10);
    response.sendStatus(200);
    return;
  }

  if (lastPathname === "execute_actions.fcgi") {
  }

  if (lastPathname === "create_objects.fcgi") {
  }
};
