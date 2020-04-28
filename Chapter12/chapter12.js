var trainSpeed = 350;
var trainPosition = 0;
var animation;

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

  function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);
clearInterval(animation);
    animation = setInterval(frame, trainSpeed);

    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + '%';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}
function checkPosition(currentPosition) {
    if (currentPosition === 92) {
        alert("Crash!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain() {
    if (trainPosition < 99) {
        clearInterval(animation);
        console.log("Whew! That was close!");
    }
}