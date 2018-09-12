var hints = [
    // first hint Gardenia
    {
        hint : [' This flower belongs to the coffee plant family, ‘Rubiaceae’.'],
        answer: "Gardenia"
    } ,
    // second hint Lily
    {
        hint : [' They’re highly toxic to our furry friends (cats).'],
        answer: "Lily"
    } ,
    // third hint Magnolia
    {
        hint : [' They have been naturalized to almost all continents in the world because of their beauty.'],
        answer: "Magnolia"
    } ,
    // fourth hint Orchid
    {
        hint : [' They have existed on the planet around 100 million years.'],
        answer: "Orchid"
    } ,
    // fifth hint Hibiscus
    {
        hint : [' This flower is edible and has a tangy citrusy taste.'],
        answer: "Hibiscus"
    } 
]

var answers = [ "Gardenia","Lily","Magnolia","Orchid","Hibiscus"]

var wrongGuesses;
var word;
var Guesses;
var startGame = function () {
    word = getRandomWord ();
    blankWordWithGuesses = BlankForWrongLetters ();
};

var getRandomWord = function (){
    return words[Math.floor(Math.random)* words.lenght]
};

var listenForKeyPress = function (){
    document.onKkypress = handleKeyPress;
};

var checkGuess = function (letter, word){

};

var blankForWrongLetters= function ( word){

};

var guessedLetters = function (){

};

var handeKeyPress = function (event){

};

var handleCorrectGuess = function (){

};

var handleIncorrectGuess = function (){

};

var cupdateCorrectGuesses = function (){

};
var updateIncorrectGuesses = function (string){
    document.getElementById()

};

var handleWin = function (){

};

var handleLoss = function (){

};