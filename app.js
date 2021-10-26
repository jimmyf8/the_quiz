//-----------------------------------------------------------------------DECLARATIONS
let    resultsTable         = [];
const  responses          = ['c','a','b','a','c'];
const  emojis             = ['✔️','✨','👀','😭','👎'];
const  resultsTitle       = document.querySelector('h2');
const  resultsNote        = document.querySelector('.note');
const  resultsHelp        = document.querySelector( '.aide');
const  allQuestions       = document.querySelectorAll('.question-block');
let    checkTable         = [];
const  results            = [] ;

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
    checkTable = [];
}
//-----------------------------------------------------------------------FUNCTION NUMBER OF ERRORS
function displayResults(checkToTable) {
    const numError = checkToTable.filter(el => el!== true).length;
 //-----------------------------------------------------------------------RESULTS   
    switch(numError) {
        case 0:
            resultsTitle.innerText = `${emojis[0]} Bravo, c'est un sans faute ! ${emojis[0]}`
            resultsHelp.innerText  =  ""
            resultsNote.innerText  =  "5/5"
        break;
        case 1:
            resultsTitle.innerText = `${emojis[1]}Vous y êtes presque !${emojis[1]}`
            resultsHelp.innerText  =  "Retentez une autre réponse dans la case rouge, puis re-validez !"
            resultsNote.innerText  =  "4/5"
        break;
        case 2:
            resultsTitle.innerText = `Encore un effort ...${emojis[2]}`
            resultsHelp.innerText  =  "Retentez une autre réponse dans la case rouge, puis re-validez !"
            resultsNote.innerText  =  "3/5"
        break;
        case 3:
            resultsTitle.innerText = `Il reste quelques erreurs.${emojis[2]}`
            resultsHelp.innerText  =  "Retentez une autre réponse dans la case rouge, puis re-validez !"
            resultsNote.innerText  =  "2/5"
        break;
        case 4:
            resultsTitle.innerText = `Peux mieux faire ! ${emojis[4]}`
            resultsHelp.innerText  =  "Retentez une autre réponse dans la case rouge, puis re-validez !"
            resultsNote.innerText  =  "1/5"
        break;
        case 4:
            resultsTitle.innerText = `${emojis[4]}Quand même... ${emojis[4]}`
            resultsHelp.innerText  =  "Retentez une autre réponse dans la case rouge, puis re-validez !"
            resultsNote.innerText  =  "0/5"
        break;
        default:
          "OOUps cas inattendu!"
    }
}

//--------------------------------------------------------------------------ROCKET
const btn = document.querySelector('.btn_rocket');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

})

