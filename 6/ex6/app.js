const express = require("express")
const fs = require("fs")
const app = express()
const path = require("path")
const data = require("./mockData.json")

// console.log(data)

app.use(express.json())
// TODO: Ex-6 Implement the routes here
module.exports = app

app.get("/simpleString", (request, response) => {
  response.send("Hello World")
})

app.delete("/myAccount", (request, response) => {
  response.send("Deleted")
})

app.post("/newComment", (request, response) => {
  response.send("Posted")
})

app.get("/data", (request, response) => {
  response.json(data)
})

app.get("/data/:id", (request, response) => {
  const someId = Number(request.params.id)
  const getId = data.filter((data) => data.id === someId)
  response.json(...getId)
})
