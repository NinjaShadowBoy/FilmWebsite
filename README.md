# Alex Moov Hub (Film Website)

A small movie-browsing website, made with Amine, that lists popular films from
[The Movie Database (TMDB)](https://www.themoviedb.org). Each film appears as an
animated card with its poster, title and details. You can filter by release
year and move between result pages with Previous and Next.

## Tech

- HTML, CSS and vanilla JavaScript
- Bootstrap 4.5 and jQuery from their CDNs
- The TMDB API (`/discover/movie`), called straight from the browser

## Run it

```bash
git clone https://github.com/NinjaShadowBoy/FilmWebsite.git
cd FilmWebsite
```

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000      # then visit http://localhost:8000
```

An internet connection is needed: the films, posters and styles all load from
online services.

### TMDB token

The requests are authorised with a TMDB API read-access token written into
`index.js` (the `Authorization` header in `options`). If films stop loading,
create a free TMDB account, get your own token under
*Settings > API*, and replace the one in `index.js`.

## Files

```
index.html   page layout, year filter and pagination
index.js     TMDB requests and card rendering
styles.css   styles and card animations
```
