const express = require("express")
const fs = require("fs")
const app = express()
const path = require("path")
const data = require("./mockData.json")

app.get("/simpleString", (request, response) => {
  response.send("Hello World")
})
