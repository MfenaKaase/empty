// start
window.addEventListener('DOMContentLoaded', start);

function start() {
    let form = document.querySelector('form');

    form.addEventListener('submit', searchMovie);
}

function searchMovie(evt) {
    const API_KEY = '6219ba73400a0f2f9dbbce36657971e4'
    evt.preventDefault();
    let movieName = document.querySelector('input').value;
    console.log(movieName);

    fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${API_KEY}`)
        .then(response => response.json())
        .then(movies => displayResults(movies.results))

}

function displayResults(movies) {
    console.log(movies)
    document.querySelector('.movies').innerHTML = ''
    for (let i = 0; i < movies.length; i++) {
        document.querySelector('.movies').innerHTML += `<div class="movie">
                    <img src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" alt="">
                    <h2>${movies[i].title}</h2>
                    <p>${movies[i].release_date.split('-')[0]}</p>
                </div>`

        console.log(movies[i].title)
    }
}