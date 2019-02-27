var http=require('http'),  
    https = require('https'),
    express = require('express'),
     fs = require('fs');

var options = {  
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

// var passport = require('passport')
//   , FacebookStrategy = require('passport-facebook').Strategy;

// passport.use(new FacebookStrategy({
//     clientID: "595064647565644",
//     clientSecret: "54ea5eae609f169faec50003b60422ed",
//     callbackURL: "https://localhost/"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     console.log("user login")
//     console.log(`accessToken = ${accessToken} , refreshToken = ${refreshToken}`)
//     done(null, user)
//   }
// ));





var port1 = 80;  
var port2 = 443;

var app = express();  
app.use(express.urlencoded());
app.use(express.static('public'));

http.createServer(app).listen(port1, function(){  
  console.log("Http server listening on port " + port1);
});


https.createServer(options, app).listen(port2, function(){  
  console.log("Https server listening on port " + port2);
});


// app.get('/login', function (req, res){  
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<h3>Login</h3>');
//     res.write('<form method="POST" action="/login">');
//     res.write('<label name="userId">UserId : </label>')
//     res.write('<input type="text" name="userId"><br/>');
//     res.write('<label name="password">Password : </label>')
//     res.write('<input type="password" name="password"><br/>');
//     res.write('<input type="submit" name="login" value="Login">');
//     res.write('</form>');
//     res.end();
// })

// app.post('/login', function (req, res){  
//     var userId = req.param("userId");
//     var password = req.param("password")

//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('Thank you, '+userId+', you are now logged in.');
//     res.write(`your password : ${password} `);
//     res.write('<p><a href="/"> back home</a>');
//     res.end();
// });