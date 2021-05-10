const http = require("http");
const contents = require("./loadContent");
const server = http.createServer((req, res) => {
  if (req.url == "/index") {
    res.write(contents.index);
    res.end();
  } else if (req.url == "/about") {
    res.write(contents.about);
    res.end();
  } else if (req.url == "/blog") {
    res.write(contents.blog);
    res.end();
  } else if (req.url == "/contact") {
    res.write(contents.contact);
    res.end();
  } else if (req.url == "/pricing") {
    res.write(contents.price);
    res.end();
  } else if (req.url == "/services") {
    res.write(contents.service);
    res.end();
  } else if (req.url == "/work") {
    res.write(contents.work);
    res.end();
  } else {
    res.write("<h1>Page doesn't exist.</h1><br><a href ='/'>go to base </a>");
    res.end();
  }
});

module.exports = { server };
