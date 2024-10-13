
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjUxNzQxMDgwMDQ2ZDdmNmUxMzYzNTgxMDUwYzFmZiIsIm5iZiI6MTcyNjg1NzkzNS4xOTY0MTIsInN1YiI6IjY2ZWIwZDg3YjI5MTdlYjE4MDBiY2Q0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KeXdE0ToOYsII6Z_j6ospiWHIcTX5i6LetJHGgg7HfI',
        },
      };

      let page = 1;
      let year = 2024;

      const BASE = 'https://api.themoviedb.org/3';
      const API = `${BASE}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

      function getMovies(APIURL) {
        fetch(APIURL, options)
          .then((response) => response.json())
          .then((response) => {
            showMovies(response);
          })
          .catch((err) => console.error(err));
      }

      getMovies(API);

      const main = document.getElementById('movies-container');
      const IMAGES = 'https://image.tmdb.org/t/p/w500';
      const pageForm = document.getElementById('page');
      const yearForm = document.getElementById('year');
      const psearch = document.getElementById('psearch');
      const ysearch = document.getElementById('ysearch');

      function showMovies(data) {
        main.innerHTML = ''; 
        data.results.forEach((movie, index) => {
          const {
            backdrop_path,
            genre_ids,
            id,
            original_language,
            original_title,
            overview,
            popularity,
            poster_path,
            release_date,
            title,
            video,
            vote_average,
            vote_count,
          } = movie;

          const movieCard = `
            <div class="col-md-4 mb-4 fade-in" style="animation-delay: ${index * 0.1}s;">
              <div class="card movie-card">
                <img
                  src="${IMAGES + poster_path}"
                  alt="${title}"
                  class="card-img-top movie-poster"
                />
                <div class="card-body">
                  <h5 class="movie-title">${title}</h5>
                  <p class="card-text movie-overview">${overview}</p>
                  <span class="badge badge-pill rating-badge">${vote_average.toFixed(
                    1
                  )}/10</span>
                </div>
                <div class="card-footer text-muted">
                  Release date: ${release_date}
                </div>
              </div>
            </div>
          `;

          main.insertAdjacentHTML('beforeend', movieCard);
        });
      }

      yearForm.addEventListener('submit', (e) => {
        e.preventDefault();
        year = ysearch.value;
        if (year && Number(year) > 0) {
          getMovies(
            `${BASE}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&year=${year}`
          );
        }
      });

    //   pageForm.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     page = psearch.value;
    //     if (!page || page == 0) page = 1;
    //     getMovies(
    //       `${BASE}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&year=${year}`
    //     );
    //   });

      //pagination
      document.getElementById('prev-page').addEventListener('click', () => {
        if (page > 1) {
          page--;
          getMovies(
            `${BASE}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&year=${year}`
          );
        }
      });

      document.getElementById('next-page').addEventListener('click', () => {
        page++;
        getMovies(
          `${BASE}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&year=${year}`
        );
      });
    