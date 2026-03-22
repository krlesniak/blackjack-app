let cards = []
let deck = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let currentBet = 0
let player = {
    name: "You",
    chips: 1000, 
}

let dealerCards = []
let dealerSum = 0

let dealerCardsEl = document.getElementById("dealer-cards-el")

let messageEl = document.getElementById("message-el")

let cardsEl = document.getElementById("cards-el")
let betEl = document.getElementById("bet-el")
let playerEl = document.getElementById("player-el")

let dealBtn = document.getElementById("start-btn") 
let nextBtn = document.getElementById("next-btn")
let newCardBtn = document.getElementById("new-card-btn")
let stayBtn = document.getElementById("stay-btn")

playerEl.textContent = "Chips: $" + player.chips

function startNewGame() {
    player.chips = 1000 
    currentBet = 0
    updateBetUI()
    newRound() 
}

function newRound() {
    isAlive = false
    hasBlackJack = false
    cards = []
    sum = 0
    dealerCards = []
    dealerSum = 0
    currentBet = 0 

    cardsEl.innerHTML = ""
    dealerCardsEl.innerHTML = ""
    messageEl.textContent = "Place your bet!"
    messageEl.classList.remove("win-style", "lose-style", "draw-style")
    updateBetUI()

    dealBtn.style.display = "inline-block" 
    nextBtn.style.display = "none"
    newCardBtn.style.display = "none" 
    stayBtn.style.display = "none"
}

function startGame() {
    createDeck()
    isAlive = true
    hasBlackJack = false
    cards = []
    sum = 0
    dealerCards = []
    dealerSum = 0

    cardsEl.innerHTML = ""
    dealerCardsEl.innerHTML = ""
   
    messageEl.classList.remove("win-style", "lose-style", "draw-style")
    messageEl.textContent = "Drawing cards..."

    addCardToPlayer()
    addCardToPlayer()

    updateGameState()
}

function confirmBetAndStart() {
    if (currentBet > 0) {
        dealBtn.style.display = "none" 
        newCardBtn.style.display = "inline-block"
        stayBtn.style.display = "inline-block"
        startGame()
    } else {
        messageEl.textContent = "Place a bet first!"
    }
}
function addCardToPlayer() {
    let card = getNextCard()
    cards.push(card)
    sum = calculateSum(cards) 
    
    displayNewCard(card, cardsEl, false)
}

function updateGameState() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        stay()
    } else {
        message = "You're out of the game!"
        isAlive = false
        determineWinner()
    }
    messageEl.textContent = message
}

function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        addCardToPlayer()
        updateGameState()
    }
}

function stay() {
    if (isAlive && sum > 0) {
        isAlive = false 
        messageEl.textContent = "Dealer's turn..."
        dealerTurnAnimated() 
    }
}

function dealerTurnAnimated() {
    if (dealerSum < 17) {
        let card = getNextCard()

        dealerCards.push(card)
        dealerSum = calculateSum(dealerCards)

        displayNewCard(card, dealerCardsEl, true)
        
        setTimeout(dealerTurnAnimated, 1200)
    } else {
        determineWinner()
    }
}

function determineWinner() {
    messageEl.classList.remove("win-style", "lose-style", "draw-style")

    if (sum > 21) {
        message = "You busted! Dealer wins."
        messageEl.classList.add("lose-style")
    } else if (dealerSum > 21 || sum > dealerSum) {
        message = "YOU WIN!"
        messageEl.classList.add("win-style")
        player.chips += (currentBet * 2) 
    } else if (sum < dealerSum) {
        message = "Dealer wins!"
        messageEl.classList.add("lose-style")
    } else {
        message = "It's a draw!"
        messageEl.classList.add("draw-style")
        player.chips += currentBet 
    }

    nextBtn.style.display = "inline-block"
    
    messageEl.textContent = message
    updateBetUI()
}



function addBet(amount) {
    if (!isAlive && sum === 0) {
        if (player.chips >= amount) {
            currentBet += amount
            player.chips -= amount
            updateBetUI()
        } else {
            messageEl.textContent = "Not enough chips!"
        }
    }
}

function resetBet() {
    if (!isAlive && sum === 0) {
        player.chips += currentBet
        currentBet = 0
        updateBetUI()
    }
}

function calculateSum(hand) {
    let tempSum = 0
    let aceCount = 0

    for (let card of hand) {
        tempSum += card.value
        if (card.name === "A") aceCount++
    }

    while (tempSum > 21 && aceCount > 0) {
        tempSum -= 10
        aceCount--
    }

    return tempSum
}