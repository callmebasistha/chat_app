const express = require("express");
const cors = require("cors");
const userRoutes = require("./apis/users/userRouters")
const app = express();
const router = require("./routes");
const db = require("./models");

//cors config
// sequelize config
db.sequelize.sync({ force: false, logging: console.log }).then(() => {
  app.listen(3002, () => {
    console.log(`server started on port ${3002}`);
  });
});
let corsOption = {
  // origin: "http://chat.bigyankharel.com.np",
  origin: "http://localhost:3000",
};
//middileware
app.use(cors(corsOption));
app.use(express.json());
// app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoutes)


const server = app.listen(process.env.SERVER_PORT,()=>{
  console.log(server.address.name);
console.log(`server started on port ${process.env.SERVER_PORT}`);
});
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });
app.use("/api", router);

console.log("router initiated");
