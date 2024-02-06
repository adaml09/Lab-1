//const { dochub } = require("fontawesome");
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

// creating consants for all the heading elemnts
var headingIndex = document.getElementsByTagName('h1');
headingIndex[0].innerHTML = "Lab 1 - Adam LeBlanc";
//var headingAbout = document.getElementsByClassName('headingAbout');
headingAbout[1].innerHTML = "About Me";
//var headingContact = document.getElementsByClassName('headingContact');
headingContact[2].innerHTML = "Contact Me";
//var headingServices = document.getElementsByClassName('headingService');
headingServices[3].innerHTML = "Services";
//var headingProducts = document.getElementsByClassName('headingProducts');
headingProducts[4].innerHTML = "Products"

console.log(headingIndex);

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