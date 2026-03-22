function displayNewCard(card, container, isDealer) {
    let animation = isDealer ? "dealer-anim" : "player-anim"
    container.insertAdjacentHTML('beforeend', getCardDisplay(card, animation))
}

function getCardDisplay(card, animationClass) {
    const colorClass = (card.suit === '♥' || card.suit === '♦') ? 'red' : 'black'

    return `
        <div class="card ${colorClass} ${animationClass}">
            <div class="card-suit top">${card.suit}</div>
            <div class="card-value">${card.name}</div>
            <div class="card-suit bottom">${card.suit}</div>
        </div>
    `
}

function updateBetUI() {
    betEl.textContent = "Current Bet: $" + currentBet
    playerEl.textContent = "Chips: $" + player.chips
}
