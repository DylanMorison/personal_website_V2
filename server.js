const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.all("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});

let PORT = 3000;

app.listen(PORT, () => {
	console.log("Listening on port", PORT);
});
