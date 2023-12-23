var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var isStart = true;
var level = 0;
$("body").keypress(function () {

    if (isStart == true) {
        isStart = false;
        nextSequence();
    }

});

$(".btn").click(function (event) {
    if (isStart == true) {
        $("#level-title").text("first start the game");
    }
    else {
        var buttonId = event.target.id;

        userClickedPattern.push(buttonId);
        event.target.classList.add("pressed");
        setTimeout(function () {
            event.target.classList.remove("pressed");
        }, 100);
        playSound(buttonId);

        check(userClickedPattern.length - 1);
    }



});
function check(index) {
    if (userClickedPattern[index] === gamePattern[index]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("wrong answer , press any key to restart");
        // playSound2("sangram")
        // $(".btn").addClass("addimage");
        setTimeout(function () {
            $("body").removeClass("game-over");

        }, 200);
        setTimeout(function () {

            // $(".btn").removeClass("addimage");
        }, 3000);

        startOver();
    }
}
function nextSequence() {
    level += 1;
    userClickedPattern = [];
    $("#level-title").text("Level " + level);
    var n = Math.random() * 3;
    n = Math.floor(n);
    var randomNumber = n;
    var randomChosenColor = buttonColors[randomNumber];
    flash(randomChosenColor);
    gamePattern.push(randomChosenColor);
}
function flash(s) {

    $("#" + s).fadeOut(100).fadeIn(100);

}
function playSound(s) {

    var path = "./sounds/" + s + ".mp3";
    var audio = new Audio(path);

    audio.play();

}
function playSound2(s) {

    var path = "./sounds/" + s + ".mp4";
    var audio = new Audio(path);

    audio.play();

}

function startOver() {
    level = 0;
    gamePattern = [];
    isStart = true;
}







