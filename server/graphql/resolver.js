const imdb = require("../imdb");
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://windneverends:haha123@webtest-atwc1.mongodb.net/test?retryWrites=true&w=majorityconst";
const client = new MongoClient(uri, { useNewUrlParser: true });
const DENZEL_IMDB_ID = 'nm0000243';

const Rpopulate = async (_, args) => {
  const { id } = args;
  try {
    const results = await imdb(id);
    return { total: results.length };
  } catch (e) {
    console.log(e);
  }
};

const RrandomMovie = async () => {
  try {
    client.connect(err => {
      const collection = client.db("movies").collection("must_watch");
      collection.findOne({},function(err, result){
        if (err) throw err;
        
        return result;
      });
    
      client.close();
  });
  } catch (e) {
    console.log(e);
  }
};

const Rmovie = async (_, args) => {
  const  id  = args;
  try {
    client.connect(err => {
      const collection = client.db("movies").collection(DENZEL_IMDB_ID);
      console.log("give the movie id "+id);
      collection.find({id:id}).toArray(function(err, result){
        if (err) throw err;
        return result;
      });
	  client.close();
  });
  } catch (e) {
    console.log(e);
  }
};

const RsearchMovie = async (_, args) => {
  try {
    var limit = parseInt(args.limit);
    var metascore = parseInt(args.metascore);
    client.connect(err => {
      const collection = client.db("movies").collection(DENZEL_IMDB_ID);
      
      collection.find({metascore:{$gte:metascore}
      }).limit(limit_number).sort({ metascore: -1 }).toArray(function(err, result){
        if (err) throw err;
        return result;
      });
      
      client.close();
  });
  } catch (e) {
    console.log(e);
  }
};

const RpostReview = async (_, args) => {
  const { id, date, review } = args;
  try {
    client.connect(err => {
      const collection = client.db("movies").collection(DENZEL_IMDB_ID);
      
      collection.findcollection.findOneAndUpdate( {id},
      { $push: { reviews: { date, review } } },function(err, result){
        if (err) throw err;
        var id = {'_id':result};
        return id;
      });	
      client.close();
   }); 
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  Rpopulate,
  RrandomMovie,
  Rmovie,
  RsearchMovie,
  RpostReview
};