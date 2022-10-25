const request = require("supertest")
const fs = require("fs")
const app = require("./app")
const path = require("path")
const { randomInt } = require("crypto")
describe("6-1", () => {
  it("6-1.1 '/simpleString'", () => {
    return request(app)
      .get("/simpleString")
      .expect("Content-Type", /text/)
      .expect(200)
      .then((response) => {
        expect(response.text).toMatch("Hello World")
      })
  })

  it("6-1.2 '/myAccount'", () => {
    return request(app)
      .delete("/myAccount")
      .expect("Content-Type", /text/)
      .expect(200)
      .then((response) => {
        expect(response.text).toMatch("Deleted")
      })
  })
  it("6-1.3 '/newComment'", () => {
    return request(app)
      .post("/newComment")
      .expect(200)
      .then((response) => {
        expect(response.text).toMatch("Posted")
      })
  })
})

describe("6-2", () => {
  it("6-2.1 '/data'", () => {
    const data = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "mockData.json"))
    )
    return request(app)
      .get("/data")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(data)
      })
  })
  it("6-2.2 '/data/[id]'", () => {
    const data = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "mockData.json"))
    )
    const itemNum = randomInt(data.length)
    const item = data.find((item) => item.id === itemNum)
    return request(app)
      .get("/data/" + itemNum)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(item)
      })
  })
})
