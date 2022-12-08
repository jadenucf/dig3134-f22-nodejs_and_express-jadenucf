const express = require("express")
const { getDb, connectToDb } = require("./db")
const { ObjectId } = require("mongodb")

// init app & middleware
const app = express()
app.use(express.json())

// db connection
let db

connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("app listening on port 3000")
    })
    db = getDb()
  }
})

// routes for posts, users, and comments

// Posts

// app.get('/posts', (req, res) => {
//     let posts = []

//     db.collection('posts')
//       .find()
//       .sort({author: 1})
//       .forEach(post => posts.push(post))
//       .then(() => {
//         res.status(200).json(posts)
//       })
//       .catch(() => {
//         res.status(500).json({err: 'Could not fetch the documents'})
//       })
// })

// Gets by most recent
app.get("/posts", (req, res) => {
  db.collection("posts").find().sort({ date: -1 }).toArray((err, posts) => {
    if (err) {
      res.send(err)
      return
    }

    res.send(posts)
  })
})

app.get("/posts/:id", (req, res) => {
  // Get a single post by their ID from the database
  db.collection("posts")
    .find({ _id: ObjectId(req.params.id) })
    .toArray((err, posts) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(posts)
      }
    })
})

app.post("/posts", (req, res) => {
  // Create a new post in the database
  const post = req.body
  db.collection("posts").insertOne(post, (err, result) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result.insertedId)
    }
  })
})

app.put("/posts/:id", (req, res) => {
  // Get a reference to the posts collection
  db.collection("posts") // Find the post with the specified ID and update its data
    .findOneAndUpdate(
      { _id: ObjectId(req.params.id) },
      { $set: req.body },
      (err, result) => {
        if (err) {
          res.send(err)
        } else {
          res.json(result.value)
        }
      }
    )
})

app.delete("/posts/:id", (req, res) => {
  // Delete a post from the database
  db.collection("posts")
    .deleteOne({ _id: new ObjectId(req.params.id) })
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

app.get("/posts/:id", (req, res) => {
  // Get a single post by their ID from the database

  db.collection("posts")
    .find({ _id: ObjectId(req.params.id) })
    .toArray((err, posts) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(posts)
      }
    })
})

app.post("/posts", (req, res) => {
  // Create a new post in the database
  const post = req.body
  db.collection("posts").insertOne(post, (err, result) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result.insertedId)
    }
  })
})

app.put("/posts/:id", (req, res) => {
  // Get a reference to the movies collection
  const posts = db.collection("posts")

  // Find the movie with the specified ID and update its data
  posts.findOneAndUpdate(
    { _id: ObjectId(req.params.id) },
    { $set: req.body },
    (err, result) => {
      if (err) {
        res.send(err)
      } else {
        res.json(result.value)
      }
    }
  )
})

app.delete("/posts/:id", (req, res) => {
  // Delete a post from the database
  db.collection("posts")
    .deleteOne({ _id: new ObjectId(req.params.id) })
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

// users

app.get("/users", (req, res) => {
  // Get all users from the database from most recent
  db.collection("users").find().sort({ date: -1 }).toArray((err, users) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(users)
    }
  })
})

app.get("/users/:id", (req, res) => {
  // Get all users for the specified post from the database

  db.collection("users")
    .find({ _id: ObjectId(req.params.id) })
    .toArray((err, users) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(users)
      }
    })
})

app.post("/users", (req, res) => {
  // Create a new comment in the database
  const comment = req.body
  db.collection("users").insertOne(comment, (err, result) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result.insertedId)
    }
  })
})

app.put("/users/:id", (req, res) => {
  // Update an existing comment in the database
  const id = req.params.id
  const comment = req.body
  db.collection("users").updateOne({ _id: id }, comment, (err, result) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result.modifiedCount)
    }
  })
})

app.delete("/users/:id", (req, res) => {
  // Delete a comment from the database
  const id = req.params.id
  db.collection("users").deleteOne({ _id: id }, (err, result) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result.deletedCount)
    }
  })
})

// Comments

app.get("/comments", (req, res) => {
  // Get all comments from the database
  db.collection("comments").find().sort({ date: -1 }).toArray((err, comments) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(comments)
    }
  })
})

app.get("/comments/:id", (req, res) => {
  // Get all comments for the specified post from the database
  db.collection("comments")
    .find({ _id: ObjectId(req.params.id) })
    .toArray((err, comments) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(comments)
      }
    })
})

app.post("/comments", (req, res) => {
  // Create a new comment in the database
  const comment = req.body
  db.collection("comments").insertOne(comment, (err, result) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result.insertedId)
    }
  })
})

app.put("/comments/:id", (req, res) => {
  // Update an existing comment in the database
  const id = req.params.id
  const comment = req.body
  db.collection("comments").updateOne({ _id: id }, comment, (err, result) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result.modifiedCount)
    }
  })
})

app.delete("/comments/:id", (req, res) => {
  // Delete a comment from the database
  const id = req.params.id
  db.collection("comments").deleteOne({ _id: id }, (err, result) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result.deletedCount)
    }
  })
})
