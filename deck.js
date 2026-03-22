function createDeck() {
    const suits = ['♠', '♥', '♣', '♦']
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    deck = []

    for (let s = 0; s < suits.length; s++) {
        for (let v = 0; v < values.length; v++) {
            let weight = parseInt(values[v])
            if (values[v] === "J" || values[v] === "Q" || values[v] === "K") weight = 10
            if (values[v] === "A") weight = 11
            
            let card = {
                name: values[v],
                suit: suits[s],
                value: weight
            }
            deck.push(card)
        }
    }
}

function getNextCard() {
    let index = Math.floor(Math.random() * deck.length)
    let card = deck.splice(index, 1)[0]
    return card
}