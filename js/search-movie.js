// to be easy i renamed all key names of object

var normalizedMovies = movies.map(function(movie, id){ 
    return {
        id: id + 1,
        title: movie.Title.toString(),
        year: movie.movie_year,
        categories: movie.Categories.split('|').join(', '),
        summary: movie.summary,
        imgUrlMaxQuality: `http://i3.ytimg.com/vi/${movie.ytid}/maxresdefault.jpg`,
        imgUrlMinQuality: `http://i3.ytimg.com/vi/${movie.ytid}/hqdefault.jpg`,
        rating: movie.imdb_rating,
        runtime:movie.runtime,
        language: movie.language,
        link: `https://www.youtube.com/watch?v=${movie.ytid}` 
    }
})

// taking the html elements 

var elForm = $_('.js-search-form');
var elInput = $_('.js-search-input', elForm);
var elMoviesList = $_('.js-movies-list');
var elMovieTemplate = $_('#movie-template').content;

// for each movie creates new function

var createNewMovie = function (movie) {

    var newMovie = elMovieTemplate.cloneNode(true);

    $_('.card-title', newMovie).textContent = `${movie.title}`;
    $_('.card-year', newMovie).textContent = `${movie.year}`;
    $_('.card-category', newMovie).textContent = `Categories: ${movie.categories}`;
    $_('.card-summary', newMovie).textContent = `Summary: ${movie.summary}`;
    $_('.card-img', newMovie).src =`${movie.imgUrlMinQuality}`;
    $_('.card-rating', newMovie).textContent = `Rating: ${movie.rating}`;
    $_('.card-runtime', newMovie).textContent = `Runtime: ${movie.runtime}`;
    $_('.card-language', newMovie).textContent = `Lang: ${movie.language}`;
    $_('.card-link', newMovie).href =`${movie.link}`;

    return newMovie;

    // or like this 
    // newMovie.querySelector('.card-title').textContent = `${movie.title}`;
    // newMovie.querySelector('.card-year').textContent = `${movie.year}`;
   

}




var renderMovies = function(normalizedMovies) {

    elMoviesList.innerHTML = '';

    // empty place 
    var elMovieWrapperFragment = document.createDocumentFragment();

    normalizedMovies.forEach(function(movie){
            elMovieWrapperFragment.appendChild(createNewMovie(movie));
    })
    
    // for (var i = 0; i < normalizedMovies.length; i++) {
        
        //     elMovieWrapperFragment.appendChild(createNewMovie(normalizedMovies[i]));
    // }
    
    elMoviesList.appendChild(elMovieWrapperFragment);
}    
// renderMovies(normalizedMovies.slice(0, 100));


var showingForm =  function(evt){
    evt.preventDefault();

    var searchQuery = new RegExp(elInput.value.trim(), 'gi');
    
    var lastResultsOfSearching = normalizedMovies.filter(function(movie){
        return movie.title.match(searchQuery);
    })

    // var lastResult = [];

    // normalizedMovies.forEach(function(movie){
    //     if(movie.title.match(searchQuery)){
    //         lastResult.push(movie)
    //     }
    // })

    if(!lastResultsOfSearching.length) {
        alert("Not found such a movie")
    }

    // var findTheMovieBySearch = normalizedMovies.filter(function(movie){
    //     return movie.title.match(searchQuery);
    // })

    // renderMovies(findTheMovieBySearch);
    
    // return lastResult;

    renderMovies(lastResultsOfSearching);
}

elForm.addEventListener('submit', showingForm);











// ================================================================================
//          for these should need empty array but i prefer map in order to create by easy
// ================================================================================

// movies.forEach(function(movie, id){
//     normalizedMovies.push({
//         id: id + 1,
//         title: movie.Title.toString(),
//         year: movie.movie_year,
//         categories: movie.Categories.split(' | '),
//         summary: movie.summary,
//         rating: movie.imdb_rating,
//         runtime:movie.runtime,
//         language: movie.language,
//         link: `https://www.youtube.com/watch?v=${movie.ytid}` 
//     })
// })

// for (var i = 0; i < movies.length; i++) {
//     normalizedMovies.push({
//         title: movies[i].Title,
//         year: movies[i].movie_year,
//         categories: movies[i].Categories.split('|'),
//         summary: movies[i].summary,
//         rating: movies[i].imdb_rating,
//         runtime: movies[i].runtime,
//         language: movies[i].language,
//         link: movies[i].ytid 
//     })
// }


// ================================================================================
//          the another easiest way of changing the content, src, href....
// ================================================================================
// newMovie.querySelector('.card-title').textContent = movie.title;
//     newMovie.querySelector('.card-year').textContent = movie.year;
//     newMovie.querySelector('.card-category').textContent = movie.categories;
//     newMovie.querySelector('.card-summary').textContent = movie.summary;
//     newMovie.querySelector('.card-rating').textContent = movie.rating;
//     newMovie.querySelector('.card-runtime').textContent = movie.runtime;
//     newMovie.querySelector('.card-language').textContent = movie.language;
//     newMovie.querySelector('.card-link').href = movie.link;




// ================================================================================
//    oldest version of creating li, inner elements, changing class names, contents
// ================================================================================

// in create Function 

    // easy way of showing li
// var newMovie = createElementFunc('li', 'movie col-md-4 mt-3');

// var newMovieCard = createElementFunc('div', 'card p-4');

// var newMovieCardTitle = createElementFunc('h4', 'card-title', movie.title);

// var newMovieCardYear = createElementFunc('p', 'card-year', movie.year);

// var newMovieCardBody = createElementFunc('div', 'card-body');

// var newMovieCardBodySummary = createElementFunc('p', 'card-summary', movie.summary);

// var newMovieCardBodyRating = createElementFunc('p', 'card-rating', movie.rating);

// var newMovieCardBodyRuntime = createElementFunc('p', 'card-runtime', movie.runtime);

// var newMovieCardBodyLanguage = createElementFunc('h6', 'card-language', movie.language);

// var newMovieCardBodyLink = createElementFunc('h6', 'card-link', movie.link);


// newMovieCardBody.appendChild(newMovieCardBodySummary);
// newMovieCardBody.appendChild(newMovieCardBodyRating);
// newMovieCardBody.appendChild(newMovieCardBodyRuntime);
// newMovieCardBody.appendChild(newMovieCardBodyLanguage);
// newMovieCardBody.appendChild(newMovieCardBodyLink);

// newMovieCard.appendChild(newMovieCardTitle)
// newMovieCard.appendChild(newMovieCardYear)
// newMovieCard.appendChild(newMovieCardBody)

// newMovie.appendChild(newMovieCard);

// return newMovie;