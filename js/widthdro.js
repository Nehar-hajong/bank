document.getElementById('withdro-btn').addEventListener('click', function(){
    const withdroButton = document.getElementById('input-fild');
    const totleWithdro = withdroButton.value ;
    const newWithdrows = parseFloat(totleWithdro);

    const withdrototalAmount = document.getElementById('withdro-amount');
    const Previouswithdrowstring = withdrototalAmount.innerText;
    const Previouswithdrowstotal = parseFloat(Previouswithdrowstring);

    const currentwithdrototal = Previouswithdrowstotal +  newWithdrows ;
    withdrototalAmount.innerText = currentwithdrototal;

    const balancetotalElementsa = document.getElementById('newadd-balnce');
    const PreviousBalnceElementstring = balancetotalElementsa.innerText;
    const PreviousBalnceElement = parseFloat(PreviousBalnceElementstring);
    const newBlanceTotles = PreviousBalnceElement - newWithdrows;
    balancetotalElementsa.innerText = newBlanceTotles;




    withdroButton.value='';
})