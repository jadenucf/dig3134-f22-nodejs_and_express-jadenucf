import express from "express"
import path from "path"
import fs from "fs"

import posts from "./data/posts.json" assert {type: 'json'}
const app = express()

const PORT = 3000

app.use(express.urlencoded({ extended: true }))


//GET POSTS
app.get("/posts", (request, response) => {
  //sends the entire array
  response.send(posts)
})

//GET ID PARAMETER
app.get("/posts/:postId", (request, response) => {
  //finds the specific postid then shares the post
  const getId = Number(request.params.postId)
  let id = posts.filter((post) => post.postId === getId)

  response.send(...id)
})

//GET AUTHOR PARAMETER
app.get("/posts/author/:author", (request, response) => {
  //find all the comments posted by a specific author
  const getAuthor = request.params.author
  const author = posts.filter((post) => post.author === getAuthor )
  response.send(author)
})



//POST JSON OBJECT
app.post("/posts", (request, response) => {
  //creates a new post and sends it to the main array
  posts.push(request.body)
  response.send('sent')
})



//DELETE
app.delete("/delete/:postId", (request, response) => {
  //deletes a post from the main array
  const getId = Number(request.params.postId)
  let index = posts.findIndex((post) => post.postId === getId)
  posts.splice(index, 1)
  response.send(posts)
})



//POST COMMENT ID
//creates a comment a person posted within the comment array
app.post("/posts/:postId/comments/", (request, response) => {
  const getId = Number(request.params.postId)
  let id = posts.filter((post) => post.postId === getId)

  const getCommentId = (request.params.postId)
  id[0].comments.push(request.body)
  response.send('sent')
  
})



//GET COMMENTS ARRAY FROM SPECIFIC POSTER
//displays all the comment the poster has posted
app.get("/posts/:postId/comment/", (request, response) => {
  const getId = Number(request.params.postId)
  let id = posts.filter((post) => post.postId === getId)
  response.send(id[0].comments)
})



//DELETES A COMMENT FROM AN OBJECT 
//deletes a comment from a poster
app.delete("/posts/:postId/comment/:id", (request, response) => {
  const getId = Number(request.params.postId)
  const commentId = request.params.postId

  let id = posts.filter((post) => post.postId === getId)

  let index = id[0].comments.findIndex((comment) => comment.commentId === commentId)
  id[0].comments.splice(index, 1)
  response.send(id)
})


// ----------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}!`)
  //console.log(posts)
})
