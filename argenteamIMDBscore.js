document.body.style.border = "5px solid blue";

let entryTitles = document.querySelectorAll('.entry-title');

for(let pos in entryTitles){
    if(entryTitles[pos] === undefined) continue;
    url = "https://www.imdb.com/find?s=tt&q=" + entryTitles[pos].innerText.replaceAll(' ', '%20') + "&ref_=nv_sr_sm";
    console.log(entryTitles[pos].innerText);
    console.log(url);
    fetch(url)
        .then(function(response) {
            return response;
        })
        .then(function(data) {
            //entryTitles[pos].innerHTML = data;
            console.log(data);
        })
        .catch(function(err) {
            console.error(err);
        });
}
