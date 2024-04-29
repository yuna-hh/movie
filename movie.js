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
    let cards = document.querySelectorAll('.card');
    cards.forEach(card =>{
      card.addEventListener('click', function (event) {
      alert(event.currentTarget.id);
    });
    })
  })
  .catch(err => console.error(err));