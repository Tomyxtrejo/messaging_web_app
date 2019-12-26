const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

// Initialise express app
const app = require("express")();
// Initialise socket.io
const server = require("http").Server(app);
const io = require("socket.io")(server);

// Initialise Port number
const port = process.env.PORT || 5009;

app.get("/", (req, res) => {
  res.json("jajja");
});

// New connection
io.on("connection", socket => {
  console.log("New connection!!", socket.id);
  // socket.emit("news", { hello: "world" });
  // socket.on("my other event", data => {
  //   console.log(data);
  // });
  socket.on("disconnect", () => {
    console.log("User had left!");
  });
});

// Listen to the app
server.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
