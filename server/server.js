import cors from "cors";
import express from "express";
import { getPosts, getlast, getRandom } from "./comic.services.js";
const app = express();
app.use(cors());

app.get("/getLast", async (req, res) => {
  const data = await getlast();
  res.json(data);
});

app.get("/getRandom", async (req, res) => {
  const data = await getRandom();
  res.json(data);
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getPosts(id);
  res.json(data);
});

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});
