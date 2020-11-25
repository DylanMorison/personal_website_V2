const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.static("css"));
app.use(express.static("js"));

app.all("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log("Listening on port", port);
});
