
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    } else {

      console.log("wrong");

      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");

      //2. Call startOver() if the user gets the sequence wrong.
      startOver();
    }

}

function nextSequence() {

  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//1. Create a new function called startOver().
function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}

















// var buttonColors=["red","blue","green","yellow"];
// var gamepatterns=[];
// var userClickedPattern=[]
// var level=0;
// document.addEventListener("keydown",function(){
    
//     nextSequence();$("h1").text("Level "+level);started=true;
// })
// $(".btn").click(function(event){
//     var userChosenColor = event.target.id;
//     userClickedPattern.push(userChosenColor);
//     playSound(event.target.id);animatePress(event.target.id);
//     checkAnswer(userClickedPattern.length-1);
// });
// function checkAnswer(currentLevel) {

//     //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

//       console.log("success");

//       //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
//       if (userClickedPattern.length === gamePattern.length){

//         //5. Call nextSequence() after a 1000 millisecond delay.
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);

//       }

//     } else {

//       console.log("wrong");
//       playSound("wrong");
//       $("body").addClass("game-over");
//       setTimeout(function(){$("body").removeClass("game-over");},200);
//       $("level-title").text("Game Over, Press Any Key to Restart");
//       startOver();
//     }

// }
// function nextSequence(){level++;userClickedPattern=[];$("#level-title").text("Level " + level);
//     var randomnumber=Math.floor(Math.random()*4);
//     var randomChosenColor= buttonColors[randomnumber];
//     gamepatterns.push(randomChosenColor);
//     $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
//     playSound(randomChosenColor);
// }
// function playSound(name){
//     var audio = new Audio("sounds/"+ name +".mp3");
//     audio.play();
// }
// function animatePress(currentColor){
//     $("#"+currentColor).addClass("pressed");
//     setTimeout(function(){$("#" + currentColor).removeClass("pressed");},100);
// }
// function startOver() {

//     //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
//     level = 0;
//     gamePattern = [];
//     started = false;
// }
  