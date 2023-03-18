const express = require("express");
const app = express();
require("dotenv").config();

// middleware
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.static("public"));
// end of middleware

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const projectController = require("./controller/project_controller");

app.use("/project", projectController);

app.listen(process.env.PORT);
