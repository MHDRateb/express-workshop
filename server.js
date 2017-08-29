const express = require("express");
const app = express();
const formidable = require('express-formidable');
const fs = require('fs');

app.use(express.static("public"));
app.use(formidable());

app.post("/create-post", function (req, res) {
  filePath = __dirname + '/data/posts.json';
  fs.readFile(filePath, function (error, file) {
      const posts = JSON.parse(file);
      posts[Date.now()] = req.fields.blogpost;
      fs.writeFile(filePath, JSON.stringify(posts), function (error) {
          res.send(200, posts);
      });        
  });

});









// app.post("/create-post", function (req, res) {
//   const filePath = __dirname + '/data/posts.json';
//   // console.log(req.fields.blogpost);
//   const postContent = fs.readFileSync(filePath);
//   //  console.log(postContent);
//   const posts = JSON.parse(postContent);
//  // console.log(posts);
//     posts[Date.now()]=req.fields.blogpost;
//   //  //console.log(posts);
//   fs.writeFileSync(filePath,JSON.stringify(posts));
//    res.send(200,posts);

// });

// app.get("/get-posts", function (req, res) {
// res.sendFile(__dirname + '/data/posts.json');

// });


// app.post("/create-post", function (req, res) {
//     console.log('I am /create-post endpoint');
//     console.log(req.fields);
//     res.send(200)
// });

// app.post("/create-post", function (req, res) {
//   const filePath = __dirname+'/data/posts.json';
//   fs.writeFile(filePath,JSON.stringify(req.fields),function(){
//     res.send(200);
//   });
// });


app.listen(process.env.PORT || 3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});