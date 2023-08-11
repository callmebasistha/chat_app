const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes");

//cors config
let corsOption = {
  origin: "http://localhost:3000",
};
//middileware
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route configs
//test
app.get("/", (req, res) => {
  res.json({ message: "response from server" });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server started on port ${process.env.SERVER_PORT}`);
});
app.use("/api", router);
console.log("router initiated");
