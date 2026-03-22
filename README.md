# Blackjack Pro - Digital Casino Experience

A fully functional and interactive **Blackjack** game built with JavaScript, HTML and CSS. This project simulates a blackjack casino game deck logic, betting systems, and smooth animations.

## Live Demo
> Anybody can enter my blackjack app using this link:
> [Play Blackjack Pro here](https://krlesniak.github.io/blackjack-app/)

## Key Features
* **Realistic Deck Logic:** Uses a 52-card deck system.
* **Smart Ace Logic:** Aces automatically switch value between 11 and 1 
* **Advanced Dealer AI:** The dealer follows classic casino rules, hitting until they reach at least 17 points.
* **Dynamic Betting System:** Players start with $1000 
* **Smooth Animations:** Cards fly from the center deck to the player or dealer 
* **Responsive UI:** Interactive card hover effects.

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