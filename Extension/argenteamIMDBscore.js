var moviesInfo = document.querySelectorAll('.movie-info');

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
            const imdbDataText = data['imdbRating'] + ' (' + data['imdbVotes'] + ') ' + data['Genre'] + ' ' + data['Runtime'];
            const imdbDataA = document.createElement('a');
            imdbDataA.className = 'imdb-link';
            imdbDataA.href = 'https://www.imdb.com/title/' + data['imdbID'];
            imdbDataA.innerHTML = imdbDataText;
            moviesInfo[pos].querySelector('.movie-links').prepend(imdbDataA);
        })
        .catch(function(err) {
            console.error(moviesInfo[pos], err);
        });
}

const styleEl = document.createElement('style');
styleEl.textContent = `
  a.imdb-link {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAABZklEQVQ4T52SP0vDUBTFz0v6T0QjVqstaqUq2NZFxVFRRNBNEPwSDn4BnZz8Ag5F144uil0cpA4iDsWh+A+xFsQMFixCaSTm+R43hUiC0PzgcO577+YkeVxm3K3xn88C/KD2rII1rsMclmFvtQkLQPH9sISbYPo5+E0ZGI0Dt09AVKOzWh3IjgHlZ6AzAqRTQKwXyJ8B8zPAxAj1oXgELozvb5NnUiRZ722RS0VC4BeHVOd2wRtXJEVs/EGvkZxsrgDNb6B0T2vTBKo61a6A+hdJdZwkxe9JDBEi2TkAMhvilx89ArxgjNyyyNeXqH558wjQukj/kegnt8SNuAJm0yQnslHS+hInroB4H8nJQ4U8HCJv2qMTDHgEDEZJTk6K5K3LzB2TyzWrFsBPRcNcVrzpFZgap8OKuKBkggZJMhQDpieByxIwPAC8fwALYqCYHAZq8YcCpcMufcCCUNTuRXvVPqq2jF+8329wYlZVeQAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
    background-size: 16px 16px;
    padding-top: 0px;
    padding-right: 6px;
    padding-bottom: 0px;
    padding-left: 20px;
    font-family: auto;
    font-weight: bold;
    font-size: inherit;
    color: rgb(214 162 0);
    white-space: break-spaces;
  }`;
document.head.appendChild(styleEl);
