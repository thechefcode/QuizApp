//Global Variables
const question = document.getElementById('question');
const res = document.getElementById('res');
const result = document.querySelector('.result') 
const inp = document.getElementById('inp')
const music = document.getElementById('music')

//Questions
const questions = [
  'Who is the president of Zambia',
  'Who is the former President of Zambia',
  'How many colors are on the zambian national flag',
  'The space Occupied by an object is called',
]

//Corresponding Answers
const answers = [
    'Hakainde Hichilema',
    'Edgar Lungu',
    'Four',
    'Volume'
]
//colors
const colors = ['#555eef', '#564ef3', '#ff53fe']


//Generate Random Question and color (Variables)
const randomIndex = (Math.floor(Math.random() * questions.length));
const randomQuestion = questions [randomIndex];
const randIndex = (Math.floor(Math.random() * colors.length));  
const randomColor = colors [randIndex];



init()

function init () {
    generateQuestion();
    res.addEventListener('submit', recieveAnswer)
    


}//Generate Random Question and color (Function)
function generateQuestion() {
    question.innerHTML = randomQuestion;
    question.style.color = randomColor;
}


//Recieve input, check answer and display results
function recieveAnswer (e) {
  e.preventDefault();
  for (i = 0; i <= questions.length; i++) {
    if (inp.value.toLowerCase() === answers[i]?.toLowerCase()) {
      var correctAnswer = (answers[i] = inp.value);
    }
  if (answers.indexOf(correctAnswer) != questions.indexOf(randomQuestion)) {
      result.innerHTML = "Wrong";
      result.style.color = "red"
    }
    else {
      result.innerHTML = "Correct"
      result.style.color = "#15da1f"
      inp.focus();
      inp.value = "";
         
    }
  }
  
}
