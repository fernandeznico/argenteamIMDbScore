let moviesInfo = document.querySelectorAll('.movie-info');

for(let pos in moviesInfo){
    if(moviesInfo[pos].innerText === undefined) continue;
    filmNameAndYear = moviesInfo[pos].innerText.split('\n')[0].trim()
    filmName = filmNameAndYear.split('(')[0].trim()
    try {
      year = filmNameAndYear.split('(')[1].replace(')', '')
    } catch(err) {
      continue
    }
    url = "http://www.omdbapi.com/?apikey=6d863fde&t=" + filmName + "&y=" + year;
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if('Error' in data) return;
            imdbData = data['imdbRating'] + ' (' + data['imdbVotes'] + ') ' + data['Genre'] + ' ' + data['Runtime']
            moviesInfo[pos]['childNodes'][3].prepend(imdbData)
        })
        .catch(function(err) {
            console.error(moviesInfo[pos]);
        });
}
