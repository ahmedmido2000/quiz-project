// let questions=[
//     {
//         "quez":"What is CSS?",
//         "firstAns":"CSS is a style sheet language",
//         "secondAns":"CSS is designed to separate the presentation and content, including layout, colors, and fonts",
//         "thirdAns":"CSS is the language used to style the HTML documents",
//         "fourthAns":"All of the mentioned",
//         "ans":"All of the mentioned"
//     },
//     {
//         "quez":"Which of the following CSS selectors are used to specify a group of elements?",
//         "firstAns":"tag",
//         "secondAns":"id",
//         "thirdAns":"class",
//         "fourthAns":"both class and tag",
//         "ans":"class"
//     },
//     {
//         "quez":"Which of the following has introduced text, list, box, margin, border, color, and background properties?",
//         "firstAns":"HTML",
//         "secondAns":"PHP",
//         "thirdAns":"CSS",
//         "fourthAns":"Ajax",
//         "ans":"CSS"
//     },
//     {
//         "quez":"Which of the following CSS framework is used to create a responsive design?",
//         "firstAns":"django",
//         "secondAns":"rails",
//         "thirdAns":"larawell",
//         "fourthAns":"bootstrap",
//         "ans":"bootstrap"
//     },
//     {
//         "quez":"Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
//         "firstAns":"tag",
//         "secondAns":"id",
//         "thirdAns":"class",
//         "fourthAns":"both class and tag",
//         "ans":"id"
//     },
//     {
//         "quez":"Which of the following CSS property is used to make the text bold?",
//         "firstAns":"text-decoration: bold",
//         "secondAns":"font-weight: bold",
//         "thirdAns":"font-style: bold",
//         "fourthAns":"text-align: bold",
//         "ans":"font-weight: bold"
//     },
//     {
//         "quez":"Which of the following CSS style property is used to specify an italic text?",
//         "firstAns":"style",
//         "secondAns":"font",
//         "thirdAns":"font-style",
//         "fourthAns":"@font-face",
//         "ans":"font-style"
//     }
// ]
// let head=document.querySelector(".exercise")
// let option1= document.querySelector(".option1 label")
// let option2= document.querySelector(".option2 label")
// let option3= document.querySelector(".option3 label")
// let option4= document.querySelector(".option4 label")

// let rightAns;


// //   head.forEach((one)=>{
//   //   one.innerHTML=questions[rand].quez
//   // })
//  function generate(){
//   rand=Math.floor(Math.random()*questions.length)
//   wordInd=questions.indexOf(rand)
//   head.innerHTML=questions[rand].quez
//   option1.innerHTML=questions[rand].firstAns
//   option2.innerHTML=questions[rand].secondAns
//   option3.innerHTML=questions[rand].thirdAns
//   option4.innerHTML=questions[rand].fourthAns
//   questions.splice(wordInd,1)
//   console.log(questions);
//   rightAns= questions[rand].ans 
//   console.log(rightAns);
//  }

//  window.onload=function(){
//   generate()
//  }
// let comfirmBTN=document.querySelector(".confirm")
// let radios=document.querySelectorAll("input[type='radio']")
// let anss=0;

// comfirmBTN.onclick=function (){
//   localStorage.setItem("score",anss)
//   if(questions.length==0){
//     window.location="./result.html"
//     document.querySelector(".score-value").innerHTML=anss
//   }
//   if(answers==rightAns){
//     anss++
//     console.log(anss);
//   }
//   generate()
// }
// // console.log(anss);
// // document.querySelector(".result").style.display="block"


// let answers ;
// radios.forEach((radio)=>{
//   radio.onclick=function(){
//     answers=radio.nextElementSibling.innerHTML 
//   }
// })
var questionBank= [
  {
      question : 'ما هو ثمن الشعير المدعم؟',
      option : ["2/كلغ","2.5/كلغ","4/كلغ"],
      answer : '2/كلغ'
  },
  {
      question : 'ما هي المناطق المستفيدة من البرنامج؟ ',
      option : ['جميع الجهات','الأقاليم الجنوبية ','بعض الجهات'],
      answer : 'جميع الجهات'
  },
  {
      question : 'ما هي حصة كل فلاح؟',
      option : ['8 أكياس','10 أكياس','15 كيس'],
      answer : '10 أكياس'
  },
  {
      question : 'هل يمكن الاستفادة من النقل؟',
      option : ['نعم','لا','غالبا'],
      answer : 'نعم'
  },
  {
      question : 'ما هو إسم النظام المعلوماتي لحكامة البرنامج؟',
      option : ['SARA','SIRA','SABA'],
      answer : 'SABA'
  },
  {
      question : 'طريقة الإستفادة ',
      option : ['صعبة','سهلة','متوسطه'],
      answer : 'سهلة'
  },
  {
      question : 'مراحل الإستفادة من العملية ',
      option : ['3','4','5'],
      answer : '3'
  },
  {
      question : 'الكساب ينتمي إلى إقليم ',
      option : ['جرادة','بركان','الناظور'],
      answer : 'بركان'
  },
  {
      question : 'الثمن المؤدى لعشرة أكياس ',
      option : ['160 درهم','180 درهم','200 درهم'],
      answer : '160 درهم'
  }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var title=document.getElementById("title")
var i=0;
var score= 0;

//function to display questions
let rando;
function displayQuestion(){
    rando= Math.floor(Math.random()*9)
  for(var a=0;a<span.length;a++){
      span[a].style.background='none';
  }
  console.log(rando);
  console.log(questionBank);
  question.innerHTML= 'Q.'+(i+1)+' '+questionBank[rando].question;
  option0.innerHTML= questionBank[rando].option[0];
  option1.innerHTML= questionBank[rando].option[1];
  option2.innerHTML= questionBank[rando].option[2];
  stat.innerHTML= "السؤال"+' '+(i+1)+' '+'من'+' '+"2";
}

//function to calculate scores
function calcScore(e){
  if(e.innerHTML==questionBank[rando].answer && score<questionBank.length)
  {
      score= score+1;
      // document.getElementById(e.id).style.background= 'limegreen';
  }
  else{
      // document.getElementById(e.id).style.background= 'tomato';
  }
  setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
  if(i<1)
  {
      i=i+1;
      displayQuestion();
  }
  else{
      points.innerHTML= score+ '/'+ "2";
      quizContainer.style.display= 'none';
      scoreboard.style.display= 'block'
      title.style.display="none"
  }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
  window.location="../index.html"
}

//function to check Answers
function checkAnswer(){
  var answerBank= document.getElementById('answerBank');
  var answers= document.getElementById('answers');
  answerBank.style.display= 'block';
  scoreboard.style.display= 'none';
  for(var a=0;a<questionBank.length;a++)
  {
      var list= document.createElement('li');
      list.innerHTML= questionBank[a].answer;
      answers.appendChild(list);
  }
}


displayQuestion();



