let entryTitles = document.querySelectorAll('.entry-title');

for(let pos in entryTitles){
    if(entryTitles[pos].innerText === undefined) continue;
    filmName = entryTitles[pos].innerText.split('(')[0].trim()
    try {
      year = entryTitles[pos].innerText.split('(')[1].replace(')', '')
    } catch(err) {
      continue
    }
    url = "http://www.omdbapi.com/?apikey=6d863fde&t=" + filmName + "&y=" + year;
    console.log(entryTitles[pos].innerText);
    console.log(url);
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if('Error' in data) return;
            entryTitles[pos].innerHTML += ' ' + data['imdbRating'];
        })
        .catch(function(err) {
            console.error(err);
        });
}
