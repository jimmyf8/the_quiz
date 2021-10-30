//-----------------------------------------------------------------------DECLARATIONS
let    resultsTable       = [];
const  responses          = ['c','a','b','a','c'];
const  emojis             = ['★︎★︎★︎★︎★︎','★︎★︎★︎★︎','★︎★︎★︎','★︎★︎','★︎'];
const  emojis2            = ["♤︎", "♦︎", "♥︎", "♠︎"];
const  resultsTitle       = document.querySelector('h2');
const  allQuestions       = document.querySelectorAll('.question-block');
const  resultsNote        = document.querySelector('.note');
const  resultsHelp        = document.querySelector( '.aide');
const  allResults         = document.getElementById('resultats');
let    checkTable         = [];
const  results            = [] ;
const containerSlot       = document.querySelector(".slot");

//--------------------------------------------------------------------------LE P'TIT QUIZZ
const lePtitQuizz = document.querySelector('.nav-link_disabled');

lePtitQuizz.addEventListener('click', () => {
    location.reload();
})

//-----------------------------------------------------------------------LISTENING OF SUBMIT
document.querySelector('.form-quizz').addEventListener('submit',function(e){
    e.preventDefault();

    for (i = 1; i < 6; i++){
        resultsTable.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    
    verifFunc(resultsTable)
    resultsTable = [];
})

//-----------------------------------------------------------------------FUNCTION RESPONSES
function verifFunc(tabResultats) {

    for(let a = 0; a < 5; a++){

        if(tabResultats[a] === responses[a]) {
            checkTable.push(true);
        } else {
            checkTable.push(false);
        }

    }
    displayResults(checkTable);
    colorFunc(checkTable);
    checkTable = [];
}
//-----------------------------------------------------------------------FUNCTION NUMBER OF ERRORS
function displayResults(checkToTable) {
    const numError = checkToTable.filter(el => el!== true).length;
 //-----------------------------------------------------------------------RESULTS   
    switch(numError) {
        case 0:
            resultsTitle.innerText = `${emojis[0]} Bravo, c'est un sans faute ! `
            resultsHelp.innerText  =  ""
            resultsNote.innerText  =  "5/5"
            setTimeout(() =>{
               allResults.classList.add('.open');
               allResults.style.background = 'lightgreen';
               allResults.style.color = 'white';
               fiesta();
            },500)
            //confettis
            function fiesta() {
                for (let i = 0; i < 80; i++) {
                  const confetti = document.createElement("div");
                  confetti.innerText = emojis2[Math.floor(Math.random() * emojis2.length)];
                  containerSlot.appendChild(confetti);
                }
              
                animateConfettis();
              }
              
              function animateConfettis() {
                
                const TLCONF = gsap.timeline();
              
                TLCONF.to(".slot div", {
                  y: "random(-80,80)",
                  x: "random(-80,80)",
                  z: "random(0,100)",
                  rotation: "random(-90,90)",
                  duration: 4,
                })
                  .to(".slot div", { autoAlpha: 5, duration: 0.9 }, "-=0.9")
                  .add(() => {
                    containerSlot.innerHTML = "";
                  });
              }
            
        break;
        case 1:
            resultsTitle.innerText = `${emojis[1]} Vous y êtes presque !`
            resultsHelp.innerText  =  "Retentez une autre réponse dans la case noire, puis re-validez !"
            resultsNote.innerText  =  "4/5"
        break;
        case 2:
            resultsTitle.innerText = `${emojis[2]} Encore un effort ...`
            resultsHelp.innerText  =  "Retentez une autre réponse dans la case noire, puis re-validez !"
            resultsNote.innerText  =  "3/5"
        break;
        case 3:
            resultsTitle.innerText = `${emojis[2]} Il reste quelques erreurs.`
            resultsHelp.innerText  =  "Retentez une autre réponse dans la case noire, puis re-validez !"
            resultsNote.innerText  =  "2/5"
        break;
        case 4:
            resultsTitle.innerText = `${emojis[4]} Peux mieux faire ! `
            resultsHelp.innerText  =  "Retentez une autre réponse dans la case noire, puis re-validez !"
            resultsNote.innerText  =  "1/5"
        break;
        case 4:
            resultsTitle.innerText = `${emojis[4]} Quand même... `
            resultsHelp.innerText  =  "Retentez une autre réponse dans la case noire, puis re-validez !"
            resultsNote.innerText  =  "0/5"
        break;
        default:
          "OOUps cas inattendu!"
    }
}
//--------------------------------------------------------------------------FUNCTION COLORS RESPONSES
function colorFunc(tabValBoolean){
    for(let i = 0; i< tabValBoolean.length; i++){
        if(tabValBoolean[i] === true){
            allQuestions[i].style.background = 'lightblue';
        }else{
            allQuestions[i].style.background ='black'
            allQuestions[i].style.color ='white';
            setTimeout(() =>{
                allQuestions[i].classList.add('echec')

            },500)
        }
    }
}
//--------------------------------------------------------------------------FUNCTION COLORS RESPONSES WHITE
allQuestions.forEach(item =>{
    item.addEventListener('click',() =>{
        item.style.background = "white";
        item.style.color = "black";
    })
})


//--------------------------------------------------------------------------ROCKET
const btn = document.querySelector('.btn_rocket');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

})


