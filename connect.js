const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://Dana:PKLProject24@cluster0.trx63pj.mongodb.net/PKL");
    console.log("done");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
