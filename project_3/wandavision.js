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
        <video loop muted autoplay src="${item.fields.episode_videos}"></video>
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


function episodes() {
    var episodes = document.getElementById('episodes');
    if (episodes.style.left = '172px') {
        episodes.style.left = '208px'
    }
    else {
        episodes.style.left = '172px';
    }
    var fifties = document.getElementById('ep-50s');
    fifties.style.visibility = 'visible';
}


 
function characters() {
    var characters = document.getElementById('characters');
    characters.style.left = '208px';
    characters.style.top = '197px';
    characters.style.filter = 'brightness(130%)';
}
