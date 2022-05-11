fetch('https://api.airtable.com/v0/appiO928XGEGes4rb/foods', {
    headers: {
        Authorization: 'Bearer keyyCrGsXRgd04XgN',

    },
})
        
    const edata = [
    {
        food: '${food.fields.food}',
        allergens: '${food.fields.allergens}',
        frequency: '${food.fields.frequency}',
        reaction: '${food.fields.reaction}'
        }
    ]