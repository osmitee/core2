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
        
        data.records.slice(0, 1)
        .forEach(item => {
            console.log(item);
            wandavision.innerHTML += `
        <h3 class="title">${item.fields.title}</h3>
            `;
});
});