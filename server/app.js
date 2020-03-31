const express = require('express')
const app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://windneverends:haha123@webtest-atwc1.mongodb.net/test?retryWrites=true&w=majorityconst";
//const mongoose=require("mongoose");
const Port='9292';
const routeCourses=require("./courses");

app.use("/movies",async routeCourses);

app.get('/', (req, res) => {
		res.send("Welcome~~~");
	});


/*mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});*/
app.listen(Port, function() {
	console.log("App is listening on port "+Port);
	});
	
