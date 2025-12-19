const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/tasks", (req, res) => {
  res.json([
    { id: 1, title: "Study", status: "pending" },
    { id: 2, title: "FocusFlow Project", status: "done" }
  ]);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
