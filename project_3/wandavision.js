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
        ,data.records.sort((a, b) => a.fields.order - b.fields.order)
            .slice(3, 4)
            .forEach(item => {
                console.log(item);
                wandavision.innerHTML += `
        <video loop muted autoplay class="episode-screen" id="ep-20s-1" src="${item.fields.episode_videos[0].url}"></video>
            `;
            }
                ,data.records.sort((a, b) => a.fields.order - b.fields.order)
            .slice(4, 5)
            .forEach(item => {
                console.log(item);
                wandavision.innerHTML += `
        <video loop muted autoplay class="episode-screen" id="ep-80s" src="${item.fields.episode_videos[0].url}"></video>
            `;
            }
               ,data.records.sort((a, b) => a.fields.order - b.fields.order)
            .slice(6, 7)
            .forEach(item => {
                console.log(item);
                wandavision.innerHTML += `
        <video loop muted autoplay class="episode-screen" id="ep-90s" src="${item.fields.episode_videos[0].url}"></video>
            `;
            }
                ,data.records.sort((a, b) => a.fields.order - b.fields.order)
            .slice(7, 8)
            .forEach(item => {
                console.log(item);
                wandavision.innerHTML += `
        <video loop muted autoplay class="episode-screen" id="ep-00s" src="${item.fields.episode_videos[0].url}"></video>
            `;
            }
                ,data.records.sort((a, b) => a.fields.order - b.fields.order)
            .slice(8, 9)
            .forEach(item => {
                console.log(item);
                wandavision.innerHTML += `
        <video loop muted autoplay class="episode-screen" id="ep-10s" src="${item.fields.episode_videos[0].url}"></video>
            `;
            }
                ,data.records.sort((a, b) => a.fields.order - b.fields.order)
            .slice(9, 10)
            .forEach(item => {
                console.log(item);
                wandavision.innerHTML += `
        <video loop muted autoplay class="episode-screen" id="ep-20s" src="${item.fields.episode_videos[0].url}"></video>
            `;
            }
        )))))))));
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
    var fifties = document.getElementById('ep-50s')
    fifties.style.visibility = 'visible';
    var sixties = document.getElementById('ep-60s')
    sixties.style.visibility = 'hidden';
    var seventies = document.getElementById('ep-70s')
    seventies.style.visibility = 'hidden';
    var eighties = document.getElementById('ep-80s')
    eighties.style.visibility = 'hidden';
    var nineties = document.getElementById('ep-90s')
    nineties.style.visibility = 'hidden';
    var noughties = document.getElementById('ep-00s')
    noughties.style.visibility = 'hidden';
    var present = document.getElementById('ep-10s')
    present.style.visibility = 'hidden';
    var present1 = document.getElementById('ep-20s')
    present1.style.visibility = 'hidden';
    var present2 = document.getElementById('ep-20s-1')
    present2.style.visibility = 'hidden';
}

function buttonsixties() {
    var fifties = document.getElementById('ep-50s')
    fifties.style.visibility = 'hidden';
    var sixties = document.getElementById('ep-60s')
    sixties.style.visibility = 'visible';
    var seventies = document.getElementById('ep-70s')
    seventies.style.visibility = 'hidden';
    var eighties = document.getElementById('ep-80s')
    eighties.style.visibility = 'hidden';
    var nineties = document.getElementById('ep-90s')
    nineties.style.visibility = 'hidden';
    var noughties = document.getElementById('ep-00s')
    noughties.style.visibility = 'hidden';
    var present = document.getElementById('ep-10s')
    present.style.visibility = 'hidden';
    var present1 = document.getElementById('ep-20s')
    present1.style.visibility = 'hidden';
    var present2 = document.getElementById('ep-20s-1')
    present2.style.visibility = 'hidden';
}

function buttonseventies() {
    var fifties = document.getElementById('ep-50s')
    fifties.style.visibility = 'hidden';
    var sixties = document.getElementById('ep-60s')
    sixties.style.visibility = 'hidden';
    var seventies = document.getElementById('ep-70s')
    seventies.style.visibility = 'visible';
    var eighties = document.getElementById('ep-80s')
    eighties.style.visibility = 'hidden';
    var nineties = document.getElementById('ep-90s')
    nineties.style.visibility = 'hidden';
    var naughties = document.getElementById('ep-00s')
    naughties.style.visibility = 'hidden';
    var noughties = document.getElementById('ep-00s')
    noughties.style.visibility = 'hidden';
    var present = document.getElementById('ep-10s')
    present.style.visibility = 'hidden';
    var present1 = document.getElementById('ep-20s')
    present1.style.visibility = 'hidden';
    var present2 = document.getElementById('ep-20s-1')
    present2.style.visibility = 'hidden';
}

function buttoneighties() {
    var fifties = document.getElementById('ep-50s')
    fifties.style.visibility = 'hidden';
    var sixties = document.getElementById('ep-60s')
    sixties.style.visibility = 'hidden';
    var seventies = document.getElementById('ep-70s')
    seventies.style.visibility = 'hidden';
    var eighties = document.getElementById('ep-80s')
    eighties.style.visibility = 'visible';
    var nineties = document.getElementById('ep-90s')
    nineties.style.visibility = 'hidden';
   var noughties = document.getElementById('ep-00s')
    noughties.style.visibility = 'hidden';
    var present = document.getElementById('ep-10s')
    present.style.visibility = 'hidden';
    var present1 = document.getElementById('ep-20s')
    present1.style.visibility = 'hidden';
    var present2 = document.getElementById('ep-20s-1')
    present2.style.visibility = 'hidden';
}

function buttonnineties() {
    var fifties = document.getElementById('ep-50s')
    fifties.style.visibility = 'hidden';
    var sixties = document.getElementById('ep-60s')
    sixties.style.visibility = 'hidden';
    var seventies = document.getElementById('ep-70s')
    seventies.style.visibility = 'hidden';
    var eighties = document.getElementById('ep-80s')
    eighties.style.visibility = 'hidden';
    var nineties = document.getElementById('ep-90s')
    nineties.style.visibility = 'visible';
    var noughties = document.getElementById('ep-00s')
    noughties.style.visibility = 'hidden';
    var present = document.getElementById('ep-10s')
    present.style.visibility = 'hidden';
    var present1 = document.getElementById('ep-20s')
    present1.style.visibility = 'hidden';
    var present2 = document.getElementById('ep-20s-1')
    present2.style.visibility = 'hidden';
}

function buttonnoughties() {
    var fifties = document.getElementById('ep-50s')
    fifties.style.visibility = 'hidden';
    var sixties = document.getElementById('ep-60s')
    sixties.style.visibility = 'hidden';
    var seventies = document.getElementById('ep-70s')
    seventies.style.visibility = 'hidden';
    var eighties = document.getElementById('ep-80s')
    eighties.style.visibility = 'hidden';
    var nineties = document.getElementById('ep-90s')
    nineties.style.visibility = 'hidden';
    var noughties = document.getElementById('ep-00s')
    noughties.style.visibility = 'visible';
    var present = document.getElementById('ep-10s')
    present.style.visibility = 'hidden';
    var present1 = document.getElementById('ep-20s')
    present1.style.visibility = 'hidden';
    var present2 = document.getElementById('ep-20s-1')
    present2.style.visibility = 'hidden';
}

function buttontens() {
    var fifties = document.getElementById('ep-50s')
    fifties.style.visibility = 'hidden';
    var sixties = document.getElementById('ep-60s')
    sixties.style.visibility = 'hidden';
    var seventies = document.getElementById('ep-70s')
    seventies.style.visibility = 'hidden';
    var eighties = document.getElementById('ep-80s')
    eighties.style.visibility = 'hidden';
    var nineties = document.getElementById('ep-90s')
    nineties.style.visibility = 'hidden';
    var noughties = document.getElementById('ep-00s')
    noughties.style.visibility = 'hidden';
    var present = document.getElementById('ep-10s')
    present.style.visibility = 'visible';
    var present1 = document.getElementById('ep-20s')
    present1.style.visibility = 'hidden';
    var present2 = document.getElementById('ep-20s-1')
    present2.style.visibility = 'hidden';
}

function buttonpresent() {
    var fifties = document.getElementById('ep-50s')
    fifties.style.visibility = 'hidden';
    var sixties = document.getElementById('ep-60s')
    sixties.style.visibility = 'hidden';
    var seventies = document.getElementById('ep-70s')
    seventies.style.visibility = 'hidden';
    var eighties = document.getElementById('ep-80s')
    eighties.style.visibility = 'hidden';
    var nineties = document.getElementById('ep-90s')
    nineties.style.visibility = 'hidden';
    var noughties = document.getElementById('ep-00s')
    noughties.style.visibility = 'hidden';
    var present = document.getElementById('ep-10s')
    present.style.visibility = 'hidden';
    var present1 = document.getElementById('ep-20s')
    present1.style.visibility = 'visible';
    var present2 = document.getElementById('ep-20s-1')
    present2.style.visibility = 'visible';
}