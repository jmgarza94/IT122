let exphbs = require("express-handlebars"); // should be at top of module

("use strict");
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const vehicles = require("./data.js");
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: false }));
app.set("view engine", "handlebars");

app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname + "/public")); // set location for static files
app.use(bodyParser.urlencoded({ extended: true })); // parse form submissions

// send static file as response
app.get("/", (req, res) => {
  res.render("home", { vehicles: vehicles.getAll() });
});

app.get("/detail", (req, res) => {
  //http://localhost:3000/detail?item=0
  let vehicle=vehicles.getAll()[req.query.item];
  console.log(vehicle);
  res.render("detail", {vehicle: vehicle, item: req.query.item});
});

// send plain text response
app.get("/about", (req, res) => {
  res.type("text/html");
  res.sendFile(__dirname + "/public/about.html");
  // res.type('text/plain');
  // res.send('About page');
});

// define 404 handler
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not found");
});

app.listen(app.get("port"), () => {
  console.log("Express started");
});

// http
//   .createServer((req, res) => {
//     const path = req.url.toLowerCase();
//     const fs = require("fs");
//     switch (path) {
//       case "/":
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("This is my IT122 Home Page \n The number of items in my array is: " + vehicles.getAll().length);
//         break;
//       case "/about":
//         // const fs = require("fs");
//         fs.readFile("about.html", (err, data) => {
//           if (err) return console.error(err);
//           res.writeHead(200, { "Content-Type": "text/html" });
//           res.end(data.toString());
//         });

//         //   res.end('Joey\'s about page \n Web Dev Student');
//         break;
//       default:
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("Not found");
//         break;
//     }
//   })
//   .listen(process.env.PORT || 3000);
