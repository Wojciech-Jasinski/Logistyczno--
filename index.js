const express = require("express");
const app = express();
app.listen(3000, () => console.log("listening on 3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.post("/api", (request, response) => {
  console.log("request from client");
  console.log(request.body);
});
