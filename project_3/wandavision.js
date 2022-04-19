console.log("*elizabeth olsen voice* previously on wandavision!")

fetch('https://api.airtable.com/v0/appGeugv5v8JANFJa/wandavision', {
    headers: {
        Authorization: 'Bearer keyOtukKKZyVwSugv',
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const wandavision = document.querySelector('.wandavision');
        
        data.records.sort((a, b) => a.fields.order - b.fields.order)
        .slice(0, 1)
        .forEach(item => {
            console.log(item);
            wandavision.innerHTML += `
        <video loop muted autoplay class="episode-50s" id="ep-50s" src="${item.fields.episode_videos[0].url}"></video>
            `;
});
    });

// function episodes() {
//     var episodes = document.getElementById('episodes');
//     episodes.style.left = '208px';
//     episodes.style.top = '197px';
//     episodes.style.filter = 'brightness(130%)';
//     var fifties = document.getElementById('ep-50s');
//     fifties.style.visibility = 'visible';
// }

// onclick

function episodes() {
    var episodes = document.getElementById('episodes');
    if (episodes.style.left = '172px') {
        episodes.style.left = '208px'
    }
    else {
        episodes.style.left = '172px';
    }
    episodes.style.filter = 'brightness(130%)';
    var fifties = document.getElementById('ep-50s');
    fifties.style.visibility = 'visible';
}

// onmouseover

function episode() {
    var episodes = document.getElementById('episodes');
    if (episodes.style.left = '208px') {
        episodes.style.left = '172px'
    }
    else {
        episodes.style.left = '208px';
    }
        episodes.style.filter = 'brightness(100%)';
    var fifties = document.getElementById('ep-50s');
    fifties.style.visibility = 'hidden';
}

function characters() {
    var characters = document.getElementById('characters');
    characters.style.left = '200px';
    characters.style.top = '255px';
    characters.style.filter = 'brightness(130%)';
        var episodes = document.getElementById('episodes');
    if (episodes.style.left = '208px') {
        episodes.style.left = '172px'
    }
    else {
        episodes.style.left = '208px';
    }
    episodes.style.filter = 'brightness(100%)';
      var fifties = document.getElementById('ep-50s');
    fifties.style.visibility = 'hidden';
}
