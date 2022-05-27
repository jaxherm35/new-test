//Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function sumZero(arr) {
    let start_point = 0
    let end_point = arr.length
    
    while (start_point < end_point) {
        if (arr[start_point] < 0) {
            for ( let find_point = start_point + 1; find_point < end_point; find_point++) {
                if (arr[start_point] + arr[find_point] === 0) {
                    return [arr[start_point], arr[find_point]]
                }
            }
        }
        start_point += 1;
    }
    return undefined
}
// Runtime = O(1)


//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
function uniqueCharacters(string) {
    for(let i = 0; i < string.length; i++)
    for(let j = 1 + 1; j < string.length; j++)
    if(string[i] === string[j])
    return false
}
//Runtime = O(1)

//Write a function to check a sentence to see if it is a pangram or not.
for(let i = 0; i < alphabet.length; i++){
    if(lowercase.indexOf(alphabet[i]) === -1){
      return "not pangram";
    }
}   return "pangram"
//Runtime = O(1)


//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
//Runtime = O(1)