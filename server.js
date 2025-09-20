const express = require("express");
const path = require("path");
const app = express();

// Serve normal static files (index.html, css, etc.)
app.use(express.static(path.join(__dirname, "public")));

// ✅ Explicitly serve the .well-known folder
app.use(
  "/.well-known",
  express.static(path.join(__dirname, "public/.well-known"))
);

// Start server
app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
