let d = document.createElement("input")


const questions = [
    {
      questionTitle: "ماهي عاصمه السعوديه؟",
      options: ["الرياض", "جدة", "القصيم", "الكويت"],
      keyAnswer: "الرياض",
    },
    {
      questionTitle: "افضل نادي فالعالم",
      options: ["الاهلي", "النصر", "الهلال", "التعاون"],
      keyAnswer: "الهلال",
    },
    {
      questionTitle: "ماهو افضل لون",
      options: ["احمر", "اصفر", "ازرق", "وردي"],
      keyAnswer: "ازرق",
    },
    {
      questionTitle: "ماهو ناتج ضرب 5*13",
      options: ["70", "60", "65", "55"],
      keyAnswer: "65",
    },
    {
      questionTitle: "ماهي عاصمه بريطانيا؟",
      options: [d.value],
      keyAnswer:"لندن",
    },
    {
      questionTitle: "ماهي عاصمه المانيا؟",
      options: [d.value],
      keyAnswer:"برلين",
    },
  ];

  
  const qustionsCont = document.getElementById("qustions-cont");
  const qustionsText = document.getElementById("qustions-text");
  const options = document.getElementById("options");
  const timeLeft = document.getElementById("time-left");
  const resultCont = document.getElementById("result-cont");
  const resultText = document.getElementById("result-text");
  
  
  let currentIndex = 0;
  let score = 0;
  let timer = 10;
  let countDown;
  
  function showQuestion(index) {

    const questin = questions[index];
    qustionsText.innerText = questin.questionTitle;
    options.innerHTML = "";

    questin.options.forEach((option) => {
      let b = document.createElement("button");
      b.textContent = option;
      options.appendChild(b);

      if(index >= 4){
        b.style.cssText = "display: none"

   
        // Input Stuff
        d.textContent = option;
        options.appendChild(d);

        let but = document.createElement("button")
        but.textContent = "Submit"
        options.appendChild(but)

        but.addEventListener("click" ,()=>{
            checkAnswer(option, questin.keyAnswer);
            d.value = ""
        })


        

    }else{}


    
  
      b.addEventListener("click", () => {
        checkAnswer(option, questin.keyAnswer);
      });

      
      // options.insertAdjacentHTML("afterbegin", `<button>${option}</button>`);
    });

    

  }
  
  function showTimer() {
    countDown = setInterval(function () {
      timer--;
      timeLeft.textContent = timer;
      if (timer <= 0) {
        clearInterval(countDown);
        checkAnswer("", null);
      }
    }, 1000);
  }
  
  showQuestion(currentIndex);
  showTimer();

//   input check



  
  function checkAnswer(myAnswer, correctAnswer) {
    currentIndex++;
    clearInterval(countDown);


  
    if (myAnswer === correctAnswer || d.value === correctAnswer) {
      score++;
    
    }
  
    if (currentIndex < questions.length) {
      showQuestion(currentIndex);
      timer = 10;
      timeLeft.textContent = timer;
      showTimer();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    qustionsCont.style.display = "none";
    resultCont.style.display = "flex";
    resultText.textContent = `Your Score is ${score} of ${questions.length}`;
  }