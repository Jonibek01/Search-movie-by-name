var elMoviesBox = $_('.movies-box');
var elTemplateMovies = $_('#card-movies').content; // ichidagi contentini olish uchun content quyiladi

var createElementMovie = function(movie) {
    // bu template orqali qilish eng kerakli classlarni chaqirib uzgartiriladi asosiylari htmlda
    var elMovie = elTemplateMovies.cloneNode(true); // clonlashtiradi yani docFrag....
    
    elMovie.querySelector('.card-title').textContent = `Title: ${movie.title}`;
    elMovie.querySelector('.card-year').textContent = `Year: ${movie.year}`;
    elMovie.querySelector('.card-genres').textContent =`Genre: ${movie.genres}`;
    elMovie.querySelector('.card-cast').textContent = `Actors: ${movie.cast.join(', ')}`;
    
    return elMovie;

    // bu funksiyaga nimanni solsak shuni qaytarib 
    
    // var createElementMovie = function(movie) {
    // var elMovie = createElementFunc('li', 'movie col-md-3 mb-4');
    
    // var elMovieCard = createElementFunc('div', 'movie-card card border-0 shadow-sm p-4');
    
    // var elMovieCardTitle = createElementFunc('h4', 'card-title h5', `Title: ${movie.title}`);
    
    // var elMovieCardYear = document.createElement('h6');
    // elMovieCardYear.classList.add('card-year');
    // elMovieCardYear.textContent = `Year: ${movie.year}`;
    
    // var elMovieCardGenre = document.createElement('h6');
    // elMovieCardGenre.classList.add('card-genre');
    // elMovieCardGenre.textContent = `Genre: ${movie.genres}`;
    
    // var elMovieCardCast = document.createElement('p');
    // elMovieCardCast.classList.add('card-cast');
    // elMovieCardCast.textContent = `Actors: ${movie.cast.join(', ')}`;
    
    // elMovieCard.appendChild(elMovieCardTitle);
    // elMovieCard.appendChild(elMovieCardYear);
    // elMovieCard.appendChild(elMovieCardGenre);
    // elMovieCard.appendChild(elMovieCardCast);
    
    // elMovie.appendChild(elMovieCard);
}
// for loop orqali chiqarish
// for (var i = 0; i < kinolar.length; i++) {
//     elMoviesBox.appendChild(createElementMovie(kinolar[i]));
    
// }
// yordamchi funksiya bu orqali arrayni hohlaganini topsa boladi masalan slice orqali
    
var renderMovies = function(kinolar) {

    elMoviesBox.innerHTML = '';
    
    var elMoviesWrapperFragment = document.createDocumentFragment()
    
    kinolar.forEach(function(movie){
        elMoviesWrapperFragment.appendChild(createElementMovie(movie));
    })
    
    elMoviesBox.appendChild(elMoviesWrapperFragment);
}
renderMovies(kinolar);




{/* <li class="movie col-md-3">
          <div class="movie-card card border-0 shadow-sm p-4">
            <h4 class="card-title h5">Movie: Small Town Saturday Night</h4>
            <h6 class="card-year">Year: 2010</h6>
            <h6 class="card-genre">Genre: Drama</h6>
            <p class="card-cast">Actors: Chris Pine,
              Shawn Christian,
              John Hawkes,
              Bre Blair,
              Muse Watson,
              Robert Pine, Brent Briscoe
              Lin Shaye</p>
            </div>
        </li> */}