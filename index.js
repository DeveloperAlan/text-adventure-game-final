//NPM module for readline.
var readline = require('readline');

//Instiatiate a new instance using readline class. Will teach classes and new instances in the next class.
var readlineThing = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Game object which starts and can also restart the project at any point during the program. You can call this by typing in game.start or game.restart
var game = {
    start: function() {
        initialize();
    },
    restart: function() {
        game.start();
    }
}

//initialize function that initializes the game when the game.start function has been called. Whwat the function does is ask the user for a name and then proceeds to do the next function, which is askClass()
function initialize() {
    readlineThing.question("What is your name? ", function(answer) {
        Name(answer);
        console.log('Hi there ' + answer + ", welcome to the game!")
        askClass();
    })
}


//askClass function that askes the user what class they would like to be.
function askClass() {
    readlineThing.question("Choose your class: (Mage, Warrior, Thief) ", function(answer) {
        chooseClass(answer);
        askGender();
    })
}


//askGender function that asked the user what gender their character would liek to be.
function askGender() {
    readlineThing.question("Choose your gender: ", function(answer) {
        gender(answer);
        console.log(Player);
        readlineThing.close();
    })
}


//Start lesson plan from here
//location object that tells the player where they are in the world at the moment.
var location = {
    town: {
        NPC: [],
        Monsters: null,        
    }, 
    woods: {
        NPC: [],
        Monseters: finalBoss
    },
};


//Player default object so that the students understand what the object would be.
var Player = {
    name: "Alan",
    race: "Human",
    class: "Mage",
    gender: "Male",
    health: 20,
    skill: {
        1: null,
        2: null,
        3: null
    },
    eat: function() {
        if (Player.health == 19) {
            health = 20;
        } else if (Player.health == 20) {
            console.log("You are on full health. Stop eating.");
        } else {
            health = health + 2;
        }
    }
}


//finalBoss character/enemy so that the students understand what the finalBoss looks like.
var finalBoss = {
    name: "Alan",
    health: 100,
    skill: {
        attack: function() {
            console.log("get rekt scrub, mlg 360 no scope");
            Player.health = Player.health - 10;
        },
        taunt: function() {
            console.log("go home noob");
        }
    }
}

//Set function for name.
function Name(answer) {
    Player.name = answer;
}

//Set function for gender
function gender(answer) {
    Player.gender = answer;
}

//Set function for class with parameters if the character is chose the wrong class.
function chooseClass(answer) {
    Player.class = answer;
    Player.skill["1"] = function() {
        console.log("Take this @#%!@#@!#!@!");
        finalBoss.health = finalBoss.health - 10;
    }
    if (Player.class == "Mage") {
        //Player.health = 10;
        Player.skill["2"] = function() {
            console.log("Eat fire");
            finalBoss.health = finalBoss.health - 20;
        }
        Player.skill["3"] = function() {
            console.log("I haz more health");
            if (Player.health > 10) {
                Player.health = 20;
            } else {
                Player.health = Player.health + 10;
            }
        }
    } else if (Player.class == "Thief") {
        //Player.health = 10;
        Player.skill["2"] = function() {
            console.log("Stabby stab stab");
            finalBoss.health = finalBoss.health - 20;
        }
        Player.skill["3"] = function() {
            console.log("Eat my arrow");
            finalBoss.health = finalBoss.health - 15;
        }
    } else if (Player.class == "Warrior") {
        //Player.health = 10;
        Player.skill["2"] = function() {
            console.log("Shanking intensifies");
            finalBoss.health = finalBoss.health - 10;
            console.log("Shanking intensifies");
            finalBoss.health = finalBoss.health - 10;
        }
        Player.skill["3"] = function() {
            console.log("This skill is a placeholder. It does nothing.");
        }
    } else {
        readlineThing.question("Please enter a valid class: ", function(answer) {
            chooseClass(answer);
        })
    }
}


//Starts the game
game.start();
