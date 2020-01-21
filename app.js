const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Bring in Users route
const users = require("./routes/api/users");

// bring in database connection keys
const keys = require("./config/keys");

// Initialise express app
const app = require("express")();
// Initialise socket.io
const server = require("http").Server(app);
const io = require("socket.io")(server);

// Add body-parser middleware to get body details
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Home route
app.get("/", (req, res) => {
  res.json("jajja");
});

// New connection
io.on("connection", socket => {
  console.log("New client connected", socket.id),
    setInterval(() => getApiAndEmit(socket), 100);
  socket.on("disconnect", () => console.log("Client disconnected"));
});

// make the getApiAndEmit method
const getApiAndEmit = socket => {
  try {
    let x = Math.random();
    socket.emit("FromAPI", socket.id + x);
  } catch (error) {
    console.log(error);
  }
};

// Establish a database connection
const db = keys.mongoURI;
mongoose
  .connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(res => {
    console.log("Database connected successfully!");
  })
  .catch(error => {
    console.log(error);
  });

// Call routes
app.use("/api/users", users);

// Initialise Port number
const port = process.env.PORT || 5009;

// Listen to the app
server.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
