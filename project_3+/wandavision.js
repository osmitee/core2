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
            .slice(0, 8)
            .forEach(item => {
                console.log(item);
                wandavision.innerHTML += `
         <video loop muted autoplay class="video" src="${item.fields.episode_videos[0].url}"></video>
            `;
            }
        );
    });

document.querySelectorAll('.buttons img')
    .forEach((button, i) => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.video')
                .forEach((video, videoIndex) => {
                    if (videoIndex === i) {
                        video.style.opacity = 1;
                    } else {
                        video.style.opacity = 0;
                    };
                });
        });
    });

function episodes() {
    var element = document.querySelector('.video');
    element.style.opacity = 1;
    }