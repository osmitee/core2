console.log("hello")

let filterValue = '1950s';

fetch('https://api.airtable.com/v0/appGeugv5v8JANFJa/wandavision', {
    headers: {
        Authorization: 'Bearer keyOtukKKZyVwSugv',
    }
})
    
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const wandavision = document.querySelector('.wandavision');
        function generateContent() {
            wandavision.innerHTML = ``;
        }
        
        data.records.sort((a, b) => a.fields.order - b.fields.order)
            .slice(0, 5)
            .filter.addEventListener('change', () => {
                filterValue = event.target.value
                generateContent()
            })
            .forEach(item => {
                    // console.log(item);
                    wandavision.innerHTML += `
    <div class="episodes">
    <h3>${item.fields.episodes}</h3>
    </div>
    `
                });
            });