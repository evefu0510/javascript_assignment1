//Student Name: Yijun Fu; Student ID: 200552722
// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */

// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const reset = document.getElementById("reset");
const addStudentId = document.getElementById("addStudentId");

// Constants for p tag to display query selectors
var choosenNoun1 = document.querySelector("#choosenNoun1");
var choosenVerb = document.querySelector("#choosenVerb");
var choosenAdjective = document.querySelector("#choosenAdjective");
var choosenNoun2 = document.querySelector("#choosenNoun2");
var choosenSetting = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
const storyParagraph = document.getElementById("story");
const studentIdElement = document.getElementById("studentId");

// Variables for pre-defined arrays
var noun1 = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
var verb = ['sat down', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
var adjective = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var noun2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var setting = ['on the moon.', 'on the chair.', 'in my spaghetti.', 'in my soup.', 'on the grass.', 'in my shoes.'];

// Variables for count to grab array elements
let countNoun1 = 0;
let countVerb = 0;
let countAdjective = 0;
let countNoun2 = 0;
let countSetting = 0;
let studentId = "200552722";
let studentName = "Yijun Fu";

/* Functions
-------------------------------------------------- */

// Function to change background color to a random color
function changeBackgroundColor(){
    var randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    // Apply the random color to the body background
    document.body.style.backgroundColor = randomColor;
}

// Event handler functions for each button click
function noun1_on_click() {
    choosenNoun1.textContent = noun1[countNoun1];
    if(countNoun1 === noun1.length){
        countNoun1 = 0;
    }else{
        countNoun1++;
    }
    changeBackgroundColor();
}

function verb_on_click() {
    choosenVerb.textContent = verb[countVerb];
    if(countVerb === verb.length){
        countVerb = 0;
    }else{
        countVerb++;
    }
    changeBackgroundColor();
}

function adjective_on_click() {
    choosenAdjective.textContent = adjective[countAdjective];
    if(countAdjective === adjective.length){
        countAdjective = 0;
    }else{
        countAdjective++;
    }
    changeBackgroundColor();
}

function noun2_on_click() {
    choosenNoun2.textContent = noun2[countNoun2];
    if(countNoun2 === noun2.length){
        countNoun2 = 0;
    }else{
        countNoun2++;
    }
    changeBackgroundColor();
}

function setting_on_click() {
    choosenSetting.textContent = setting[countSetting];
    if(countSetting === setting.length){
        countSetting = 0;
    }else{
        countSetting++;
    }
    changeBackgroundColor();
}

// Concatenate the user story and display
function playback_on_click() {
    var story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}`;
    storyParagraph.textContent = story;
    changeBackgroundColor();
}

// Grabbing random element from arrays, concatenate and display
function random_on_click() {
    choosenNoun1.textContent = noun1[Math.floor(Math.random() * noun1.length)];
    choosenVerb.textContent = verb[Math.floor(Math.random() * verb.length)];
    choosenAdjective.textContent = adjective[Math.floor(Math.random() * adjective.length)];
    choosenNoun2.textContent = noun2[Math.floor(Math.random() * noun2.length)];
    choosenSetting.textContent = setting[Math.floor(Math.random() * setting.length)];
    changeBackgroundColor();
}

// Function to reset the story and related variables
function resetStory(){
    choosenNoun1.textContent = "";
    choosenVerb.textContent = "";
    choosenAdjective.textContent = "";
    choosenNoun2.textContent = "";
    choosenSetting.textContent = "";
    storyParagraph.textContent = "";

    countNoun1 = 0;
    countVerb = 0;
    countAdjective = 0;
    countNoun2 = 0;
    countSetting = 0;

    document.body.style.backgroundColor = '#f0f0f0';
}

// Function to add student ID information
function addStudentID(){
    studentIdElement.textContent = `Student ID: ${studentId}; Student Name: ${studentName}`;
}

/* Event Listeners
-------------------------------------------------- */

// Event listeners for each button click
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
reset.addEventListener("click", resetStory);
addStudentId.addEventListener("click", addStudentID);
