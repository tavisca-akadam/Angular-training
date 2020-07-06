var statements = new Array();
statements.push("lorem Ipsum is simply dummy text of the printing and typesetting industry.");
statements.push("lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
statements.push("it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
statements.push("it was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");
/* Task1 : Convert a string in Statement Case (First character after . must be in upper case) */
console.log("***********************************Task 1*************************************");
statements.forEach(function (str, i) {
    str = str.replace(str.charAt(0), str.charAt(0).toUpperCase());
    console.log(str);
});
console.log();
/*Task 2: Print number of words in the string (string in between two blank spaces) */
console.log("***********************************Task 2*************************************");
statements.forEach(function (str, i) {
    console.log("No of words in " + str + " are " + str.split(" ").length);
});
/*Task 3: List all strings having character 'a' in it. */
console.log("***********************************Task 3*************************************");
function isContains(arg1, arg2) {
    arg1.forEach(function (str) {
        if (str.includes(arg2))
            console.log(str);
    });
}
console.log();
console.log("The below words contains character 'a' => ");
statements.forEach(function (str, i) {
    isContains(str.split(" "), "a");
});
/*Task 4: Print number of matching Words in string. e.g. the word 'the' occurs 10 times. */
console.log("***********************************Task 4*************************************");
function isMatch(arg1, arg2, arg3) {
    arg1.forEach(function (str) {
        if (str === arg2)
            arg3++;
    });
    return arg3;
}
console.log();
var occurance = 0;
var findingWord = "the";
statements.forEach(function (str, i) {
    occurance = isMatch(str.split(" "), findingWord, occurance);
});
console.log("The word '" + findingWord + "' occured " + occurance + " times.");
