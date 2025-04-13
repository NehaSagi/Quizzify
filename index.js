/** Creating data set */
let readlineSync=require("readline-sync");
let kuler=require("kuler");
let score=0
let userName=readlineSync.question("What's your name-");
console.log(kuler("Hello "+userName+" welcome to Quizify\n","#8f33ff"));
console.log("Please select the correct option for the following questions \n")
//creating dataset
const database={
    data:[
      {
        question : "let a={} , b={} console.log(a==b) console.log(a===b)",
        options:{
          a:"false false",
          b:"false true", 
          c:"true false",
          d:"true true"
        },
        correctAnswer:"a"

      },
      {
        question : "Object.assign(targer,source) creates which type of copy",
        options:{
          a:"Deep copy",
          b:"Shallow copy",
          c:"Nested copy",
          d:"Creates new reference"
        },
        correctAnswer:"b"
      },
      {
        question : "Is the method chaining possible with forEach?",
        options:{
          a:"Yes",
          b:"No",
        
        },
        correctAnswer:"b"
      }

    ]
  
}
// Creating Leaderboard
const leaderBoard={
    data:[
      {
        name:"Ashish",
        score:1
      },
      {
        name:"Riya",
        score:3
      },
      {
        name:"Jay",
        score:2
      }
    ]
}
// Main Logic
function playGame(userAnswer,correctAnswer){
  if(userAnswer===correctAnswer){
    console.log(kuler("Correct answer","#59ff33"));
    score++;
  }
  else{
    console.log(kuler("Wrong answer","#e30d29"));
    console.log("")
  }
}
//showing questions
function showQuestionAndOptions(database){
  for(let i=0;i<database.data.length;i++){
  
console.log(`Q${i+1}-${database.data[i].question} `);
    console.log("\n");  
    for(let key in database.data[i].options){
        console.log(`${key}-${database.data[i].options[key]}`);
    }
    console.log("\n");
    let userAnswer=readlineSync.question("Enter your answer -(a/b/c/d) ").toLowerCase();
    playGame(userAnswer,database.data[i].correctAnswer);
  }
}
function highScore( leaderBoard){
  leaderBoard.data.push({name:userName,score:score});
  let sortedScoreList=leaderBoard.data.sort((a,b)=>b.score-a.score);
  console.log(kuler("\n Chek your position in leaderboard 🎊🎊","#f3ee35"));
 for(let leader of sortedScoreList){
   console.log(`${leader.name}-Score:${leader.score}`);
 }
}
showQuestionAndOptions(database);
console.log("\nYour score is-"+score);
highScore(leaderBoard);