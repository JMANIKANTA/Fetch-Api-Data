var express = require("express");
var axios = require("axios");
var stringify = require('json-stringify-safe');
const {Pool} = require("pg");
var conStr = "postgres://fchhltfc:vcyFNRGGWwzAIXdQPiTMXcEXz5nYAYLV@satao.db.elephantsql.com:5432/fchhltfc";
const pool = new Pool({
    connectionString: conStr
});


var app = express()

//Getting Post Data
app.post("/api/gettingPost", function(req, res) {
  axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
          myJSON = stringify(response.data);
          res.send({
              data: myJSON
          });
          insertMarsplayPostData(response);
      })
})
insertMarsplayPostData = function(data) {
  pool.connect(function(err, client, done) {
      for (var i = 0; i < data['data'].length; i++) {
          var userId = data['data'][i].userId;
          var id = data['data'][i].id;
          var title = data['data'][i].title;
          var body = data['data'][i].body;

          client.query('INSERT INTO test_posts(userid,id,title,body) VALUES($1,$2,$3,$4) RETURNING id', [userId, id, title, body])
              .then(data => {})
              .catch(error => {
                  console.log('ERROR:', error);
              });
      }
  });
}

//Getting Comment Data
app.post("/api/gettingComments", function(req, res) {
  axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((commentResponse) => {
          commentJSON = stringify(commentResponse.data);
          res.send({
              data: commentJSON
          });
          insertMarsplayCommentData(commentResponse);
      })
})
insertMarsplayCommentData = function(data) {
  pool.connect(function(err, client, done) {

      for (var i = 0; i < data['data'].length; i++) {
          var postId = data['data'][i].postId;
          var id = data['data'][i].id;
          var name = data['data'][i].name;
          var email = data['data'][i].email;
          var body = data['data'][i].body;
          client.query('INSERT INTO test_comments(postid,id,name,email,body) VALUES($1,$2,$3,$4,$5) RETURNING id', [postId, id, name, email, body])
              .then(data => {})
              .catch(error => {
                  console.log('ERROR:', error);
              });
      }

  });
}

//Getting Albums Data
app.post("/api/gettingAlbums", function(req, res) {
  axios.get("https://jsonplaceholder.typicode.com/albums")
      .then((albumResponse) => {
          albumJSON = stringify(albumResponse.data);
          res.send({
              data: albumJSON
          });
          insertMarsplayAlbumData(albumResponse);
      })
})
insertMarsplayAlbumData = function(data) {
  pool.connect(function(err, client, done) {
      for (var i = 0; i < data['data'].length; i++) {
          var userId = data['data'][i].userId;
          var id = data['data'][i].id;
          var title = data['data'][i].title;
          client.query('INSERT INTO test_albums(userid,id,title) VALUES($1,$2,$3) RETURNING id', [userId, id, title])
              .then(data => {})
              .catch(error => {
                  console.log('ERROR:', error);
              });
      }
  });
}

//Getting Photos Data
app.post("/api/gettingPhotos", function(req, res) {
  axios.get("https://jsonplaceholder.typicode.com/photos")
      .then((photoResponse) => {
          photoJSON = stringify(photoResponse.data);
          res.send({
              data: photoJSON
          });
          insertMarsplayPhotoData(photoResponse);
      })
})
insertMarsplayPhotoData = function(data) {
  pool.connect(function(err, client, done) {
      for (var i = 0; i < data['data'].length; i++) {
          var albumId = data['data'][i].albumId;
          var id = data['data'][i].id;
          var title = data['data'][i].title;
          var url = data['data'][i].url;
          var thumbnailUrl = data['data'][i].thumbnailUrl;
          client.query('INSERT INTO test_photos(albumid,id,title,url,thumbnailUrl) VALUES($1,$2,$3,$4,$5) RETURNING id', [albumId, id, title, url, thumbnailUrl])
              .then(data => {})
              .catch(error => {
                  console.log('ERROR:', error);
              });
      }
  });
}

//Getting Todos Data
app.post("/api/gettingTodos", function(req, res) {
  axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((todoResponse) => {
          todoJSON = stringify(todoResponse.data);
          res.send({
              data: todoJSON
          });
          insertMarsplayTodosData(todoResponse);
      })
})
insertMarsplayTodosData = function(data) {
  pool.connect(function(err, client, done) {
      for (var i = 0; i < data['data'].length; i++) {
          var userId = data['data'][i].userId;
          var id = data['data'][i].id;
          var title = data['data'][i].title;
          var completed = data['data'][i].completed;
          client.query('INSERT INTO test_todos(userid,id,title,completed) VALUES($1,$2,$3,$4) RETURNING id', [userId, id, title, completed])
              .then(data => {})
              .catch(error => {
                  console.log('ERROR:', error);
              });
      }

  });
}

//Getting User Data
app.post("/api/gettingUser", function(req, res) {
  axios.get("https://jsonplaceholder.typicode.com/users")
      .then((userResponse) => {
          userJSON = stringify(userResponse.data);
          res.send({
              data: userJSON
          });
          insertMarsplayUserData(userResponse);
      })
})
insertMarsplayUserData = function(data) {
  pool.connect(function(err, client, done) {
      console.log("Data", data['data'].length);
      for (var i = 0; i < data['data'].length; i++) {
          var name = data['data'][i].name;
          var id = data['data'][i].id;
          var username = data['data'][i].username;
          var website = data['data'][i].website;
          client.query('INSERT INTO test_users(name,id,username,website) VALUES($1,$2,$3,$4) RETURNING id', [name, id, username, website])
              .then(data => {})
              .catch(error => {
                  console.log('ERROR:', error);
              });
      }
  });
}

app.listen(8080, function () {  
  console.log('Example app listening on port 8080!')  
 })