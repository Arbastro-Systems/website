const mongoose = require('mongoose');
const production = process.env.PRODUCTION || "development"

function connectDb() {
  if (production === "development") {
    const url = "";

    mongoose.connect(url, {
      useUnifiedTopology: false,
      useFindAndModify: true
    })
  } else if (production === "public") {
    const uri = process.env.MONGO_URI

    mongoose.connect(uri, {
      useUnifiedTopology: true,
      useFindAndModify: true
    })
  }
}

module.exports = {
  connectDb
}
