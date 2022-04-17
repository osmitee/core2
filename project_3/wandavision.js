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
        <h3 class="title">${item.fields.episodes}</h3>
            `;
});
});