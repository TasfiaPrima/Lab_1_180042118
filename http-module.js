const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("<h1>this is base url.</h1>");
    res.end();
  } else if (req.url == "/home") {
    res.write("<h1>this is home page.</h1>");
    res.end();
  } else {
    res.write(
      "<h1>this page doesnt exist.</h1><br><a href ='/'>go to base </a>"
    );
    res.end();
  }

  //   res.writeHead(201, { "content-Type": "text/html" });
  //   res.write("<h1>hello</h1>");
  //   res.end();
});

//server.listen(7777);

module.exports = { server };
