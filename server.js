const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(
  "/.well-known",
  express.static(path.join(__dirname, "public/.well-known"))
);

app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
