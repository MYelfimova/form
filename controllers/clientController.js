var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

var mongoose = require('mongoose');
//Connect to database
mongoose.connect('mongodb://marichka:marichka@ds149479.mlab.com:49479/playcoolclients');

//Creating a Schema
var client = new mongoose.Schema({
  lname: String,
  fname: String,
  phone: String,
  email: String,
  time: String
});

//Create a model - this is like modeling a collection with the name of "Todo" and with the datastructure os "todoSchema"
var Client = mongoose.model('Client', client);



module.exports = function(app){

  var requestTime = function (req, res, next) {
    //this var is now accessible in all middleware
    var time = new Date();
    req.requestTime = time.getDate()  + "." + (time.getMonth()+1) + "." + time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes();
    next();
  };
  app.use(requestTime);


  app.get('/', function(req, res){
    console.log("time of new request : " + req.requestTime);
    res.render('index');
  });

  app.post('/', urlencodedParser, function(req, res){
    //getting data from the form fields and add it to the mongodb
    var newClient = Client(req.body).save(function(err, data){
      if(err) throw err;
      res.json(data);
    });
  });

};
