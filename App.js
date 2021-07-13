var questions = [
    {
        question: "What Come after 'A'",
        Option: ["C", "E", "B", "I"],
        ans: 2
    },
    {
        question: "What Come after 'I'",
        Option: ["R", "H", "M", "J"],
        ans: 3
    },
    {
        question: "What Come after 'P'",
        Option: ["C", "Q", "B", "M"],
        ans: 1
    },
    {
        question: "What Come after 'T'",
        Option: ["A", "E", "U", "W"],
        ans: 2
    },
    {
        question: "What Come after 'Q'",
        Option: ["R", "E", "Z", "I"],
        ans: 0
    },
    {
        question: "What Come after 'W'",
        Option: ["Z", "S", "B", "X"],
        ans: 3
    },
    {
        question: "What Come after 'K'",
        Option: ["L", "M", "J", "O"],
        ans: 0
    },
    {
        question: "What Come after 'Y'",
        Option: ["X", "Z", "V", "R"],
        ans: 1
    },
    {
        question: "What Come after 'D'",
        Option: ["C", "E", "B", "I"],
        ans: 1
    },
    {
        question: "What Come after 'O'",
        Option: ["R", "E", "P", "I"],
        ans: 2
    },
]

var qno = 0;
var score = 0;
var totalQ = questions.length;


var main = document.getElementById("input-box");
var q = document.getElementById("q");
var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var opt4 = document.getElementById("option4");
var result = document.getElementById("result");
var nxt = document.getElementById("nxt");



q.innerHTML = ("Qno : " + questions[qno].question + " ?")
opt1.innerText = (questions[qno].Option[0])
opt2.innerText = (questions[qno].Option[1])
opt3.innerText = (questions[qno].Option[2])
opt4.innerText = (questions[qno].Option[3])

function loadnext() {
    q.innerHTML = ("Qno : " + questions[qno].question + "?") 
    opt1.innerText = (questions[qno].Option[0])
    opt2.innerText = (questions[qno].Option[1])
    opt3.innerText = (questions[qno].Option[2])
    opt4.innerText = (questions[qno].Option[3])
}
function next() {
    var selectoption = document.querySelector('input[type=radio]:checked')
    if (!selectoption) {
        alert("Please! Select Any One Option")
        return;
    }
    var answer = selectoption.value;
    if (questions[qno].ans == answer) {
        score += 10
    }
    selectoption.checked = false;
    qno++
    if(qno == totalQ - 1){
        nxt.textContent = "Finish";
    }
    if (qno  == totalQ) {
        main.style.display = "none";
        nxt.style.display="none";
        result.style.display = "";
        result.textContent = "Your Score Is : " + score + "%";
        return
    }
    loadnext()
}
loadnext()
console.log(result)



function start() {
    var x = document.getElementById("name");
    var y = document.getElementById("rollnumber")
    if (x.value == "" || x.value == " ") {
        alert("Please Fill Out Enter Your Name")
    }
    console.log(x.value)
    console.log(y.value)
}