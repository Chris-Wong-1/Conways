![Conways](https://github.com/Chris-Wong-1/Conways/raw/development/ConwaysLogoTightCrop.png)
## Description
Built as a capstone final project at DevBootcamp, a 19-week immersive coding school, Conways is a React Native mobile artistic experience combining Conway's Game of Life with music, color, and user control! The app revolves around simulation of cellular/colony style growth, propagation, survival, and digital death!

## Design
Project design focused on the classic version of Conway's Game of Life, with inspired modern elements. The base game is made with React Native, utilizing HTML5's Canvas element and vanilla JS to calculate growth & death, drawing the game board in real time with user touch events (via a WebView component loading local assets).

## Incorporated User Stories
- A user can touch the screen to generate new live cells and interact with the game as it evolves
- A user can expect responsive performance from the game
- A user can open the app and see a landing screen with logo and styles
- A user can push a start button on the landing screen to reveal the game
- A user sees a border-less game menu allowing start/pause/reset functionality
- A user can access an about page from the landing screen
- A user can access a rules explanation page from the landing screen
- A user can see colored and styled cells while playing the game
- A user can hear music associated with the growth or decay of their colonies
- A user can pick different cell sizes from the in-game menu
- A user can select from themes for cell colors
- A user can adjust the speed of the simulation from the in-game menu (not fully implemented)

## Screenshots
### Landing and Rules
<img src="https://raw.githubusercontent.com/Chris-Wong-1/Conways/development/readme_files/landing_ss.png" height="350" alt="Landing Screen">
<img src="https://raw.githubusercontent.com/Chris-Wong-1/Conways/development/readme_files/rules_ss.png" height="350" alt="Rules Screen">

### Base Gameplay
In order; playing the game w/o adjusting settings, changing cell sizes via the modal menu, loading in preset cell configurations to play with, and changing themes

<img src="https://raw.githubusercontent.com/Chris-Wong-1/Conways/development/readme_files/playing.gif" height="350" alt="Playing the Game">
<img src="https://raw.githubusercontent.com/Chris-Wong-1/Conways/development/readme_files/cell_sizes.gif" height="350" alt="Adjusting Cell Size">
<img src="https://raw.githubusercontent.com/Chris-Wong-1/Conways/development/readme_files/presets.gif" height="350" alt="Using Presets">
<img src="https://raw.githubusercontent.com/Chris-Wong-1/Conways/development/readme_files/themes.gif" height="350" alt="Changing Themes">

## Required Packages
List may be out of date, trust the development branch *package.json*

### For Development
- node.js (and npm)
- react
- react-native
- react-native-sound
- react-native-animatable
- Apple XCode

### For Testing
- babel-core
- babel-preset-react-native
- enzyme
- chai
- mocha
- react-addons-test-utils
- react-dom
- react-native-mock

## Installation
1. `git clone https://github.com/Chris-Wong-1/Conways.git`
2. cd to the Conways directory
3. `npm install`
4. `react-native run-ios` for iOS simulation

## Running Tests
Package.json should contain a script specification for npm allowing you to run `npm test`
to run the test suite with Mocha and Enzyme. More sophisticated testing (of game logic) is unsupported
due to the nature of how the game script is injected onto the canvas HTML5 element contained in GameScene's WebView component. Future builds will hopefully support this feature, please feel free to create an issue and tag the team if interested!

## Our Team
- [Chris Wong](https://github.com/Chris-Wong-1/ "Chris Wong")
- [Mikael Teklehaimanot](https://github.com/mikael491 "Mikael Teklehaimanot")
- [Maxwell Workman](https://github.com/maxwellworkman "Maxwell Workman")
- [David Ramirez](https://github.com/davidthegreat "David Ramirez")
- [Jonathan Hall](https://github.com/jlhall "Jonathan Hall")
