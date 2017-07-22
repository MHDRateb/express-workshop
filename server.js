const express = require("express");
const app = express();
const formidable = require('express-formidable');
const fs = require('fs');

app.use(express.static("public"));
app.use(formidable());

app.post("/create-post", function (req, res) {
  const filePath = __dirname + '/data/posts.json';
  // console.log(req.fields.blogpost);
  const postContent = fs.readFile(filePath);
  //  console.log(postContent);
  const posts = JSON.parse(postContent);
 // console.log(posts);
    posts[Date.now()]=req.fields.blogpost;
  //  //console.log(posts);
  fs.writeFileSync(filePath,JSON.stringify(posts));
  //  res.send(200);


//   const filePath = __dirname + '/data/posts.json';
//   // console.log(req.fields.blogpost);
//   const postContent = fs.readFile(filePath,function(error,filePath){

//   });
//   //  console.log(postContent);
//   const posts = JSON.parse(postContent);
//  // console.log(posts);
//     posts[Date.now()]=req.fields.blogpost;
//   //  //console.log(posts);
//   fs.writeFile(filePath,JSON.stringify(posts),function(error){
    
//   });
  //  res.send(200);

  
});

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


app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});