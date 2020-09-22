const express = require("express")
const server = express()
const nunjucks = require("nunjucks")

const pages = {
    landing: (req, res) => {
        return res.render("index.html")
    }
}

nunjucks.configure('src/views/', {
    express: server,
    noCache: true
})

server
.use(express.static("public"))

.get("/", pages.landing)

.listen(5500)