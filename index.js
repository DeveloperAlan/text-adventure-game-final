var game = {
  start: function() {
    var readline = require('readline');

    var readlineThing = readline.createInterface({
    	input: process.stdin,
    	output: process.stdout
    });

    readlineThing.question("What is your name? ", function(answer) {
    	console.log('Hi there ' + answer + ", welcome to the game!")
    	readlineThing.close();
    })
  },
  restart: function() {
    game.start();
  }
}


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
  }
}

game.start();
