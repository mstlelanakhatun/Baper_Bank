//step-1: add event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click',function()
{
   // console.log('withdraw button clicked')
   //step 2:get the withdraw amount from the withdraw input field
   //For input field use .value to the value inside the input field
   const withdrawField = document.getElementById('withdraw-field');
   const newwithdrawAmountString =  withdrawField.value;
   const newwithdrawAmount = parseFloat(newwithdrawAmountString);
   console.log(newwithdrawAmount);
   {
      if(isNaN(newwithdrawAmount)){
         alert ('Please provide a void number');
         return;
      }
   }

   //step-3 : get the current withdraw total
   //for non-input(element other that input, textarea) use innerText to get the text
   const withdrawTotalElement = document.getElementById('withdraw-total');
   const previouswithdrawTotalString = withdrawTotalElement.innerText;
   //console.log(typeof previouswithdrawTotal  );
   const previouswithdrawTotal =parseFloat(previouswithdrawTotalString);
   //step4: add number to set the total withdraw
   const currentwithdrawTotal = previouswithdrawTotal+ newwithdrawAmount;
   //set the withdraw total
   withdrawTotalElement.innerText = currentwithdrawTotal;
    //step-5: get balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    if(newwithdrawAmount>previousBalanceTotal)
    {alert('Baap bank e eto tk nai');
    return;}
    //step6: calculate total balance
    const newBalanceTotal = previousBalanceTotal-newwithdrawAmount ;
    //set the balance total
    balanceTotalElement.innerText = newBalanceTotal;
   //step-7: clear the withdraw field
   withdrawField.value ='';
   
}
)