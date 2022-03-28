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
        
        data.records.forEach(item => {
            console.log(item);
            wandavision.innerHTML += `
            <h3>${item.fields.title}</h3>
            `;
});
});