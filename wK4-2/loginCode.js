//Check credentials function for login validation.
function checkCreds() {

    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName
//Establishes parameters of credentials to be accepted.
    if (fullName.length > 20 || fullName.length == 1) {
        // if true,
        document.getElementById("loginStatus").innerHTML = "Full name invalid!"
    } else if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number!"
    }
    else {
        alert("Acess Granted!! Welcome" + " " + fullName + "!");
        location.replace("index.html");
    }
}