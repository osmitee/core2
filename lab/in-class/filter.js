let filterValue = 'all';
const filter = document.querySelector('#type');

fetch('https://api.airtable.com/v0/appGeugv5v8JANFJa/wandavision', {
    headers: {
        Authorization: 'Bearer keyOtukKKZyVwSugv',
    },
})
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let filterValue = 'posters';
    
        const wv = document.querySelector('.content');
        function generateContent() {
            wv.innerHTML = '';

            data.records
                .filter(wandavision => {
                    return filterValue === wandavision.fields.tags;
                    // return foods.filter === filterValue;
                })
                .sort((a, b) => a.fields.order - b.fields.order)
                .forEach(wandavision => {
                    console.log(wandavision);
                    wv.innerHTML += `
          <div class="wv">
             <img  class="wvpics" src="${wandavision.fields.assets[0].thumbnails.large.url}"/></div>
            <h3>${wandavision.fields.title}</h3> 
      `;
                });
        }
        generateContent();

        filter.addEventListener('change', () => {
            filterValue = event.target.value;
            generateContent();
            console.log('changed');
            console.log(event.target.value);
        });
    });

// console.log(data);

// let dropdownValue = 'colour';

// function handleDropdown() {
//     console.log('hi')
//     console.log(event.target.value);
//     dropdownValue = event.target.value;
//     generateContent();
// }

// const content = document.querySelector('.content');
//     function generateContent() {
//     content.innerHTML = '';
//     console.log('changed');

//     data.filter(item => {
//         return item.type === dropdownValue;
//     })
//         .forEach(item => {
//             // console.log(item);
//             content.innerHTML += `
//     <div class="card">
//     <p>trending number: ${item.popularity}</p>
//     <h3>${item.name}</h3>
//     <p>${item.type}</p>
//     <p>$${item.price}</p>
//     <p class="${item.isCute === true ? 'cute' : 'not-cute'}">
//     ${item.isCute === true ? 'yes cute' : 'no not cute'} </p>
//     </div>
//     `
//         });
// }
// generateContent()
//  // line 12: styles classes individually