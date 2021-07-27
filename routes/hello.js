const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const hello = require("../controllers/hello")
const https = require("https")

router.get("/",hello.hello)


module.exports = router
