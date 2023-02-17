/*
    1.Add event listener to a deposit button
    2.get Deposit amout form the deposit field
    2.5. Convert string deposit to number
    
    3 : clear deposit input after getting the value 

    4. Get the previous deposit value 

    5. calculate new deposit total and set the value

    6.Get current balance

*/ 
document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-filed');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step 3 : clear deposit input after getting the value 
    depositField.value = '';

    //step 4
    const preDepositElement = document.getElementById('deposit-total');
    const preDepositElementString = preDepositElement.innerText;
    const preDepositTotal = parseFloat(preDepositElementString);
 

    //step 5

    const newDepositTotal = preDepositTotal + newDepositAmount;

    preDepositElement.innerText = newDepositTotal;














   
});


// document.getElementById('deposit-filed').addEventListener('keyup', function(event){
//     const depositFieldKey = event.target.value;
//     const depositBtn = document.getElementById('btn-deposit');

//     if(depositFieldKey === ''){
//         depositBtn.setAttribute('disabled' , true)
//         alert("please Inter a validd number")
//     }else{
//         depositBtn.removeAttribute('disabled' )
//     }

// });