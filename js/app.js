// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
//these below arrays have all the possible values of each part of the sentences
const synth = window.speechSynthesis;
var part_1_List = ["The Turkey ","My Mom ","Dad ","My teacher ","The Elephant ","The cat ","The dog "];//nouns 7 of them
var part_2_List = ["sat on ","danced with ","saw ","doesn't like ","kissed ","ate "];//verbs 6 of them
var part_3_List = ["a funny ","a scary ","a goofy ","a slimy ","a barking ","a fat " ];//adjectives 6 of them
var part_4_List = ["goat ","monkey ","fish ","cow ","frog ","bug ","worm "];//seconds noun 7 of them
var part_5_List = ["on Moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];//loaction 6 of them
//these varaibals will hold the values of above arrays so that we can create sentences and play last sentence
var part_1_holder;
var part_2_holder;
var part_3_holder;
var part_4_holder;
var part_5_holder;
//buttons associated with arrays;
let part_1_button = document.getElementById('subject');
let part_2_button = document.getElementById('verb');
let part_3_button = document.getElementById('adjective');
let part_4_button = document.getElementById('secondNoun');
let part_5_button = document.getElementById('location');








// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
const speakButton = document.getElementById('sentence');
const randomSentence = document.getElementById('sentence2');

let textToSpeak = 'This is the text string that you will generate with your script';

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	console.log(string);
	synth.speak(utterThis);
}
//this function will take our array and an random number to choose from array
function returnArrayElement(arr,randomSelection){
	
	var output;
	//arrays were of max of length 7 so random number will be given till there, if array was shorter first element 
	//will be selectd by this if statement
	if(randomSelection < arr.length){
		  output = arr[randomSelection];
	}else{
		randomSelection=0;
		output = arr[randomSelection];
	}
	
	
	return output;
}
//random number generator, max length of array was 7
function randomArrayElement(){
	var x= Math.floor(Math.random()*7 + 1);
	console.log(x);
	return x;
	
}


/* Event Listeners
-------------------------------------------------- */
// The click event handler for the button that speaks the text contained in the above var textToSpeak
speakButton.addEventListener('click', function () {
	speakNow(part_1_holder + part_2_holder + part_3_holder + part_4_holder + part_5_holder);
});
//to generate a new random sentecne and store it in playback we must call these below functions again
randomSentence.addEventListener('click',function(){
	part_1_holder = returnArrayElement(part_1_List,randomArrayElement());
	part_2_holder = returnArrayElement(part_2_List,randomArrayElement());
	part_3_holder = returnArrayElement(part_3_List,randomArrayElement());
	part_4_holder = returnArrayElement(part_4_List,randomArrayElement());
	part_5_holder = returnArrayElement(part_5_List,randomArrayElement());
	speakNow(part_1_holder + part_2_holder + part_3_holder + part_4_holder + part_5_holder);


})
//these below event listners are assigning selected array value to holders and then passing them to speaker
part_1_button.addEventListener('click',function(){
	part_1_holder = returnArrayElement(part_1_List,randomArrayElement());
	speakNow(part_1_holder);
	
});

part_2_button.addEventListener('click',function(){
	part_2_holder = returnArrayElement(part_2_List,randomArrayElement());
	speakNow(part_2_holder);
});

part_3_button.addEventListener('click',function(){
	part_3_holder = returnArrayElement(part_3_List,randomArrayElement());
	speakNow(part_3_holder);
});

part_4_button.addEventListener('click',function(){
	part_4_holder = returnArrayElement(part_4_List,randomArrayElement());
	speakNow(part_4_holder);
});

part_5_button.addEventListener('click',function(){
	part_5_holder = returnArrayElement(part_5_List,randomArrayElement());
	speakNow(part_5_holder);
});

