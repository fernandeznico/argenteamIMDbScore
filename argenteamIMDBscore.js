var moviesInfo = document.querySelectorAll('.movie-info');

var ICON_URL = "https://www.flaticon.es/svg/static/icons/svg/889/889118.svg"

for(let pos in moviesInfo){
    if(moviesInfo[pos].innerText === undefined) continue;
    filmNameAndYear = moviesInfo[pos].innerText.split('\n')[0].trim()
    filmName = filmNameAndYear.split('(')[0].trim()
    try {
      year = filmNameAndYear.split('(')[1].replace(')', '')
    } catch(err) {
      continue
    }
    url = "https://www.omdbapi.com/?apikey=6d863fde&t=" + filmName + "&y=" + year;
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if('Error' in data) return;
            imdbDataText = data['imdbRating'] + ' (' + data['imdbVotes'] + ') ' + data['Genre'] + ' ' + data['Runtime']
            var imdbDataA = document.createElement('a');
            imdbDataA.href = 'https://www.imdb.com/title/' + data['imdbID']
            imdbDataA.innerHTML = imdbDataText
            imdbDataA.style.background = 'url(' + ICON_URL + ')';
            imdbDataA.style.backgroundRepeat = 'no-repeat';
            imdbDataA.style.backgroundSize = '16px 16px';
            imdbDataA.style.paddingTop = '0px';
            imdbDataA.style.paddingRight = '6px';
            imdbDataA.style.paddingBottom = '0px';
            imdbDataA.style.paddingLeft = '20px';
            imdbDataA.style.fontFamily = 'auto';
            imdbDataA.style.fontWeight = 'bold';
            imdbDataA.style.fontSize = 'inherit';
            imdbDataA.style.color = 'rgb(214 162 0)';
            imdbDataA.style.whiteSpace = 'break-spaces';
            moviesInfo[pos]['childNodes'][3].prepend(imdbDataA)
        })
        .catch(function(err) {
            console.error(moviesInfo[pos]);
        });
}
