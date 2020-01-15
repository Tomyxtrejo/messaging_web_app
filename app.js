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
  console.log("New client connected", socket.id), setInterval(
    () => getApiAndEmit(socket),
    100
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});

// make the getApiAndEmit method
const getApiAndEmit = (socket) => {
  try{
    let x = Math.random()
    socket.emit("FromAPI", socket.id+x)
  } catch (error){
    console.log(error)
  }
}

// Listen to the app
server.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
