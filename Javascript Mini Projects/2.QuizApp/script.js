const quizData = [
    {
        question: "Who invented JavaScript?",
        answers: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich",
          d: "John Doe"
        },
        correctAnswer: "c"
      },
      {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm",
          d: "php"
        },
        correctAnswer: "c"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint"
        },
        correctAnswer: "d"
      },
      {
          question : 'When was java developed?',
          answers:{
            a: '1996',
            b:'1976',
            c:'1995',
            d: '1997'
          },
          correctAnswer :"a"
      },
      {
          question : 'When was C++ developed?',
          answers:{
            a: '1990',
            b:'1985',
            c:'1980',
            d: '1978'
          },
          correctAnswer :"b"
      }
];
const quiz = document.querySelector('.quiz');
const container = document.querySelector('.container');
const answers = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const submitBtn = document.getElementById('submitBtn');

const atext = document.getElementById('a-text');
const btext = document.getElementById('b-text');
const ctext = document.getElementById('c-text');
const dtext = document.getElementById('d-text');

let currentQuiz = 0;
// let ans = undefined
let score = 0;

loadQuiz();
function loadQuiz(){
  deselectAnswers()

  const currectQuestion = quizData[currentQuiz]
  questionElement.innerHTML = currectQuestion.question;
  atext.innerText = currectQuestion.answers.a
  btext.innerText = currectQuestion.answers.b
  ctext.innerText = currectQuestion.answers.c
  dtext.innerText = currectQuestion.answers.d

  
}

function deselectAnswers(){
  answers.forEach((answer)=>{
    answer.checked = false
  })
}

function getSelected(){
  
  let i = undefined;
  answers.forEach((answer)=>{
    if(answer.checked){
      i = answer.id
      return i
    }
  });
  return i;
}

submitBtn.addEventListener('click',()=>{
  const ans = getSelected();
  console.log(ans)
  if(ans){
    if(ans === quizData[currentQuiz].correctAnswer)
    score++;
    currentQuiz++;
    if(currentQuiz < quizData.length)
    loadQuiz();
    else{
      quiz.innerHTML = `<h2> You answeres correctly to ${score} out of ${quizData.length} questions</h2>
      `
      submitBtn.innerText = 'Restart'
      submitBtn.addEventListener('click',()=>{
        location.reload()
      })
      
    }

  }

})