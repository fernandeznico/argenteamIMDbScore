document.body.style.border = "5px solid blue";

let entryTitles = document.querySelectorAll('.entry-title');

fetch("https://www.google.com/search?q=Ghost%20Stories%20(2018)%20imdb&btnI", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,es-AR;q=0.8,es;q=0.7",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
})
    .then(function(response) {
        entryTitles[1].innerHTML = 'working';
        entryTitles[2].innerHTML = response.url;
        return response.url;
    })
    .then(function(data) {
        entryTitles[3].innerHTML = data;
    })
    .catch(function(err) {
        entryTitles[4].innerHTML = err;
        console.error(err);
    });