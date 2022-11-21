const express = require("express")
const app = express()
const cors = require("cors")

app.use(
    cors({
        origin: "http://localhost:5500",
    })
)

app.get("/data", (req, res) => {
    
})