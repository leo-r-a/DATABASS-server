const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");

const path = require("path");
app.use(cors());

app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.send("sup yall");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
