const question = [
  {
    que: "Who is first Prsident of india in our Constitution?",
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
  {
    que: "Which is highest pick of Aravali Hills ?",
    a: "Dhupgarh",
    b: "Anarmkonda",
    c: "Gurushikhar",
    d: "Nanga mountain",
    correct: "c",
  },
  {
    que: "Which is River of following largest of Gujarat ?",
    a: "Sabarmati",
    b: "Narmada",
    c: "Shetrunji",
    d: "Mahi",
    correct: "b"
  }
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
        mainQuestion.innerText = `(${index+1}) ${data.que}`;
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
document.getElementById("next").onclick=function(e){
  e.preventDefault()
  index++;
  dataScript();
  if(index==(total-1)){
    document.getElementById("next").innerText="End";
  }
}
document.getElementById("prev").onclick=function(e){
  e.preventDefault()
  index--;
  dataScript();
  if(index!=(total-1)){
    document.getElementById("next").innerHTML=`<span class="material-symbols-outlined">
    arrow_forward
    </span>`;
  }
}

function endQuestion(){
    document.getElementById("content").innerHTML=`
        <h3>Thank you your response Submitted...<br>Your Score is <u>${right} Out of ${total}</u> Question</h3>
    `;
}
