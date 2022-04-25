console.log("hello")

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
        <video loop muted autoplay class="episode-screen" id="episodes" src="${item.fields.episode_videos[0].url}"></video>
            `;
            }
            );
    });

function episodes() {
    let episodes = document.getElementById('episodes')
    episodes.style.opacity = "1";
    }