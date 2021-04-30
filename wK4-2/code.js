//Start function for the start button
function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
//stop() for stop button
function stop() {
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

//This is a more efficient countDown timer using loops and change order request.
function countDownV3() {
    var count = 10;

    for (var i = 1; i <= 11; i++) {

        if (i <= 6) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = count;
                count--;
            }, 1000 * i);
        } else if (i == 11) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Blast Off!";
                count--;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + count;
                count--;
            }, 1000 * i);
        }

    }


}
//This is a more efficient countDown timer using loops. No longer used.
function countDownV2() {
    var count = 10;

    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = count;
            count--;
        }, 1000 * i);
    }

    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blast Off!";
        count = count--;
    }, 11000);
}



// countDown timer from 10 to 1, then print Blast Off!!
function countDown() {
    var count = 10;
    // countDown starts at 10
    document.getElementById("countDownTimer").innerHTML = count;
    count = count - 1
    // 9
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);
    //8
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);
    //7
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);
    //6
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);
    //5
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);
    //4
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);
    //3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);
    //2
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);
    //1
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);
    //Blast Off!!!
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blast Off!!!";
        count = count - 1;
    }, 10000);
}
//Random number generator using two 6 sided die used to play craps.
function playCraps() {
    //Creates die1.
    var die1;
    //Creates die2
    var die2;
    //Creates sum for adding die1 + die2.
    var sum;
    //Generates random number 1 - 6 for die1 rounded to nearest whole number.
    die1 = Math.ceil(Math.random() * 6);
    //Generates random number 1 - 6 for die2 rounded to nearest whole number.
    die2 = Math.ceil(Math.random() * 6);
    //Determines the value of sum as die1 + die2.
    sum = die1 + die2;
    //Display results die1.
    document.getElementById("die1Res").innerHTML = die1;
    //Display results die2.
    document.getElementById("die2Res").innerHTML = die2;
    //Display sum of craps round.
    document.getElementById("sumRes").innerHTML = sum;
    //Determines results of craps round using else/if statements. Lose, Win, Push.
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsReults").innerHTML = "Craps! You Lose!!";
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsReults").innerHTML = "Doubles, You WIN!!";
    } else {
        document.getElementById("crapsReults").innerHTML = "Push, Please roll again.";
    }

}

//Play sound function to add specific sound to space page.
function playStation() {
    mySound = new sound("us-lab-background(1).mp3");
    mySound.play();
}

//Needed to  any play sound.
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    this.play = function () {
        this.sound.play();
    }

    this.stop = function () {
        this.sound.pause();
    }

}









function runSandbox() {
    var count = 10;

    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("sandboxDisplay").innerHTML = count;
            count--;
        }, 1000 * i);
    }

    setTimeout(function () {
        document.getElementById("sandboxDisplay").innerHTML = "Blast Off!";
        count = count--;
    }, 11000);

}