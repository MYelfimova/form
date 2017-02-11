var express = require('express');
var clientController = require('./controllers/clientController');
var app = express();


//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./static'));

//fire controllers
clientController(app);

app.set('port', (process.env.PORT || 3000));
//listen to port
app.listen(app.get('port'), function(){
  console.log("Node app is running on port: " + app.get('port'));
});
