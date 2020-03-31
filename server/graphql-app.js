const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const cors = require('cors');

const express = require('express');
const helmet = require('helmet');
const Port ='9292';
const uri = "mongodb+srv://windneverends:haha123@webtest-atwc1.mongodb.net/test?retryWrites=true&w=majorityconst";
const graphqlHTTP = require('express-graphql');
const app = express();

app.use(cors({origin: 'http://localhost:9292'}));

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());
app.options('*', cors());

var database;


const {queries} = require('./graphql/query');

const {
    GraphQLSchema,
} = require('graphql');


const schema = new GraphQLSchema({ query: queries });



app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));


app.listen(Port, () => {
    MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        var database = client.db("movies");
        var collection_movies=database.collection("nm0000243")
        //collection_awesome = database.collection("must_watch");
        console.log("App is listening on port "+Port);
    });
});