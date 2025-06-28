const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/userRoutes");

const app = express();

// Middleware
// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies (meaning form submissions)
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Routes
app.use("/api/v1/user", userRouter);

module.exports = app;
