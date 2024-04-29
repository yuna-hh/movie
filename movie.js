const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjViZDI3Mzk2NmNhNjU2NmQxNjFkNzcwMmRiNzViZiIsInN1YiI6IjY2MjlmMWE5YmYzMWYyMDA5YWUzMjM4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3HUI8rRwHQ-dl8yqKNiXAl0JXFHxToI0OJ-o6savVSk'
  }
};

// 카드 

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    const movies = response.results;
    let innerHTML = '';

    movies.forEach(movie => {
      console.log('movie', movie);

      //li 불러오기
      innerHTML += `<li id=${movie.id} class="card"><img src=http://image.tmdb.org/t/p/w342${movie.poster_path} alt="movie img"/>
      <div class="rating">
      <span>${movie.title}</span>
      <span>${movie.vote_average}</span>
      <p>${movie.overview}</p>
      </div>
      </li>`
    })
    
    document.querySelector('#card_list').innerHTML = innerHTML;
  })
  .catch(err => console.error(err));
  

  // alert창 

let $cardBtn = document.querySelectorAll('.card');
$cardBtn.forEach(function () {
})
// $cardBtn.addEventListener('click', function (event) {
//   console.log('e', event);
//   console.log('target', event.target);
//   console.log('currentTarget', event.currentTarget);
//   console.log('id', event.target.id);
//   alert(event.target.id);
// });

// let cardBtn = document.querySelectorAll('.card');
// cardBtn.addEventListener('click', function (event) {
//   console.log('e', event);
//   console.log('target', event.target);
//   console.log('currentTarget', event.target);
//   console.log('id', event.target.id);
//   alert(event.target.id);
// })