let exphbs = require("express-handlebars"); // should be at top of module

("use strict");
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const Cars = require("./models/carsdb.js");
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: false }));
app.set("view engine", "handlebars");

app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname + "/public")); // set location for static files
app.use(bodyParser.urlencoded({ extended: true })); // parse form submissions
app.use(bodyParser.json());

app.use("/api", require("cors")()); // set Access-Control-Allow-Origin header for api route

app.get("/", (req, res) => {
  return Cars.find({})
    .lean()
    .then((vehicles) => {
      res.render("home", { vehicles });
    })
    .catch((err) => next(err));
});

app.get("/detail", (req, res) => {
  //http://localhost:3000/detail?item=0
  Cars.findOne({ ID: req.query.item })
    .lean()
    .then((vehicle) => {
      res.render("detail", { vehicle: vehicle, item: req.query.item });
    })
    .catch((err) => next(err));
});

app.get("/api/cars", (req, res) => {
  //http://localhost:3000/api/cars
  Cars.find({})
    .lean()
    .then((vehicles) => {
      res.json(vehicles);
    })
    .catch((err) => res.status(500).send("Error occurred: database error."));
});

app.get("/api/cars/:vin", (req, res) => {
  //http://localhost:3000/api/cars/2
  const vin = req.params["vin"];
  Cars.findOne({ ID: vin})
    .lean()
    .then((vehicle) => {
      res.json(vehicle);
    })
    .catch((err) => res.status(500).send("Error occurred: database error."));
});

app.delete("/api/cars/:vin", (req, res) => {
  //http://localhost:3000/api/cars/2
  const vin = req.params["vin"];
  Cars.findOneAndDelete({ ID: vin})
    .lean()
    .then((vehicle) => {
      // res.json(vehicle);
      res.status(200).send();
    })
    .catch((err) => res.status(500).send("Error occurred: database error."));
});

app.post("/api/cars", (req, res) => {
  const vehicle = req.body;
  var v1 = new Cars(vehicle);
  console.log(vehicle);
  v1.save(function (err, vehicle) {
    if (err) return console.error(err);
    console.log(vehicle.ID + " saved to vehicle database.");
  });
  res.status(200).send(req.body);
});


app.get("/delete", (req, res) => {
  //http://localhost:3000/delete?item=0
  Cars.findOneAndDelete({ ID: req.query.item }, function (err, result) {
    if (err) {
      res.send("ERROR" + err);
    } else {
      console.log("success");
      res.render("delete", { item: req.query.item });
    }
  });
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
