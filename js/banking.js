// for inputfield
function getInputValue(inputId){
    const inputField=document.getElementById(inputId);
    const inputAmountText=inputField.value;
    const ammountValue=parseFloat(inputAmountText);
    inputField.value='';
    return ammountValue;
}
//for totalfield
function updateTotalField(totalFieldId,ammount){
    const totalElement=document.getElementById(totalFieldId);
    const totalText=totalElement.innerText;
    const previousTotal=parseFloat(totalText);
    totalElement.innerText=previousTotal+ammount;
}
// for current balance
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const presentAmmount = parseFloat(balanceTotalText);
    return  presentAmmount ;
}
//update balance
function updateBalance(ammount,isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd==true){
        balanceTotal.innerText= previousBalanceTotal+ammount;
    }
    else{
        balanceTotal.innerText= previousBalanceTotal-ammount;
    }
}

//for deposit using event handler
document.getElementById('deposit-button').addEventListener('click',function(){
   const depositAmount=getInputValue("deposit-input")
   if(depositAmount>0){
    updateTotalField('deposit-total',depositAmount);
    updateBalance(depositAmount,true);
   }
 
})
//for withdraw using event handler
document.getElementById('withdraw-button').addEventListener('click',function(){
   const withdrawAmount=getInputValue("withdraw-input");
   const currentBalance = getCurrentBalance();
   if(withdrawAmount>0 && withdrawAmount < currentBalance){
    updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount,false);
   }
   if (withdrawAmount > currentBalance) {
    console.log('You can not withdraw more than what you have in your account');
}
})