const http = require('http')  // node js inbuilt function
const fs = require('fs');

const PORT = 5000;

const app = http.createServer(
    (req, res) => {
        let code = fs.readFileSync("public/404.html", "utf-8");
        res.statusCode = 404;
        if (req.url == "/") {
            code = fs.readFileSync("public/index.html", "utf-8");
            res.statusCode = 200;
        } else if (req.url == "/about") {
            code = fs.readFileSync("public/about.html", "utf-8");
            res.statusCode = 200;
        } else if (req.url == "/gallery" && req.method == "GET") {
            code = fs.readFileSync("public/gallery.html", "utf-8");
            res.statusCode = 200;
        } else if (req.url == "/blog-data" && req.method == "POST") {
            code = fs.readFileSync("data/blog.json", "utf-8");
            res.statusCode = 200;
        }
        res.end(code);

    }
)

app.listen(PORT, () => {
    console.log('server started');
})