$(document).ready(function(){

var panel = $('#quiz-area');
var hints = [
    // first hint Gardenia
    {
        hint : [' This flower belongs to the coffee plant family, ‘Rubiaceae’.'],
        answer: "Gardenia",
        images:"images/Gardenia.png",
    } ,
    // second hint Lily
    {
        hint : [' They’re highly toxic to our furry friends (cats).'],
        answer: "Lily",
        images:"images/Lily.png",
    } ,
    // third hint Magnolia
    {
        hint : [' They have been naturalized to almost all continents in the world because of their beauty.'],
        answer: "Magnolia",
        images:"images/Magnolia.png",
    } ,
    // fourth hint Orchid
    {
        hint : [' They have existed on the planet around 100 million years.'],
        answer: "Orchid",
        images:"images/Orchid.png",
    } ,
    // fifth hint Hibiscus
    {
        hint : [' This flower is edible and has a tangy citrusy taste.'],
        answer: "Hibiscus",
        images:"images/Hibiscus.png",
    } 
]


//Click-event

$(document).on('click', '#start-over', function(e) {
    game.reset();
  });
  
  $(document).on('click', '.answer-button', function(e) {
    game.clicked(e);
  });
  
  $(document).on('click', '#start-button', function(e) {
    $('#chancesLeft').replaceWith('<h2>chances Remaining: <span id="counter-number">5</span> Chances</h2>');
    game.loadHint();
  });


//Declaring Variables
var answers = [ "Gardenia","Lily","Magnolia","Orchid","Hibiscus"]

var game = {
    hints:hints,
    currentHint:0,
    wins:0,
    losses:0,

    //Function Loading Hints
    loadHint: function(){
        panel.html('<h2>' + hints[this.currentHint].hint + '</h2>' );
        for (var i = 0; i<hints[this.currentHint].answers.length; i++){
          panel.append('<button class="answer-button" id="button"' + 'data-name="' + hints[this.currentHint].answers[i] + '">' + hints[this.currentHint].answers[i]+ '</button>');
        }
      },

     
 
}
});