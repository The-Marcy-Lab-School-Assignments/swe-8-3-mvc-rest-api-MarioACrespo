const express = require("express");
const app = express();
const fellowController = require("./controllers/fellowControllers");

app.use(express.json());
app.use("/api/fellows", fellowController);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
