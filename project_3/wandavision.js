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
        <video loop muted autoplay class="episode-screen" id="ep-50s" src="${item.fields.episode_videos[0].url}"></video>
            `;
            }
        ,data.records.sort((a, b) => a.fields.order - b.fields.order)
            .slice(1, 2)
            .forEach(item => {
                console.log(item);
                wandavision.innerHTML += `
        <video loop muted autoplay class="episode-screen" id="ep-60s" src="${item.fields.episode_videos[0].url}"></video>
            `;
            }
        ,data.records.sort((a, b) => a.fields.order - b.fields.order)
            .slice(2, 3)
            .forEach(item => {
                console.log(item);
                wandavision.innerHTML += `
        <video loop muted autoplay class="episode-screen" id="ep-70s" src="${item.fields.episode_videos[0].url}"></video>
            `;
            }
        )));
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
    var characters = document.getElementById('characters');
    characters.style.left = '173px';
    characters.style.top = '260px';
    characters.style.filter = 'brightness(100%)';
    episodes.style.filter = 'brightness(130%)';
    var fifties = document.getElementById('ep-50s');
    fifties.style.visibility = 'visible';
    var sixties = document.getElementById('ep-60s');
    sixties.style.visibility = 'visible';
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
    var sixties = document.getElementById('ep-60s');
    sixties.style.visibility = 'hidden';
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

function character() {
   var characters = document.getElementById('characters');
    characters.style.left = '173px';
    characters.style.top = '260px';
    characters.style.filter = 'brightness(100%)';
}

function musics() {
    var music = document.getElementById('music');
    music.style.left = '199px';
    music.style.top = '320px';
    music.style.filter = 'brightness(130%)';
        var episodes = document.getElementById('episodes');
    if (episodes.style.left = '208px') {
        episodes.style.left = '172px'
    }
    else {
        episodes.style.left = '208px';
    }
    var characters = document.getElementById('characters');
    characters.style.left = '173px';
    characters.style.top = '260px';
    characters.style.filter = 'brightness(100%)';
    episodes.style.filter = 'brightness(100%)';
      var fifties = document.getElementById('ep-50s');
    fifties.style.visibility = 'hidden';
}

function music() {
   var music = document.getElementById('music');
    music.style.left = '170px';
    music.style.top = '322px';
    music.style.filter = 'brightness(100%)';
}

function locations() {
    var location = document.getElementById('locations');
    location.style.left = '201px';
    location.style.top = '378px';
    location.style.filter = 'brightness(130%)';
        var episodes = document.getElementById('episodes');
    if (episodes.style.left = '208px') {
        episodes.style.left = '172px'
    }
    else {
        episodes.style.left = '208px';
    }
    var characters = document.getElementById('characters');
    characters.style.left = '173px';
    characters.style.top = '260px';
    characters.style.filter = 'brightness(100%)';
    episodes.style.filter = 'brightness(100%)';
      var fifties = document.getElementById('ep-50s');
    fifties.style.visibility = 'hidden';
}

function locate() {
   var location = document.getElementById('locations');
    location.style.left = '171px';
    location.style.top = '378px';
    location.style.filter = 'brightness(100%)';
}

function costumes() {
    var costumes = document.getElementById('costumes');
    costumes.style.left = '203px';
    costumes.style.top = '439px';
    costumes.style.filter = 'brightness(130%)';
        var episodes = document.getElementById('episodes');
    if (episodes.style.left = '208px') {
        episodes.style.left = '172px'
    }
    else {
        episodes.style.left = '208px';
    }
    var characters = document.getElementById('characters');
    characters.style.left = '173px';
    characters.style.top = '260px';
    characters.style.filter = 'brightness(100%)';
    episodes.style.filter = 'brightness(100%)';
      var fifties = document.getElementById('ep-50s');
    fifties.style.visibility = 'hidden';
}

function costume() {
   var costumes = document.getElementById('costumes');
    costumes.style.left = '173px';
    costumes.style.top = '438px';
    costumes.style.filter = 'brightness(100%)';
}

function iconicmoments() {
    var iconic = document.getElementById('iconic');
    iconic.style.left = '203px';
    iconic.style.top = '499px';
    iconic.style.filter = 'brightness(130%)';
        var episodes = document.getElementById('episodes');
    if (episodes.style.left = '208px') {
        episodes.style.left = '172px'
    }
    else {
        episodes.style.left = '208px';
    }
    var characters = document.getElementById('characters');
    characters.style.left = '173px';
    characters.style.top = '260px';
    characters.style.filter = 'brightness(100%)';
    episodes.style.filter = 'brightness(100%)';
      var fifties = document.getElementById('ep-50s');
    fifties.style.visibility = 'hidden';
}

function iconic() {
   var iconic = document.getElementById('iconic');
    iconic.style.left = '172px';
    iconic.style.top = '499px';
    iconic.style.filter = 'brightness(100%)';
}

function magics() {
    var magic = document.getElementById('magic');
    magic.style.left = '203px';
    magic.style.top = '555px';
    magic.style.filter = 'brightness(130%)';
        var episodes = document.getElementById('episodes');
    if (episodes.style.left = '208px') {
        episodes.style.left = '172px'
    }
    else {
        episodes.style.left = '208px';
    }
    var characters = document.getElementById('characters');
    characters.style.left = '173px';
    characters.style.top = '260px';
    characters.style.filter = 'brightness(100%)';
    episodes.style.filter = 'brightness(100%)';
      var fifties = document.getElementById('ep-50s');
    fifties.style.visibility = 'hidden';
}

function magic() {
   var magic = document.getElementById('magic');
    magic.style.left = '172px';
    magic.style.top = '555px';
    magic.style.filter = 'brightness(100%)';
}

function trailers() {
    var trailers = document.getElementById('trailers');
    trailers.style.left = '205px';
    trailers.style.top = '617px';
    trailers.style.filter = 'brightness(130%)';
        var episodes = document.getElementById('episodes');
    if (episodes.style.left = '208px') {
        episodes.style.left = '172px'
    }
    else {
        episodes.style.left = '208px';
    }
    var characters = document.getElementById('characters');
    characters.style.left = '173px';
    characters.style.top = '260px';
    characters.style.filter = 'brightness(100%)';
    episodes.style.filter = 'brightness(100%)';
      var fifties = document.getElementById('ep-50s');
    fifties.style.visibility = 'hidden';
}

function trailer() {
   var trailers = document.getElementById('trailers');
    trailers.style.left = '174px';
    trailers.style.top = '616px';
    trailers.style.filter = 'brightness(100%)';
}

function easters() {
    var easter = document.getElementById('easter');
    easter.style.left = '205px';
    easter.style.top = '685px';
    easter.style.filter = 'brightness(130%)';
        var episodes = document.getElementById('episodes');
    if (episodes.style.left = '208px') {
        episodes.style.left = '172px'
    }
    else {
        episodes.style.left = '208px';
    }
    var characters = document.getElementById('characters');
    characters.style.left = '173px';
    characters.style.top = '260px';
    characters.style.filter = 'brightness(100%)';
    episodes.style.filter = 'brightness(100%)';
      var fifties = document.getElementById('ep-50s');
    fifties.style.visibility = 'hidden';
}

function easter() {
   var easter = document.getElementById('easter');
    easter.style.left = '176px';
    easter.style.top = '680px';
    easter.style.filter = 'brightness(100%)';
}

function inspos() {
    var inspo = document.getElementById('inspo');
    inspo.style.left = '205px';
    inspo.style.top = '750px';
    inspo.style.filter = 'brightness(130%)';
        var episodes = document.getElementById('episodes');
    if (episodes.style.left = '208px') {
        episodes.style.left = '172px'
    }
    else {
        episodes.style.left = '208px';
    }
    var characters = document.getElementById('characters');
    characters.style.left = '173px';
    characters.style.top = '260px';
    characters.style.filter = 'brightness(100%)';
    episodes.style.filter = 'brightness(100%)';
      var fifties = document.getElementById('ep-50s');
    fifties.style.visibility = 'hidden';
}

function inspo() {
   var inspo = document.getElementById('inspo');
    inspo.style.left = '174px';
    inspo.style.top = '742px';
    inspo.style.filter = 'brightness(100%)';
}

function buttonfifties() {
    var characters = document.getElementById('ep-60s')
    characters.style.visibility = 'visible';
    var music = document.getElementById('ep-50s')
    characters.style.visibility = 'hidden';
    // var locations = document.getElementById('locations')
    // locations.style.visibility = 'hidden';
    // var costumes = document.getElementById('costumes')
    // costumes.style.visibility = 'hidden';
    // var magic = document.getElementById('magic')
    // magic.style.visibility = 'hidden';
    // var inspo = document.getElementById('inspo')
    // inspo.style.visibility = 'hidden';
}