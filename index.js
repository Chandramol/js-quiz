const question = [
  {
    que: "Who is first Prsident if india?",
    a: "Neelam sanjiv reddy",
    b: "Rajendra Prasad",
    c: "Zakir Husen",
    d: "Ramnath kovind",
    correct: "b",
  },
  {
    que: "First king of maurya Empire?",
    a: "Ashok",
    b: "Bindusar",
    c: "Chandragupta",
    d: "Acharya Chankya",
    correct: "c",
  },
  {
    que: "Where is located kaziranga natinal park?",
    a: "Madhya Pradesh",
    b: "Karnataka",
    c: "Assam",
    d: "Zarkhand",
    correct: "c",
  },
];

let index = 0;
let total=question.length;
let right = 0,
  wrong = 0;
let mainQuestion = document.getElementById("mainQue");
let optionIn = document.querySelectorAll(".option");

function dataScript() {
    if(total==index){
        endQuestion();
    }
    else{
        resetOption()
        let data = question[index];
        mainQuestion.innerText = data.que;
        optionIn[0].nextElementSibling.innerText = data.a;
        optionIn[1].nextElementSibling.innerText = data.b;
        optionIn[2].nextElementSibling.innerText = data.c;
        optionIn[3].nextElementSibling.innerText = data.d;
    }
}
dataScript();

document.getElementById("submit").onclick = function () {
  let data = question[index];
  let ans = answer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  dataScript();
};

function answer() {
  optionIn.forEach((input) => {
    if (input.checked) {
      ans= input.value;
    }
  });
  return ans;
}
function resetOption(){
    optionIn.forEach((input) => {
        input.checked=false;
      });
}

function endQuestion(){
    document.getElementById("content").innerHTML=`
        <h3>Your Questions are finished and Score is ${right} Out of ${total} Question</h3>
    `;
}
