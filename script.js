var attitude=null;
    tools=null;
    wear=null;
    pageTitle = document.getElementById('page-title'),
    pageTitleText = pageTitle.innerHTML
    tryAgain=document.createElement("tryAgain");
    quizWrapper=document.createElement("quizWrapper");
    result=document.createElement("result");
    formSudmit=document.createElement("formSudmit");
    tryAgain.addEventListener("click", resetQuiz);
    formSudmit.addEventListener("click",processResults );

function processResults(){
attitude= document.querySelector('input[name="attitude"]:checked');
tools=document.querySelector('input[name="tools"]:checked');
wear=document.querySelector('input[name="wear"]:checked');
if(attitude== null){
  alert("Complete all questions before continuing.");
}else if (wear==null) {
  alert("Complete all questions before continuing.");
}else if(tools == null){
  alert("Complete all questions before continuing.");
}else{
  var personality = getPersonality()
  quizWrapper.style.display = "none"
  formSubmit.style.display = "none"
  result.style.display = "block"
  tryAgain.style.display = "block"
  if(personality == 0){
    pageTitle.innerHTML = "You're sata"
    result.style.backgroundImage = "url('img/stat.jpg')"
  }else if(personality == 1){
    pageTitle.innerHTML = "You're mayble"
    result.style.backgroundImage = "url('img/mayble.png')"
  }else if(personality == 2){
  pageTitle.innerHTML = "You're dipper"
  result.style.backgroundImage = "url('img/dipper.png')"
  }
  else if(personality == 3){
    pageTitle.innerHTML = "You're wendy"
    result.style.backgroundImage = "url('img/wendy.jpg')"
  }
}

}

function getPersonality(){
var score=0
if(attitude.id ==="outgoing"){
score += 0;
}
else if (attitude.id==="shellfish") {
score += 2;
}
else if (attitude.id==="Careful") {
score += 1;
}
else if (attitude.id==="Don't care") {
score += 3;
}

if(tools.id ==="Grappling hook"){
score += 0;
}
else if (tools.id==="Money") {
score += 2;
}
else if (tools.id==="AXE") {
score += 1;
}
else if (tools.id==="book") {
score += 3;
}

if(wear.id ==="sweater"){
score += 0;
}
else if (wear.id==="boots") {
score += 2;
}
else if (wear.id==="fez") {
score += 1;
}
else if (wear.id==="Vebook") {
score += 3;
}
if(score<=1){
  return sata
}
else if(score >=2||score<=3) {
  return mayble
}
else if(score>=4||score<= 5) {
  return dipper
}
else if(score>=6||score<= 7) {
  return wendy
}

}

function resetQuiz(){
	pageTitle.innerHTML =  pageTitleText
	quizWrapper.style.display = "flex"
	result.style.display = "none"
    tryAgain.style.display = "none"
    formSubmit.style.display = "block"
    time.checked = "false"
    asking.checked = "false"
    doing.checked = "false"
    time = null
    asking = null
    doing = null
}
