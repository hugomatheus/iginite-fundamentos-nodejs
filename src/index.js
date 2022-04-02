const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  return response.json({message: "Fundamentos NodeJs"});
});

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query); 
});

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
});

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
});

app.patch("/courses/:id", (request, response) => {
});

app.delete("/courses/:id", (request, response) => {
});

app.listen(3333);