const express = require('express')

const router=express.Router();
const DENZEL_IMDB_ID = 'nm0000243';
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://windneverends:haha123@webtest-atwc1.mongodb.net/test?retryWrites=true&w=majorityconst";
const client = new MongoClient(uri, { useNewUrlParser: true });

router.get('/populate/:id', (req, res) => {
	var id =req.params['id'];
	try{
	client.connect(err => {
		const collection = client.db("movies").collection(id);
		console.log("connected with movies: "+id);
		collection.count({}, function(err, result) {
			if (err) throw err;
			var number = {'Total':result};
			res.json(number);
		});
		
		client.close();
});
    }
	catch(e){
		console.log("error : $(e)");
	}
	
	});

router.get('/', (req, res) => {
		client.connect(err => {
		const collection = client.db("movies").collection("must_watch");
		var a;
		collection.findOne({},function(err, result){
			if (err) throw err;
			
			res.json(result);
		});
		
		client.close();
});
	});
router.get('/search', (req, res) => {
		var limit_number = parseInt(req.query.limit||5);
		var metascore = parseInt(req.query.metascore||0);

		client.connect(err => {
		const collection = client.db("movies").collection(DENZEL_IMDB_ID);
		
		collection.find({metascore:{$gte:metascore}
		}).limit(limit_number).sort({ metascore: -1 }).toArray(function(err, result){
			if (err) throw err;
			res.json(result);
		});
		
		client.close();
});
	});
	
router.get('/:id', (req, res) => {
		client.connect(err => {
		const collection = client.db("movies").collection(DENZEL_IMDB_ID);
		console.log("give the movie id "+req.params['id']);
		collection.find({id:req.params['id']}).toArray(function(err, result){
			if (err) throw err;
			res.json(result);
		});
		
		client.close();
});
	});
	
router.post("/:id",  (req, res) => {
   var id  = req.params['id'];

  const { date, review } = req.body;
  try {
	  client.connect(err => {
		const collection = client.db("movies").collection(DENZEL_IMDB_ID);
		
		collection.findcollection.findOneAndUpdate( {id},
		{ $push: { reviews: { date, review } } },function(err, result){
			if (err) throw err;
			var id = {'_id':result};
			res.json(id);
		});	
        
		client.close();
 }); 
  } catch (e) {
    console.log(e);
  }
});



module.exports=router;
