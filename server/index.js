const express = require("express");
const cors = require("cors");
const userRoutes = require("./apis/users/userRouters")
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes)


const server = app.listen(process.env.SERVER_PORT,()=>{
  console.log(server.address.name);
console.log(`server started on port ${process.env.SERVER_PORT}`);
});
