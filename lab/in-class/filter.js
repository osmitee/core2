console.log(data);

let dropdownValue = 'colour';

function handleDropdown() {
    console.log('hi')
    console.log(event.target.value);
    dropdownValue = event.target.value;
    generateContent();
}

const content = document.querySelector('.content');
    function generateContent() {
    content.innerHTML = '';
    console.log('changed');

    data.filter(item => {
        return item.type === dropdownValue;
    })
        .forEach(item => {
            // console.log(item);
            content.innerHTML += `
    <div class="card">
    <p>trending number: ${item.popularity}</p>
    <h3>${item.name}</h3>
    <p>${item.type}</p>
    <p>$${item.price}</p>
    <p class="${item.isCute === true ? 'cute' : 'not-cute'}">
    ${item.isCute === true ? 'yes cute' : 'no not cute'} </p>
    </div>
    `
        });
}
generateContent()
 // line 12: styles classes individually