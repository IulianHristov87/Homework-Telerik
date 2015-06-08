//Problem 3. Occurrences of word
var input = prompt('Enter your text here'),
	word = prompt('Enter a word for search, search is case sensitive'),
	isCaseSensitive = true;
function f1(input, word, isCaseSensitive){

	var regexString = '\\b' + word + '\\b',
		modifier = isCaseSensitive ? 'g' : 'gi',
		regex = new RegExp(regexString, modifier);
		
	return input.match(regex).length;

		
	}
	
	console.log(f1(input, word, isCaseSensitive));