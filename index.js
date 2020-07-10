const express = require("express");
const moment = require("moment");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const push = require("./push");
 const monitor = require("./monitor");
const event = require("./event");
const routers = require('./routes')

const app = express();
const port = 5000;

mongoose.connect(
  "mongodb+srv://guugcall:guugcall@controlid.fcq5c.mongodb.net/<dbname>?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.use(routers);

 app.all("/**", (request, response) => {
   console.log(
     "\n--- NEW REQUEST @ " + moment().format("DD/MM/YYYY kk:mm:ss") + " ---"
   );
  //  console.log("Path -> " + request.path);
  //  console.log("Query params -> " + JSON.stringify(request.query));
  //  console.log("Content type -> " + request.get("content-type"));
  //  console.log("Body length -> " + request.get("content-length"));
   event(request, response);
  //push(request, response);
 //monitor(request, response);
});

app.listen(port, () => {
  console.log(`Server started @ ${port}`);
});
