const { dochub } = require("fontawesome");

/**
 * Program: Lab-1-app
 * Programmer: Adam LeBlanc
 * Date Updated: 2024-02-05
 * Version: 1.0
 */
console.log("Script is running");

// creating consants for all the heading elemnts
var headingIndex = document.getElementsByClassName('indexHeading');
var headingAbout = document.getElementsByClassName('headingAbout');
var headingContact = document.getElementsByClassName('headingContact');
var headingServices = document.getElementsByClassName('headingService');
var headingProducts = document.getElementsByClassName('headingProducts');

console.log(headingIndex);

// creating variables for the heading text to be injected into the elements
const headingIndexText = "Lab 1 - Adam LeBlanc";
const headingAboutText = "About Me";
const headingContactText = "Contact Me";
const headingServicesText = "Services";
const headingProductsText = "Products";

// Code to inject the text into the h1 tags of the corrosponding HTML pages
if(document.getElementsByClassName('indexHeading')){
    headingIndex[0].innerHTML = "Lab 1 - Adam LeBlanc";
}else if(document.getElementsByClassName('headingAbout')){
    headingAbout[0].innerHTML = "About Me";
}else if(document[0].getElementsByClassName('headingContact')){
    headingContact[0].innerHTML = "Contact Me";
}else if(document.getElementsByClassName('.headingService')){
    headingServices[0].innerHTML = "Services";
}else if(document.getElementsByClassName('headingProducts')){
    headingServices[0].innerHTML= "Products";
}

// function to console log the contact info data
function contactLog(e){
    let fName = document.getElementsByName("fname");
    console.log(fName);
    let lName = document.getElementsByName("lname");
    console.log(lName);
    let email = document.getElementsByName("email");
    console.log(email);
    let phoneNumber = document.getElementsByName("PhoneNumber");
    console.log(phoneNumber);
}