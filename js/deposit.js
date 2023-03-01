//step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function()
{
   // console.log('deposit button clicked')
   //step 2:get the deposit amount from the deposit input field
   //For input field use .value to the value inside the input field
   const depositField = document.getElementById('deposit-field');
   const newDepositAmountString =  depositField.value;
   const newDepositAmount = parseFloat(newDepositAmountString);
   //console.log(newDepositAmountString);

   //step-3 : get the current deposit total
   //for non-input(element other that input, textarea) use innerText to get the text
   const depositTotalElement = document.getElementById('deposit-total');
   const previousDepositTotalString = depositTotalElement.innerText;
   //console.log(typeof previousDepositTotal  );
   const previousDepositTotal =parseFloat(previousDepositTotalString);
   //step4: add number to set the total deposit
   const currentDepositTotal = previousDepositTotal+ newDepositAmount;
   //set the deposit total
   depositTotalElement.innerText = currentDepositTotal;
    //step-5: get balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousDepositTotalString);
    //step6: calculate total balance
    const currentBalanceTotal = previousBalanceTotal+ newDepositAmount;
    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
   //step-7: clear the deposit field
   depositField.value ='';
   
}
)