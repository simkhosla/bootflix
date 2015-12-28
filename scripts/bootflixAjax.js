// ombd api documentation is available here:
// http://www.omdbapi.com/

/**
 * app.getMovieById
 * @param id    - omdb id of the movie you're searching for
 */
app.getMovieById = function getMovieById(id) {

  console.log("app.getMovieById() has been called. An ID of '" + id + "' was entered.");

  console.log("app.getMovieById()" + id + "' was entered.");
   $.ajax({
     url: 'http://www.omdbapi.com/?i='+id+'&plot=full&r=json',
     type: 'GET',
   })
   .done(function(data) {
     console.log("success");
     var movie = new app.MovieModel(data);
     console.log(movie);

     var view = new app.MovieView(movie);
     });


  // request URL for omdb's id search
  // http://www.omdbapi.com/?i=tt0095016&plot=full&r=json

  // 1. create your ajax request and then in your success method.
  // 2. you should create a new MovieModel object based on the returned
  // result.
  // var movie = new app.MovieModel(data);
  // 3. you should create a new MovieView object based on movie model
  // 4. you call render() on the view
  // 5. your render() should append the `$el` to the DOM

}

/**
 * app.getMovieByTitle
 * @param title     - title of the movie you're searching for
 */
app.getMovieByTitle = function getMovieByTitle(title) {


  console.log("app.getMovieByTitle() has been called.  A title of '" + title + "' was entered");
  var changedTitle = title.split(' ').join('+');
   $.ajax({
     url: 'http://www.omdbapi.com/?t='+changedTitle+'&plot=full&r=json',
     type: 'GET',
   })
   .done(function(data) {
     console.log('success');
     var movie = new app.MovieModel(data);
     console.log(movie);
     var view = new app.MovieView(movie);
     });

  // request URL for omdb's title search:
  //http://www.omdbapi.com/?t=Die+Hard&y=1988&plot=full&r=json

  // 1. create your ajax request and then in your success method.
  // 2. you should create a new MovieModel object based on the returned
  // result.
  // var movie = new app.MovieModel(data);
  // 3. you should create a new MovieView object based on movie model
  // 4. you call render() on the view
  // 5. your render() should append the `$el` to the DOM


}


/**
 * app.MovieModel
 * movie model constructor
 * @param options  - options object
 */
app.MovieModel = function MovieModel(options) {

  this.id = options.imdbID;
  this.title = options.Title;
  this.rating = options.imdbRating;
  this.plot = options.Plot;
  this.year = options.Year;
  this.genre = options.Genre;
  this.director = options.Director;
  this.poster = options.Poster;
  // id, title, rating, director, plot, year, genre should all be in the `options` object
  // store all the information in the model

}

/**
 * app.MovieView
 * movie view constructor
 * @param options  - options object
 */
app.MovieView = function MovieView(options) {
  $('#movie-listing').html("");
  $( '#movie-listing' ).prepend("<div class='movie'><table><tr><td><img src='"+options.poster+"'alt='"+options.title+"'></td><td><h3>"+options.title+"</h3><p><strong>Released:</strong>"+options.year+"<br><strong>Directed By:</strong>"+options.director+"<br><em>"+options.genre+"</em></p><p>"+options.plot+"</p></td></tr></table></div>");

  // options should contain the `model` for which the view is using

  // 1. create a view
  // 2. create a render() method
  // 3. render() should a div with a class of '.movie' via string concatenation
  //    you will want to add the id, title, rating, director, plot, year,
  //    and genre. See design/movielayout.html
  // 4. finally, render() will $(selector).append() each new '.movie' to "#movie-listing".

}
