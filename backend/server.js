var express = require('express'),
    port = process.env.PORT || 3000;
    mongoose = require('mongoose'),
    Task = require('./models/projectModel'),
    bodyParser = require('body-parser');

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.Promise = global.Promise;
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
console.log('Dude wait!');
sleep(10000);
mongoose.connect('mongodb://jmejiao5:fsfRAJ87@172.31.87.47:27017/project01', { useNewUrlParser: true }).then(() => {
    console.log("Connected to Database");
    }).catch((err) => {
        console.error("Not Connected to Database ERROR! ");
        console.error(err);
    });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/projectRoutes');
routes(app);

app.listen(3000,function() {});

console.log('RESTful API server started on: ' + port);
