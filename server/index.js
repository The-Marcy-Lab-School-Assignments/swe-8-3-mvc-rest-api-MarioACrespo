const express = require("express");
const path = require("path");
const app = express();
const fellowController = require("./controllers/fellowControllers");

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/fellows", fellowController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
