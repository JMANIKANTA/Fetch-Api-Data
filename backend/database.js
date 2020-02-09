
var { Pool } = require("pg");
var conStr = "postgres://fchhltfc:vcyFNRGGWwzAIXdQPiTMXcEXz5nYAYLV@satao.db.elephantsql.com:5432/fchhltfc";
var pool = new Pool({
    connectionString: conStr
});
pool.query("CREATE TABLE test_posts (userId INT NOT NULL, id INT NOT NULL, title VARCHAR(500) NOT NULL, body VARCHAR(500) NOT NULL);",(res,req)=>{
    console.log("Post Table");
})
pool.query("CREATE TABLE test_comments (postId INT NOT NULL, id INT NOT NULL, name VARCHAR(500) NOT NULL, email VARCHAR(500) NOT NULL, body VARCHAR(500) NOT NULL);",(res,req)=>{
    console.log("Comments Table");
  })
pool.query("CREATE TABLE test_albums (userId INT NOT NULL, id INT NOT NULL, title VARCHAR(500) NOT NULL);",(res,req)=>{
    console.log("Albums Table");
  })
pool.query("CREATE TABLE test_photos (albumId INT NOT NULL, id INT NOT NULL, title VARCHAR(500) NOT NULL, url VARCHAR(500) NOT NULL, thumbnailUrl VARCHAR(500) NOT NULL);",(res,req)=>{
    console.log("Photos Table");
  })
pool.query("CREATE TABLE test_todos (userId INT NOT NULL, id INT NOT NULL, title VARCHAR(500) NOT NULL, completed VARCHAR(500) NOT NULL);",(res,req)=>{ 
    console.log("Todos Table");
  })
pool.query("CREATE TABLE test_users (id INT NOT NULL,  name VARCHAR(500) NOT NULL, username VARCHAR(500) NOT NULL, website VARCHAR(500) NOT NULL);",(res,req)=>{
    console.log("User Table");   
  }) 


