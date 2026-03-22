# Blackjack Pro - Digital Casino Experience

A fully functional and interactive **Blackjack** game built with JavaScript, HTML5, and CSS. This project simulates a real casino environment with advanced deck logic, betting systems, and smooth animations.

## Live Demo
> **Note to user:** Anybody can enter my blackjack app using this link:
> Example: [Play Blackjack Pro here](https://krlesniak.github.io/blackjack/)

## Key Features
* **Realistic Deck Logic:** Uses a 52-card deck system. Once a card is drawn, it’s removed from the deck for the remainder of the round.
* **Smart Ace Logic:** Aces automatically switch value between 11 and 1 to prevent the player or dealer from "busting" (going over 21).
* **Advanced Dealer AI:** The dealer follows classic casino rules, hitting until they reach at least 17 points.
* **Dynamic Betting System:** Players start with $1000 and can place bets using various chip denominations (10, 50, 100, 200).
* **Smooth Animations:** Cards "fly" from the center deck to the player or dealer with custom CSS keyframe animations.
* **Responsive UI:** Interactive card hover effects and a clean, casino-themed layout.

## Built With
* **HTML** - Structure and semantic elements.
* **CSS** - Custom animations, Flexbox layout, and casino styling.
* **JavaScript** - Game logic, DOM manipulation, and state management.

## How to Run Locally

To see the game in action on your computer, follow these steps:

### Using VS Code "Live Server"
1.  Open the project folder in **Visual Studio Code**.
2.  Install the **Live Server** extension (by Ritwick Dey) from the Extensions Marketplace (`Ctrl+Shift+X`).
3.  Right-click on `index.html` in the explorer sidebar.
4.  Select **"Open with Live Server"**. 
5.  A new tab will automatically open in your browser showing the game.


## Project Structure
```text
├── index.html       # Main game structure
├── base.css         # Reset and global styles
├── layout.css       # Positioning and grid/flex containers
├── components.css   # Styles for cards, chips, and buttons
├── deck.js          # Logic for card deck generation
├── ui.js            # DOM updates and visual feedback
└── app.js           # Core game engine and logic