import express from "express"
import { data } from "./data/MOCK_DATA.json"
const app = express()

const PORT = 3000

app.get("/", (request, response) => {
  response.json(data)
})

app.post("/create", (request, response) => {
  response.send("post request at create :3.")
})

app.put("/edit", (request, response) => {
  response.send("put request at edit.")
})

app.delete("/delete", (request, response) => {
  response.send("delete request at delete.")
})

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}!`)
  console.log(data)
})
