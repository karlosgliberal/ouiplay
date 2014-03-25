var express = require("express");
var nodemailer = require("nodemailer");
var app = express();

app.use(express.json());
 
app.get('/ouiplay', function(req, res){
  var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "",
        pass: ""
    }
  });
  var obj = {};
  obj.title = 'title';
  obj.data = 'data';

  console.log('query: ' + JSON.stringify(req.query));
  
  res.header('Content-type','application/json');
  res.header('Charset','utf8');
  res.send(req.query.callback + '('+ JSON.stringify(obj) + ');');

  var mailOptions = {
    from: JSON.stringify(req.query['email']), // sender address
    to: "karlosgliberal@gmail.com",
    subject: "[Formulario ouiplay] " + JSON.stringify(req.query['name']),
    text: JSON.stringify(req.query['message']),
  }

  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
      console.log(error);
    }else{
      console.log("Message sent: " + response.message);
    }
  });
});
 
app.listen(3000);