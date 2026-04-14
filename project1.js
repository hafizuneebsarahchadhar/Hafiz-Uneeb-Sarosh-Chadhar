const quizData = [
  {
    question: "HTML ka full form kya hai?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Making Language",
      "Home Tool Markup Language"
    ],
    correct: 0
  },
  {
    question: "HTML me paragraph ke liye kaunsa tag hota hai?",
    options: ["<h1>", "<br>", "<p>", "<span>"],
    correct: 2
  },
  {
    question: "Image ke liye kaunsa tag use hota hai?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    correct: 0
  },
  {
    question: "Hyperlink ke liye kaunsa tag hota hai?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correct: 0
  },
  {
    question: "HTML file ka extension kya hota hai?",
    options: [".html", ".css", ".js", ".php"],
    correct: 0
  }
];

const questionEl = document.querySelector("#question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const btn = document.querySelector(".btn");
const answers = document.querySelectorAll("input");

let currentQuiz = 0;
let score = 0;

// LOAD QUESTION
function loadQuiz() {
  deselect();

  const data = quizData[currentQuiz];

  questionEl.innerText = data.question;
  option1.innerText = data.options[0];
  option2.innerText = data.options[1];
  option3.innerText = data.options[2];
  option4.innerText = data.options[3];
}

// GET SELECTED
function getSelected() {
  let answer;

  answers.forEach((cur) => {
    if (cur.checked) {
      answer = cur.id;
    }
  });

  return answer;
}

// UNCHECK
function deselect() {
  answers.forEach((cur) => cur.checked = false);
}

// BUTTON CLICK
btn.addEventListener("click", () => {
  const selected = getSelected();

  if (selected === undefined) {
    alert("Answer select karo!");
    return;
  }

  if (parseInt(selected) === quizData[currentQuiz].correct) {
    score++;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    document.querySelector(".quiz").innerHTML = `
      <h2>Quiz Finished 🎉</h2>
      <h3>Your Score: ${score}/${quizData.length}</h3>
      <button onclick="location.reload()">Restart</button>
    `;
  }
});

// FIRST LOAD
loadQuiz();