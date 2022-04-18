console.log("*elizabeth olsen voice* previously on wandavision!")

fetch('https://api.airtable.com/v0/appGeugv5v8JANFJa/wandavision/recukyswT5ZFGJBjK', {
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
       <iframe width="560" height="315" src="${item.fields.episode-vids}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
});
    });

 