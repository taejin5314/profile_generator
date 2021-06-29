const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const result = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (answer1) => {
  result.name = answer1;
  rl.question("What's an activity you like doing? ", (answer2) => {
    result.activity = answer2;
    rl.question("What do you listen to while doing that? ", (answer3) => {
      result.music = answer3;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
        result.meal = answer4;
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          result.food = answer5;
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            result.sports = answer6;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              result.superpower = answer7;
              rl.close();
              console.log(`\nThank you for your valuable feedback:\nYour name is ${result.name}, and your favorite activity is ${result.activity}.\nYon love listening to ${result.music}, your favorite meal is ${result.meal}.\nYour favorite food is ${result.food}, and your favorite sports is ${result.sports}.\nLastly, your superpower is ${result.superpower}!!`);
            });
          });
        });
      });
    });
  });
});

