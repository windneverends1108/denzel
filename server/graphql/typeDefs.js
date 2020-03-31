const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList
  } = require("graphql");
  
  // defin populate type
  const typePopulate = new GraphQLObjectType({
    name: "typePopulate",
    fields: {
      total: { type: GraphQLInt }
    }
  });
  
  // define review type
  const typeReview= new GraphQLObjectType({
    name: "typeReview",
    fields: {
      date: { type: GraphQLString },
      review: { type: GraphQLString }
    }
  });
  
  // Define Movie Type
  const typeMovie = new GraphQLObjectType({
    name: "Typemovie",
    fields: {
      _id: { type: GraphQLID },
      reviews: { type: new GraphQLList(typeReview) },
      link: { type: GraphQLString },
      id: { type: GraphQLString },
      metascore: { type: GraphQLInt },
      poster: { type: GraphQLString },
      rating: { type: GraphQLFloat },
      synopsis: { type: GraphQLString },
      title: { type: GraphQLString },
      votes: { type: GraphQLFloat },
      year: { type: GraphQLInt }
    }
  });
  
  const typeSearchMovie = new GraphQLObjectType({
    name: "typeSearchMovie",
    fields: {
      limit: { type: GraphQLInt },
      metascore: { type: GraphQLInt },
      results: { type: new GraphQLList(typeMovie) }
    }
  });
  
  const typeMovieId = new GraphQLObjectType({
    name: "typeMovieId",
    fields: {
      _id: { type: GraphQLID }
    }
  });
  
  module.exports = {
    typePopulate,
    typeSearchMovie,
    typeMovie,
    typeMovieId
  };