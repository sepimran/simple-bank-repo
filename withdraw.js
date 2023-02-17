document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdraTotalSting = withdrawField.value;
    const newWithdraAmout = parseFloat(newWithdraTotalSting);
    
    // step 3
    withdrawField.value = '';

    // step 4
    const widrawTotalElement = document.getElementById('widraw-total');
    const preWidrawTotalString = widrawTotalElement.innerText;
    const preWidrawTotal = parseFloat(preWidrawTotalString);

    // step 5
    const newWithdawTotal = preWidrawTotal + newWithdraAmout;
    widrawTotalElement.innerText = newWithdawTotal;

    // step 6
    const currentBlanceElement = document.getElementById('blance-total');
    const preBlanceString = currentBlanceElement.innerText;
    const preBlance = parseFloat(preBlanceString);

    // step 7

    const newCurrentBlance = preBlance - newWithdraAmout;
    currentBlanceElement.innerText = newCurrentBlance;

    if(newWithdraAmout > newCurrentBlance){
        alert('Infufient Balance');
        return ;
    }

});