const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, this is the home page!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
