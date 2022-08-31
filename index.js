let userHeight = document.querySelector("#userHeight");
let userWeight = document.querySelector("#userWeight");
let submitBtn = document.querySelector('#submitBtn');
let displayResult = document.querySelector('#displayResult');


submitBtn.addEventListener('click', function (e){ validation(e) });

function validation(e){
    e.preventDefault();
    if (userHeight.value == "" || userWeight.value == "") {
        displayResult.style.backgroundColor = 'salmon';
        displayResult.innerHTML = "Cannot be blank - please enter something";
            }

    else if (isNaN(userHeight.value) == true || isNaN(userWeight.value) == true){
        displayResult.style.backgroundColor = 'salmon';
        return displayResult.innerHTML = "And how do you expect me to calculate something that isn't a number?";
        }
    else {
        return receiveInput(e);
        }
    }

function receiveInput(e){
e.preventDefault();
userHeight = userHeight.value;
userWeight = userWeight.value;
displayResult.style.backgroundColor = 'green';
displayResult.innerHTML = `Your BMI is ${(userWeight / Math.sqrt(userHeight,2)).toFixed(2)}` ;
}







    
