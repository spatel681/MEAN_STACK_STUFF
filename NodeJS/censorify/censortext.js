var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];

function cesor(inStr){
	for (idx in cesoredWords){
		inStr = inStr.replace(censoredWords[idx], "****");
	}
	for (idx in customCensoredWords){
		inStr = inStr.replace(customCensoredWords[idx], "****");
	}
	return inStr;
}

function addCensoredWord(word){
	customCensoredWords.push(word);
}

function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;