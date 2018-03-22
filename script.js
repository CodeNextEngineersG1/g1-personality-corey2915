console.log("hi")
var attitude=null;
    tools=null;
    wear=null;
    pagetitle = document.getElementById('pagetitle');
    pageTitleText = pagetitle.innerHTML
    tryAgain=document.getElementById('tryAgain');
    quizWrapper=document.getElementById('quizWrapper');
    result=document.getElementById('result');
    fromSubmit=document.getElementById('fromSubmit');
    tryAgain.addEventListener("click", resetQuiz);
    fromSubmit.addEventListener("click",processResults );

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
console.log(personality)
  quizWrapper.style.display = "none"
  fromSubmit.style.display = "none"
  result.style.display = "block"
  tryAgain.style.display = "block"
  if(personality == "sata"){
    pagetitle.innerHTML = "You're sata"
    result.style.backgroundImage = "url('img/stat.jpg')"
  }else if(personality == "mayble"){
    pagetitle.innerHTML = "You're mayble"
    result.style.backgroundImage = "url('img/mayble.png')"
  }else if(personality == "dipper"){
  pagetitle.innerHTML = "You're dipper"
  result.style.backgroundImage = "url('img/dipper.png')"
  }
  else if(personality == "wendy"){
    pagetitle.innerHTML = "You're wendy"
    result.style.backgroundImage = "url('img/wendy.jpg')"
  }
}

}

function getPersonality(){
var score=0
if(attitude.id ==="Outgoing"){
score += 0;
}
else if (attitude.id==="Shellfish") {
score += 2;
}
else if (attitude.id==="Careful") {
score += 1;
}
else if (attitude.id==="Don’t care") {
score += 3;
}
console.log("attitude score");
console.log(score);
if(tools.id ==="Grappling hook"){
score += 0;
}
else if (tools.id==="Money") {
score += 2;
}
else if (tools.id==="Axe") {
score += 1;
}
else if (tools.id==="Book") {
score += 3;
}
console.log("tools score");
console.log(score);
if(wear.id ==="Sweater"){
score += 0;
}
else if (wear.id==="Boots") {
score += 2;
}
else if (wear.id==="Fez") {
score += 1;
}
else if (wear.id==="Vest") {
score += 3;
}
console.log("end score");
console.log(score);
if(score<=1){
  return "sata"
}
else if(score >=2 &&score<=3) {
  return "mayble"
}
else if(score>=4&&score<= 5) {
  return "dipper"
}
else if(score>=6&&score<= 10) {
  return "wendy"

}


}

function resetQuiz(){
	pagetitle.innerHTML =  pageTitleText
	quizWrapper.style.display = "flex"
	result.style.display = "none"
    tryAgain.style.display = "none"
    fromSubmit.style.display = "block"
    attitude.checked = false
    tools.checked = false
    wear.checked = false
    attitude=null;
        tools=null;
        wear=null;
}
