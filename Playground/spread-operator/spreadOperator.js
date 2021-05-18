

const shoppingList = ['fruits', 'vegetables']
const updatedShoppingList = [...shoppingList, 'milk']
// ... will add all the existing elements, as well as more data elements after comma(,)

console.log(updatedShoppingList) // ['fruits', 'vegetables', 'milk]

const shooterGames = ['Call of Duty', 'Far Cry', 'Resident Evil']
const racingGames = ['Need For Speed', 'Gran Turismo', 'Burnout']
const allGames = [...shooterGames, ...racingGames]

console.log(allGames)
