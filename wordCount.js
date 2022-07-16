// js functions that counts the lenght of a sentence
var sentence = prompt('Please type your sentence here');
var count = 0;
function wordCount(){
	for(var i = 0; i<=sentence.length; i++){
		count += 1;
	}
	return count;
}