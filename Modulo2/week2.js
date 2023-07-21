/*function addTwoNums(a,b) {
    var c = a + b;
    console.log(c);
}
addTwoNums(2,3);



var train1 = ["wheat", "barley", "potato", "salt", "rocks"];
console.log(train1[0]);


function letterFinder(word, match){
    for (i=0; i<word.length; i++){
        if (word[i]==match){
            console.log("Found it!",i);
        }
        else{
            console.log("Not here!");
        }
    }
}

letterFinder("test","t");


var assitantManager = {
    name: "John",
    age: 27,
    salary: 50000,
    department: "Sales",
    hireDate: "January 1, 2016",
}
console.log(assitantManager.name);

assitantManager.salary = 60000;

console.log(assitantManager.salary);


var decimal = Math.random();

console.log(decimal);

var ropa = [];
ropa.push("shirt");
ropa.push("pants");
ropa.push("socks");
ropa.push("shoes");
ropa.push("hat");
ropa.pop(4);
ropa.push("jacket");
console.log(ropa[2]);
var facvar = {
    color : "blue",
    convertible : true,
}
console.log(facvar);


var noise;

console.log(noise);


function addTwoNums(a,b){
    try{
        if (typeof (a) != "number"){
            throw "a is not a number";
        }
        else if (typeof (b) != "number"){
            throw "b is not a number";
        }
        else{
            console.log(a+b);
        }
    }
    catch(err){
        console.log("Error!",err);
    }
}

addTwoNums(5,"5");
console.log("Still Works");

function letterFinder(word, match) {
    condition1 = typeof(word) == "string" && word.length >=2;
    condition2 = typeof(match) == "string" && match.length == 1;
    if (condition1 && condition2 == true ) {
        for(i = 0; i < word.length; i++) { 
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }
    else {
        console.log("pass correct arguments to the function")
    }
}

letterFinder("test", "t");


try {
    console.log('hello)
    } catch(e) {
    console.log('caught')
    }
    var str = "Hello";
    str.match("jello");
    */
   