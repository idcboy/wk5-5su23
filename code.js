//a function to play craps on my index page
function playCraps(){
    console.log("playCraps() started");
    //step one roll 2 6 sided dice
    var die1;
    var die2;
    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());
    console.log("die1 is:" + die1);
    console.log("die2 is:" + die2);
    //step 1b link to html and print results on screen
    document.getElementById("die1Res").innerHTML =die1;
    document.getElementById("die2Res").innerHTML =die2;
//step 2. calculate the sum of die 1 and die 2
var diceSum = die1 + die2;
console.log("The sum of the dice is:" + diceSum);
document.getElementById("diceSum").innerHTML =diceSum;
    /*if (conditions for true) {
        do this if conditions are true
    }else if(another conditions for true){
        do this else if conditions are true
    }else{
        do this if none are true
    }*/

    //step 3.does the sum equal 7 or 11, meaning are you are loser
    if(diceSum==7||diceSum==11){
        document.getElementById("gameRes").innerHTML = "sorry no dice try again"
        //step 4. did the dice come up double> are they evens? if so, yo win
    }else if(die1 == die2 && die1%2 == 0){
        document.getElementById("gameRes").innerHTML = "Congratulations you win! GG"
    }else{
        //step 5. otherwise push
        document.getElementById("gameRes").innerHTML =
     "You did not lose, You did not win, Good luck please play again!"}
    
}

// start of function checkCreds for strings.html
function checkCreds(){
    console.log("checkCreds() started...");
    document.getElementById("loginStatus").innerHTML = "Status of login";
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLenght;
/* this will place the characters under the fName id in the firstName variable
*/
    firstName = document.getElementById("fName").value;
    console.log("The first name is inputted as " + firstName);
    /* this will place the characters under the lName id in the lastName variable
*/
    lastName = document.getElementById("lName").value;
    console.log("The last name is inputted as " + lastName);
    /* this will place the characters under the zipCode id in the zipCode variable
*/
    zipCode = document.getElementById("zipCode").value;
    console.log("The zip code is inputted as " + zipCode);
    
    /* this makes the full name variable equal to 
    the first and last name with a space */
    fullName = firstName + " " + lastName;
    console.log("The full name is " + fullName);
zipCodeNumb = parseInt(zipCode);
console.log("The zip code number is" + zipCodeNumb);
    fullNameLenght =fullName.length;
    console.log("The full name has " + fullNameLenght + " characters");
    /*i added some or statements to make it a tad bit mor realistic
    now it makes sure the user has at least entered 3 letters in either box */
    if(firstName.length < 3 || lastName.length < 3 || fullNameLenght > 20){
        document.getElementById("loginStatus").innerHTML = "Invalid name, please try again";
    } else if(zipCode.length != 5 || zipCodeNumb < 0 || zipCodeNumb > 99999){
        document.getElementById("loginStatus").innerHTML = "Invalid zip code, please try again";
    } else{
        alert("User credientals have passed the login process, Welcome to the site, " + fullName);
    }

}