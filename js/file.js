
const webcamElement=document.getElementById("webCam")
const canvasElement=document.getElementById("canvas")
const webcam= new Webcam(webcamElement,"user",canvasElement)
let goQuiz=document.getElementById("go-quiz")

let form=document.querySelector(".form")
let startBTN=document.querySelector(".start-btn")

let takeScreenBTN=document.querySelector("#screen-btn")
let screenCounter=document.querySelector(".counter")
let closeBTN=document.querySelector(".close")

let name=document.querySelector(".name")
let email=document.querySelector(".email")
let phone=document.querySelector(".phone")
let city=document.querySelector(".city")

let overlay=document.querySelector(".overlay")

startBTN.onclick=function(){
        form.style.display="block"

}
takeScreenBTN.onclick=function(event){
    event.preventDefault()
    if (name.value && email.value && phone.value  && city.value !== '') {
        screenCounter.style.display="block"
        minCounter()
    }
}

function minCounter(){
    webcam.start()
    let interval=setInterval(() => {
        screenCounter.innerHTML--
        if(screenCounter.innerHTML<=0){

            document.querySelector(".anchor").click()
            clearInterval(interval)
            screenCounter.style.display="none"
            goQuiz.style.display="block"
        }
    }, 1000);
}
goQuiz.onclick=function(){
    window.location="./html/quiz.html"
}

// const srcElement = document.querySelector("body")
//   btns = document.querySelectorAll("button");
//   btns.forEach(btn => { // looping through each btn
    // adding click event to each btn
    takeScreenBTN.addEventListener("click", () => {
      // creating canvas of element using html2canvas
      if (name.value && email.value && phone.value  && city.value !=='') {
        setTimeout(() => {
            // html2canvas(srcElement).then(canvas => {
                // adding canvas/screenshot to the body
                // let div=document.createElement("div")
                // let divContent=document.createTextNode("x")
                // div.appendChild(divContent)
                // div.classList.add("close")
                // document.body.appendChild(div)
                // canvas.classList.add("canvas")
                // overlay.style.display="block"
                //   return document.body.appendChild(canvas);
                // downloading canvas/screenshot
                // const a = document.createElement("a");
                // a.href = canvas.toDataURL();
                // a.download = "screenshot.jpg";
                // a.click();
            //   });
        }, 4000);
    }
    else (
        alert("there is an empty field")
    )
});

//   });


// document.addEventListener("click",function(e){
//     if(e.target.classList.contains("close")){
//         window.location="./html/quiz.html"
//         name.value=""
//         email.value=""
//         phone.value=""
//     }
// })


function takePic(){
     let picture=webcam.snap()
     document.querySelector(".anchor").href=picture
     console.log(picture);
}