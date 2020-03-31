const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://windneverends:haha123@webtest-atwc1.mongodb.net/test?retryWrites=true&w=majorityconst";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
		const collection = client.db("movies").collection('must_watch');
		//const collection = client.db("movies").collection('nm0000243');
		console.log("connected with mongodb");
		var fs = require('fs');
		var movies = JSON.parse(fs.readFileSync('all_movies_denzel.json', 'utf8'));
		var awesome = JSON.parse(fs.readFileSync('must_watch.json', 'utf8'));
		try{
			collection.insertMany(awesome);
			//collection.insertMany(movies);
			}catch(e){
		console.log(e);}
		client.close();
});