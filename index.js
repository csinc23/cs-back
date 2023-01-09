const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const configs = require("./config");
const {
  userRouter,
  productRouter,
  categoryRouter,
  saleRouter,
} = require("./src/routes");
const authRoute = require("./src/routes/auth");
const bodyParser = require("body-parser");

mongoose.connect(
  "mongodb+srv://cosuseracc:AUbBxdO3STgd4GYv@cluster0.omsh1c8.mongodb.net/api?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use(express.json());
app.use(cors());

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
app.use("/api/sale", saleRouter);

app.listen(configs.PORT, () => {
  console.log("Backend server is running! on port :", configs.PORT);
});
