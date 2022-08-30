let userHeight = document.querySelector("#userHeight");
let userWeight = document.querySelector("#userWeight");
let submitBtn = document.querySelector('#submitBtn');
let displayResult = document.querySelector('#displayResult');



submitBtn.addEventListener('click', function (e){
    receiveInput(e);
    });


// function validation(){
//     if (userHeight.value == " " || userWeight.value ==" ") {
//         displayResult.innerHTML = "Cannot be blank or zero";
//         }
//     else{
        
//         }
//     }

function receiveInput(e){
e.preventDefault();
userHeight = userHeight.value;
userWeight = userWeight.value;
displayResult.innerHTML = userHeight + userWeight;
}





    
