const http = require("http");
const vehicles = require("./data.js");
http
  .createServer((req, res) => {
    const path = req.url.toLowerCase();
    const fs = require("fs");
    switch (path) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This is my IT122 Home Page \n The number of items in my array is: " + vehicles.getAll().length);
        break;
      case "/about":
        // const fs = require("fs");
        fs.readFile("about.html", (err, data) => {
          if (err) return console.error(err);
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data.toString());
        });

        //   res.end('Joey\'s about page \n Web Dev Student');
        break;
      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not found");
        break;
    }
  })
  .listen(process.env.PORT || 3000);
