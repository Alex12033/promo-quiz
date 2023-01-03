"use strict";
/*/we get comments for 
 adaptive position with
 slide becauese our tabs has 
 absolute positionn comments section 
 not change dynamicaly own position*/
let comments = document.querySelector(".comments");

let tab1Btn = document.querySelector(".tab1-btn");

// git commit -am"fix bug in section with bags an fix footer margin on change screens"
//from first to two tab
let tab1 = document.querySelector(".tab1");
tab1.classList.add("display");

let tab2 = document.querySelector(".tab2");

//adaptate fotter after first load under tab
comments.style.marginTop = "1150px";
tab1Btn.addEventListener("click", () => {
  tab1.classList.add("hide");
  tab1.classList.remove("display");

  tab2.classList.add("display");

  //position comments in two tab
  comments.style.marginTop = "970px";
});

//from two tab to three tab
let tab2Btn = document.querySelectorAll(".tab2-btn");
let starsQuiz1 = document.querySelector(".stars-quiz1");

let tab3 = document.querySelector(".tab3");

tab2Btn.forEach((elem) => {
  elem.addEventListener("click", () => {
    //animate image header tab and hide tab
    starsQuiz1.style.animation = "stars-quiz1 1.6s forwards ease";
    tab2.classList.add("hide");
    tab2.classList.remove("display");

    //display next tab
    tab3.classList.add("display");

    //position comments in three tab
    comments.style.marginTop = "910px";
  });
});

//from three tab to four tab
let tab3Btn = document.querySelectorAll(".tab3-btn");

//get image for animate
let bellsLeft = document.querySelector(".quiz-left-image");
let bellsRight = document.querySelector(".quiz-right-image");

let tab4 = document.querySelector(".tab4");

tab3Btn.forEach((elem) => {
  elem.addEventListener("click", () => {
    bellsLeft.style.animation = "bells-animation 2s forwards ease";
    bellsLeft.style.zIndex = "200";
    bellsRight.classList.add("hide");

    //set timeout for delay enter next tab
    setTimeout(() => {
      //hide currency tab
      tab3.classList.add("hide");
      tab3.classList.remove("display");

      //display next tab
      tab4.classList.add("display");
    }, 800);

    //position comments in four tab
    comments.style.marginTop = "930px";
  });
});

//from four tab to five tab
let tab4Btn = document.querySelectorAll(".tab4-btn");
let imageQuiz3 = document.querySelector(".surprize-image");

let bigConfetti = document.querySelector(".big-confetti");

//get image for animate
let tab5 = document.querySelector(".tab5");

tab4Btn.forEach((elem) => {
  elem.addEventListener("click", () => {
    imageQuiz3.style.animation = "surprize-animation 2s forwards ease";

    bigConfetti.style.animation = "big-confetti-animation 1.6s forwards ease";
    //hide currency tab
    tab4.classList.add("hide");
    tab4.classList.remove("display");

    //display next tab
    tab5.classList.add("display");

    //position comments in five tab
    comments.style.marginTop = "920px";
  });
});

//from five to six tab
let tab5Btn = document.querySelectorAll(".tab5-btn");

//get image for animate
let imageQuizConfetti = document.querySelector(".quiz-confetti");
let imageQuizBall = document.querySelector(".quiz-ball");

let tab6 = document.querySelector(".tab6");

tab5Btn.forEach((elem) => {
  elem.addEventListener("click", () => {
    //image to animate
    imageQuizConfetti.style.animation = "confetti-animation 1.6s forwards ease";
    imageQuizBall.style.animation = "ball-animation 2s forwards ease";

    //hide current tab
    tab5.classList.add("hide");
    tab5.classList.remove("display");

    //display next tab
    tab6.classList.add("display");

    //position comments in six tab
    comments.style.marginTop = "810px";
  });
});

//from six to seven
let tab6Btn = document.querySelectorAll(".tab6-btn");

//get image for animate
let imageSnow = document.querySelector(".image-snow");

let tab7 = document.querySelector(".tab7");

tab6Btn.forEach((elem) => {
  elem.addEventListener("click", () => {
    //image to animate
    imageSnow.style.animation = "confetti-animation 1.6s forwards ease";
    imageQuizBall.style.animation = "ball-move-back 1.6s forwards ease";
    imageQuizConfetti.style.animation =
      "confetti-move-back 1.6s backwards ease";

    //delay next tab for display animation
    setTimeout(() => {
      //hide current tab
      tab6.classList.add("hide");
      tab6.classList.remove("display");

      //display next tab
      tab7.classList.add("display");
    }, 500);
  });
});

//from seven to eight
let tab7Btn = document.querySelectorAll(".tab7-btn");

//get image for animate
let imageQuize8Left = document.querySelector(".quiz-8-image-left");
let imageQuize8Right = document.querySelector(".quiz-8-image-right");

let tab8 = document.querySelector(".tab8");

tab7Btn.forEach((elem) => {
  elem.addEventListener("click", () => {
    //animate image
    imageQuize8Left.style.animation = " balls-move-down 1.6s forwards ease";
    imageQuize8Right.style.animation = " balls-move-down 1.6s forwards ease";

    //hide currency tab
    tab7.classList.add("hide");
    tab7.classList.remove("display");

    //display next tab
    tab8.classList.add("display");

    //position comments in five tab
    comments.style.marginTop = "800px";
  });
});

//from seven to eight
let tab8Btn = document.querySelectorAll(".tab8-btn");

let tab9 = document.querySelector(".tab9");

let tab10 = document.querySelector(".tab10");

tab8Btn.forEach((elem) => {
  elem.addEventListener("click", () => {
    //animate image and hide right christmas ball
    imageQuize8Left.style.animation = " ball-down 1.6s forwards ease";
    imageQuize8Right.classList.add("hide");

    setTimeout(() => {
      tab8.classList.add("hide");
      tab8.classList.remove("display");

      tab9.classList.add("display");
    }, 500);

    setTimeout(() => {
      tab9.classList.add("hide");
      tab9.classList.remove("display");

      tab10.classList.add("display");
    }, 4000);

    //position comments in six tab
    comments.style.marginTop = "790px";
  });
});

//open all bags
let tab10Btn = document.querySelector(".tab10-btn");
let tab11 = document.querySelector(".tab11");

tab10Btn.addEventListener("click", () => {
  //animate tab down-to animation
  tab10.style.animation = " section-to-down 2s forwards ease";
  imageQuize8Right.classList.add("hide");

  //hide tab after animation
  tab10.classList.add("hide");
  tab10.classList.remove("display");

  //open tab with bags
  tab11.classList.add("display");
  comments.style.marginTop = "730px";
});

/* we get bags for after click black 
gray or plombir bag we may add in bellow code 
class win. Class win this some triger for win when user 
click two times */
let allBags = document.querySelectorAll(".bag");
//btn om winner screen...after click redirect on info how get prise
let btnWinner = document.querySelector(".btn-winner");
//choice uggs
let uggsChoice = document.querySelector(".tab15");
//last winer card tab
let lastCard = document.querySelector(".tab18");

//choice gray bags
let grayBags = document.querySelectorAll(".gray-loose-choice");
//opened bag
let tab12 = document.querySelector(".tab12");
//closed bag
let tab13 = document.querySelector(".tab13");
//we get all gray bags
grayBags.forEach((elem) => {
  elem.addEventListener("click", () => {
    //after click on bags hide some tab and open next two tab
    tab11.classList.add("hide");
    tab11.classList.remove("display");

    tab12.classList.add("display");
    tab12.classList.remove("hide");

    setTimeout(() => {
      tab12.classList.add("hide");
      tab12.classList.remove("display");

      tab13.classList.add("display");
    }, 2000);
    //position comments in six tab
    comments.style.marginTop = "830px";

    allBags.forEach((elem) => {
      if (!elem.classList.contains("win")) {
        elem.classList.add("win");

        //after choise btn redirect on form main with all bags
        let grayBtn = document.querySelector(".gray-loose-btn");
        //if loose click btn for resatrt proccecss choice
        grayBtn.addEventListener("click", () => {
          tab13.classList.remove("display");

          tab11.classList.add("display");
          tab11.classList.remove("hide");
        });
      } else {
        //hide tab checker info
        tab13.classList.remove("display");
        tab13.classList.add("hide");

        //display choice for uggs
        uggsChoice.classList.add("display");
        uggsChoice.classList.remove("hide");

        //when click on btn in choice tab close choice tab and open last tab
        btnWinner.addEventListener("click", () => {
          uggsChoice.classList.add("hide");
          uggsChoice.classList.remove("display");

          lastCard.classList.add("display");
          lastCard.classList.remove("hide");

          elem.classList.remove("win");
          comments.style.marginTop = "1200px";
        });
      }
    });
  });
});

//choose black bags
let blackBags = document.querySelectorAll(".black-loose-choice");

//opened bag
let tab16 = document.querySelector(".tab16");
//closed bag
let tab17 = document.querySelector(".tab17");
//we get all black bags
blackBags.forEach((elem) => {
  //after click on bags hide some tab and open next two tab
  elem.addEventListener("click", () => {
    //hide all bags
    tab11.classList.add("hide");
    tab11.classList.remove("display");

    //two window tab 17 and after 2sec close 17 and open 16
    tab16.classList.add("display");
    tab16.classList.remove("hide");

    setTimeout(() => {
      tab16.classList.add("hide");
      tab16.classList.remove("display");

      tab17.classList.add("display");
      tab17.classList.remove("hide");
    }, 2000);

    allBags.forEach((elem) => {
      if (!elem.classList.contains("win")) {
        elem.classList.add("win");
        //after loose need btn for  restart process choice
        let blackBtn = document.querySelector(".black-loose-btn");
        blackBtn.addEventListener("click", () => {
          tab17.classList.remove("display");

          tab11.classList.add("display");
          tab11.classList.remove("hide");
          console.log("not have class");
        });
      } else {
        console.log("have class");
        //hide tab checker info
        tab16.classList.add("display");
        tab16.classList.remove("hide");

        setTimeout(() => {
          //display choice for uggs
          uggsChoice.classList.add("display");
          uggsChoice.classList.remove("hide");
          tab17.classList.remove("display");
        }, 2000);

        //when click on btn in choice tab close choice tab and open last tab
        btnWinner.addEventListener("click", () => {
          uggsChoice.classList.add("hide");
          uggsChoice.classList.remove("display");

          lastCard.classList.add("display");
          lastCard.classList.remove("hide");

          elem.classList.remove("win");
          comments.style.marginTop = "1200px";
        });
      }
    });
  });
});

//choose plombir bags
let plombirBags = document.querySelectorAll(".plombir");

let plombirChoose = document.querySelectorAll(".plombir-loose-choice");
//opened bag
let tab14 = document.querySelector(".tab14");
//closed bag
let tab19 = document.querySelector(".tab19");

plombirBags.forEach((elem) => {
  elem.addEventListener("click", () => {
    tab11.classList.add("hide");
    tab11.classList.remove("display");

    tab14.classList.add("display");
    tab14.classList.remove("hide");
    comments.style.marginTop = "850px";

    setTimeout(() => {
      tab14.classList.add("hide");
      tab14.classList.remove("display");

      tab19.classList.add("display");
      tab19.classList.remove("hide");
    }, 2000);

    allBags.forEach((elem) => {
      if (!elem.classList.contains("win")) {
        elem.classList.add("win");

        let plombirBtn = document.querySelector(".plombir-loose-btn");
        plombirBtn.addEventListener("click", () => {
          console.log("click");

          tab19.classList.add("hide");
          tab19.classList.remove("display");

          tab11.classList.add("display");
          tab11.classList.remove("hide");
        });
      } else {
        tab14.classList.remove("hide");
        tab14.classList.add("display");

        uggsChoice.classList.add("display");
        uggsChoice.classList.remove("hide");
        //when click on btn in choice tab close choice tab and open last tab
        btnWinner.addEventListener("click", () => {
          uggsChoice.classList.add("hide");
          uggsChoice.classList.remove("display");

          lastCard.classList.add("display");
          lastCard.classList.remove("hide");

          elem.classList.remove("win");
          comments.style.marginTop = "1200px";
        });
      }
    });
  });
});
