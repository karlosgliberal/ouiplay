var express = require("express");
var app = express();

app.use(express.json());
 
app.get('/endpoint', function(req, res){
  var obj = {};
  obj.title = 'title';
  obj.data = 'data';
  
  console.log('params: ' + JSON.stringify(req.params));
  console.log('body: ' + JSON.stringify(req.body));
  console.log('query: ' + JSON.stringify(req.query));
  
  res.header('Content-type','application/json');
  res.header('Charset','utf8');
  res.send(req.query.callback + '('+ JSON.stringify(obj) + ');');
});
 
app.listen(3000);