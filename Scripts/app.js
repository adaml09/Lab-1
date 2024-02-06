/**
 * Program: Lab-1-app
 * Programmer: Adam LeBlanc
 * Date Updated: 2024-02-05
 * Version: 1.0
 */
console.log("Script is running");
// adding text to the fixed bottom navbar
const bottomNav = document.getElementsByClassName('navbar navbar-inverse navbar-fixed-bottom')
bottomNav[0].innerHTML = "&copy 2024 Adam LeBlanc";

// creating heading for all pages
var headingIndex = document.getElementsByTagName('h1');
headingIndex[0].innerHTML = "Lab 1 - Adam LeBlanc";


// Code to inject the text into the h1 tags of the corrosponding HTML pages
if(document.getElementsByClassName('indexHeading')){
    headingIndex[0].innerHTML = "Lab 1 - Adam LeBlanc";
}

// function to console log the contact info data
function contactLog() {
    let fName = document.getElementsByName("fname")[0].value;
    console.log(fName);

    let lName = document.getElementsByName("lname")[0].value;
    console.log(lName);

    let email = document.getElementsByName("email")[0].value;
    console.log(email);

    let phoneNumber = document.getElementsByName("phoneNumber")[0].value;
    console.log(phoneNumber);

    // Return false to prevent the form from submitting
    return false;
}

// getting the about my p element to inject the text
var aboutME = document.getElementsByName('aboutP');

// injecting the text into the p element
aboutME[0].innerHTML = 
"My name is Adam LeBlanc and I'm a 20 year old student currently in my fourth semester at durham college for computer programing." + 
"<br />I've grown up in the Durham Region my whole life. <br />"+
"Some of my hobbies are Cars, video games and hockey. " +
"I played hockey growing up which was a great way to meet people and learn about being part of a team. " + 
"Cars are something that feels like has always been a part of me. " + 
"Every summer I spend the weekends at car meets with my dad and friends. <br />" +
"Volunteer work is required for highshool, but for me it ended up being an experince I really enjoyed." +
" I ran card Bingo at an old age home and it was CHAOS which made it super fun !" + 
" It would get super competitive!";