const submit = document.querySelector("#submit");
const content = document.querySelector("#content");
const reason = document.querySelector("#reason");
// const lbfKey = 'localBirdfacts';
const lbf = JSON.parse(localStorage.getItem('localBirdfacts')) || [];
const eraserMode = true;
// ^^^ if you want to refresh bird of the day, set this to true

function insertToBirdfacts(){
    if (reason.value == 'b' && content.value != ''){
        lbf.push(content.value);
        localStorage.setItem('localBirdfacts',JSON.stringify(lbf))
    };
};

submit.addEventListener('click', function(){
    insertToBirdfacts();
    if (eraserMode){
        localStorage.removeItem('botd');
    };
});