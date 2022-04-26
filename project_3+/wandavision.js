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
            .forEach(item => {
                console.log(item);
                wandavision.innerHTML += `
        <video loop muted autoplay class="episode-screen" id="ep-50s" src="${item.fields.episode_videos[0].url}"></video>
            `;
            }
        );
    });

// onclick

function episodes() {
    var episodes = document.getElementById('ep-50s');
    episodes.classList.toggle("episode-screen");
}