let quizNo=document.querySelector(".quizNum");
let question=document.querySelector(".ques")
let option1=document.querySelector(".optionOne")
let option2=document.querySelector(".optionTwo")
let option3=document.querySelector(".optionTre")
let option4=document.querySelector(".optionFour")
let nextBtn=document.querySelector(".nextBtn")
let previousBtn=document.querySelector(".preBtn")
let finalPoint=document.querySelector("#finalMark");

let quizData=[
    {
        quizNum:1,
        ques:"CSS stand for?",
        OptionOne:"Crazy Solid Shapes",
        optionTwo:"Crazy Styled Section",
        OptionTre:"Cascading Style Sheet",
        optionFour:"None Of Them",
        rightAns:"Cascading Style Sheet"
    },
    {
        quizNum:1,
        ques:"Who is the creator of HTML?",
        OptionOne:"Guido Van Hack",
        optionTwo:"Hakom Wium Lie",
        OptionTre:"Guido Van Rossum",
        optionFour:"Tim Berners-Lee",
        rightAns:"Tim Berners-Lee"
    },
    {
        quizNum:1,
        ques:"Where in an HTML document is the correct place to refer to an external style sheet (style.css)?",
        OptionOne:"At the end of the document",
        optionTwo:"In the <body> section",
        OptionTre:"In the <head> section",
        optionFour:"In the <style> section",
        rightAns:"In the <head> section"
    },
    {
        quizNum:1,
        ques:"WWW full Form?",
        OptionOne:"World Web Wide",
        optionTwo:"Web World Win",
        OptionTre:"World Web Web",
        optionFour:"World Wide Web",
        rightAns:"World Wide Web"
    },
]

let quesNo=-1;
let quizCount=0;
let startQuiz=()=>{
    quizCount++;
    quesNo++;
    quizNo.innerHTML=`Question No:${quizCount}`;
    // let quesValue=quizData[quesNo];
    // question.innerHTML=quesValue.ques;
    question.innerHTML="📛 "+ quizData[quesNo].ques;
    // OptionOne.value=quesValue[quesNo].OptionOne;
    // OptionTwo.value=quesValue[quesNo].OptionTwo;
    // OptionTre.value=quesValue[quesNo].OptionTre;
    // optionFour.value=quesValue[quesNo].optionFour;
    option1.value=quizData[quesNo].OptionOne;
    option2.value=quizData[quesNo].optionTwo;
    option3.value=quizData[quesNo].OptionTre;
    option4.value=quizData[quesNo].optionFour;
    previousBtn.classList.remove("preBtn_hide");
    option1.classList.remove("optionOne_hide");
    option2.classList.remove("optionTwo_hide");
    option3.classList.remove("optionTre_hide");
    option4.classList.remove("optionFour_hide");
    nextBtn.innerHTML=`Next Question <i class="arrow fa fa-arrow-circle-right" aria-hidden="true"></i>`;
    if(quizCount===4){
        nextBtn.classList.add("nextBtn_hide");
    }    
}
// startQuiz();

let preQuiz=()=>{
    quizCount--;
    quesNo--;
    quizNo.innerHTML=`Question No:${quizCount}`;
    question.innerHTML="📛 "+ quizData[quesNo].ques;
    option1.value=quizData[quesNo].OptionOne;
    option2.value=quizData[quesNo].optionTwo;
    option3.value=quizData[quesNo].OptionTre;
    option4.value=quizData[quesNo].optionFour; 
    nextBtn.classList.remove("nextBtn_hide");
    if(quizCount===1){
        previousBtn.classList.add("preBtn_hide");
    }
}

let result=0;

    let quizAns=(ans)=>{
       
        option1.value=quizData[quesNo].OptionOne;
        option2.value=quizData[quesNo].optionTwo;
        option3.value=quizData[quesNo].OptionTre;
        option4.value=quizData[quesNo].optionFour;

    let correctAns=quizData[quesNo].rightAns;
    if(ans==correctAns){
        result=result+5; 
    }
    finalPoint.innerHTML=result;

    if(ans==option1.value){
       option2.disabled = true;
       option3.disabled = true;
       option4.disabled = true;
    }
    else if(ans==option2.value){
       option1.disabled = true;
       option3.disabled = true;
       option4.disabled = true;
    }
    else if(ans==option3.value){
        option1.disabled = true;
        option2.disabled = true;
        option4.disabled = true;
    }else{
        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
    }

   
}


