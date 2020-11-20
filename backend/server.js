require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require('fs');
const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Running on port : ${PORT}`);
});


//db
const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`mongoDB connected`);
    }
  }
);

//middleWares

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

//routes


app.get("/api", (req, res) => {
  res.json({ message: "You have entered API section of the website" });
});

//auto import all the routes.
fs.readdirSync("./routes").map(r=>{
  app.use(`/api/${r.split(".route.js")[0]}`,require('./routes/'+r));
});


