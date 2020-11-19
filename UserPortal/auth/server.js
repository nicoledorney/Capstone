const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./DB');
const userRoute = require('./routes/UserRoute');

const PORT = process.env.PORT || 5001;

var url = "mongodb://localhost:27017/mydb";

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(config.DB).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
);

//Database Connection with avoid warning properties 
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let corsOptions = {
  origin: ['http://localhost:4200', 'http://localhost:4300'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
var Product = require("./routes/product.router.js");
var Company = require("./routes/companyRoute.js");
const User = require('./routes/userRoute.js');

app.use(cors(corsOptions))
app.use('/api/users', userRoute);
require('./routes/companyRoute.js')(app);
//require('./routes/UserRoute.js')(app);
//require('./routes/product.router.js')(app);
app.use('/product',Product); 
app.use('/api',Company);
//app.use('./api/users', User)

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});