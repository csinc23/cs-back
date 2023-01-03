const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const configs = require("./config");
const { userRouter, productRouter, categoryRouter } = require("./src/routes");
const authRoute = require("./src/routes/auth");
const bodyParser = require("body-parser");

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://cosadmininc:mPvxH6aMAR2dBjex@cluster0.omsh1c8.mongodb.net/api?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// const multer = require("multer");
// const upload = multer();

mongoose.connect(
  "mongodb+srv://cosadmininc:mPvxH6aMAR2dBjex@cluster0.omsh1c8.mongodb.net/api?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use(express.json());
app.use(cors());

// app.use(
//   bodyParser.json({
//     limit: "500mb",
//     extended: true,
//   })
// );

// app.use(
//   bodyParser.urlencoded({
//     limit: "500mb",
//     parameterLimit: 100000,
//     extended: true,
//   })
// );

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/users", userRouter);
app.use("/api/auth", authRoute);
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);

app.listen(configs.PORT, () => {
  console.log("Backend server is running! on port :", configs.PORT);
});
