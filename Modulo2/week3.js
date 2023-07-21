// functional programming
/*var shoes = 100;
var statetax = 0.07;

function tax(shoes, statetax) {
    return shoes * statetax
}

var topay = tax(shoes, statetax);
console.log(topay);

//oop

var purchase1 = {
    shoes: 100,
    statetax: 0.07,
    totalPrice: function() {
        var calculation = purchase1.shoes * purchase1.statetax;
        console.log("total price",calculation);
    }
}

purchase1.totalPrice();

console.log("------------------------------------------------------------------------------")

class Train {
    constructor(color , lightson) {
        this.color = color;
        this.lightson = lightson;
    }
    toogleLights() {
        this.lightson = !this.lightson;
    }
    ligthstatus() {
        console.log("lights on?", this.lightson)
    }
    getself(){
        console.log(this);
    }
    getProtoype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }    
}

var myfirstrain = new Train ("red", "false");
var mysecondtrain = new Train ("blue", "true");
var mythirdtrain = new Train ("green", "false");
var myfourthtrain = new Train ("yellow", "true");

myfourthtrain.toogleLights();
myfourthtrain.ligthstatus();
console.log(myfourthtrain);
myfourthtrain.getself();
myfourthtrain.getProtoype();

class HighSpeedTrain extends Train {
    constructor( passengers, highSpeedOn , color , lightson){
        super(color, lightson);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log("high speed on?", this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLigths();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myfirsthighspeedtrain = new HighSpeedTrain ("100", "true", "red", "true "); 
console.log(myfirsthighspeedtrain);
myfirsthighspeedtrain.ligthstatus();

console.log("------------------------------------------------------------------------------")
console.log("------------------------------------------------------------------------------")
console.log("------------------------------------------------------------------------------")
console.log("Diseño de un programa OOP de animales")

class Animal {
    constructor(color, energy){
        this.color = color;
        this.energy = energy;
    }
    isActive(){
        if (this.energy > 0) {
            this.energy = this.energy - 20;
            console.log("energy", this.energy);
        }
        else if (this.energy==0) {
            this.sleep();
        }
    }
    sleep(){
        this.energy += 20;
        console.log("The animal went to sleep and now energy increasing", this.energy);
    }
    getColor(){
        console.log(this.color);
    }
}

class Cat extends Animal{
    constructor(color,energy, sound, canJumpHigh, canCllimbTrees){
        super(color,energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canCllimbTrees = canCllimbTrees;
    }
    makeSound(){
        console.log(this.sound)
    }
}

class Bird extends Animal{
        constrcutor(color, energy, sound, canFly , makeSound){
            super(color,energy);
            this.sound = sound;
            this.canFly = canFly;
            this.makeSound = makeSound;
        }
        makeSound() {
            console.log(this.sound);
        }
}
class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

console.log("------------------------------------------------------------------------------")
console.log("------------------------------------------------------------------------------")
console.log("------------------------------------------------------------------------------")


const fruits = ["apple", "orange", "banana", "mango", "apple", "pineapple", "apple", "orange", "banana", "mango", "apple", "pineapple", "apple", "orange", "banana", "mango", "apple", "pineapple", "apple", "orange", "banana", "mango", "apple", "pineapple", "apple", "orange", "banana", "mango"];
const berries = ["bluberry", "strawberry"];
const fruitsAndBerries = [...fruits, ...berries];
console.log(fruitsAndBerries);
*/
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);
console.log(set);

function scopeTest() {
    var y = 44;

    console.log(x);
}

var x = 33;
scopeTest();


