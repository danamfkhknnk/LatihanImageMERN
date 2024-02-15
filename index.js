const express = require("express");
const { connect } = require("./connect");

const app = express();
connect();
app.listen(4000, () => {
  console.log("Started");
});
