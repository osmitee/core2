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
            .slice(5, 6)
            .forEach(item => {
                console.log(item);
                wandavision.innerHTML += `
        <video loop muted autoplay class="episode-screen" id="ep-90s" src="${item.fields.episode_videos[0].url}"></video>
            `;
            }
                ,data.records.sort((a, b) => a.fields.order - b.fields.order)
            .slice(6, 7)
            .forEach(item => {
                console.log(item);
                wandavision.innerHTML += `
        <video loop muted autoplay class="episode-screen" id="ep-00s" src="${item.fields.episode_videos[0].url}"></video>
            `;
            }
                ,data.records.sort((a, b) => a.fields.order - b.fields.order)
            .slice(7, 8)
            .forEach(item => {
                console.log(item);
                wandavision.innerHTML += `
        <video loop muted autoplay class="episode-screen" id="ep-10s" src="${item.fields.episode_videos[0].url}"></video>
            `;
            }
                ,data.records.sort((a, b) => a.fields.order - b.fields.order)
            .slice(8, 9)
            .forEach(item => {
                console.log(item);
                wandavision.innerHTML += `
        <video loop muted autoplay class="episode-screen" id="ep-20s" src="${item.fields.episode_videos[0].url}"></video>
            `;
            }
        )))))))));
    });

// onclick

function episodes() {
    var episodes = document.getElementById('ep-50s');
    episodes.classList.toggle("episode-screen");
}

  document.getElementById('click').addEventListener('click', function(){
    doStuff();
  });


function buttonsixties() {
    var episodes = document.getElementById('ep-60s');
    episodes.classList.toggle("episode-screen");
    [ 'ep-50s', 'ep-70s', 'ep-80s', 'ep-90s', 'ep-00s', 'ep-10s', 'ep-20s'].forEach(function( ids ) {
    document.getElementById( ids ).classList.toggle("ep-visibility");

});
}

function buttonseventies() {
    var episodes = document.getElementById('ep-70s');
    episodes.classList.toggle("episode-screen");
    [ 'ep-50s', 'ep-60s', 'ep-80s', 'ep-90s', 'ep-00s', 'ep-10s', 'ep-20s'].forEach(function( ids ) {
    document.getElementById( ids ).classList.toggle("ep-visibility");


});
    
}

function buttoneighties() {
    var episodes = document.getElementById('ep-80s');
    episodes.classList.toggle("episode-screen");
    [ 'ep-50s', 'ep-60s', 'ep-70s', 'ep-90s', 'ep-00s', 'ep-10s', 'ep-20s'].forEach(function( ids ) {
    document.getElementById( ids ).classList.toggle("ep-visibility");


});
}

function buttonnineties() {
    var episodes = document.getElementById('ep-90s');
    episodes.classList.toggle("episode-screen");
}

function buttonnoughties() {
    var episodes = document.getElementById('ep-00s');
    episodes.classList.toggle("episode-screen");
}

function buttontens() {
    var episodes = document.getElementById('ep-10s');
    episodes.classList.toggle("episode-screen");
}

function buttonpresent() {
    var episodes = document.getElementById('ep-20s');
    episodes.classList.toggle("episode-screen");
}