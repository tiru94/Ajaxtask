const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const path = require('path');

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/index', (req, res, next) => {
 

    const filePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath);
  });


  app.get('/api/search', (req, res, next) => {
    var arr = ["abc xyz", "abc efg","abd dhoni"];
  
    res.send(arr);
  });
  



  app.listen(3000, () => {
    console.log("The server is running on port 3000");
  });