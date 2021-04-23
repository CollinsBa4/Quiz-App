const username = document.getElementById('username');
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const test = document.getElementById('test');

const highScores = JSON.parse(localStorage.getItem("highScores"));
const MAX_HIGH_SCORES = 5;
console.log(highScores);

console.log(JSON.parse(localStorage.getItem("highScores")));
finalScore.innerText = mostRecentScore;


username.addEventListener("keyup", () => {
    //console.log(username.value);
   saveScoreBtn.disabled = !username.value;


});

test.addEventListener("keyup", () => {
    //console.log(username.value);

   saveScoreBtn.disabled = !test.value;

});



saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();

 
const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value,
    test: test.value

};

highScores.push(score);
highScores.sort((a,b) => b.score - a.score);
highScores.splice(5);
localStorage.setItem("highScores", JSON.stringify(highScores));
window.location.assign("/");
 


};


