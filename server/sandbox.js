/* eslint-disable no-console, no-process-exit */
const imdb = require('./imdb');
const DENZEL_IMDB_ID = 'nm0000243';
const METASCORE = 77;
const fs = require('fs');
async function start (actor=DENZEL_IMDB_ID, metascore=METASCORE) {
  try {
    console.log(`📽️  fetching filmography of ${actor}...`);
    const movies = await imdb(actor);
    const awesome = movies.filter(movie => movie.metascore >= metascore);
	
	console.log(`🍿 ${movies.length} movies found.`);
    console.log(JSON.stringify(movies, null, 2));
    console.log(`🥇 ${awesome.length} awesome movies found.`);
    console.log(JSON.stringify(awesome, null, 2));
	var jsonData = JSON.stringify(movies,null,8);
	fs.writeFileSync('all_movies_denzel.json',jsonData);
	var jsonData2 = JSON.stringify(awesome,null,8);
	fs.writeFileSync('must_watch.json',jsonData2);
	console.log('Done');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
const [, , id, metascore] = process.argv;
start(id, metascore);





