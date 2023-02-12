document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositefild = document.getElementById('deposite-fild');
    const newDeposite = depositefild.value;
    const newDepo = parseFloat(newDeposite);
    // stap nomber too
    const totaldeposite = document.getElementById('total-deposit');
    const PreviousTotal = totaldeposite.innerText;
    const Previous = parseFloat(PreviousTotal);

    const currentDeposite = Previous + newDepo;

    totaldeposite.innerText = currentDeposite;
    
    // stap number three
    const balnceTotal = document.getElementById('newadd-balnce');
    const totalAmount = balnceTotal.innerText;
    const newbamounttk = parseFloat(totalAmount);
    const creatNewBlance = newbamounttk + newDepo;
    balnceTotal.innerText = creatNewBlance;

    depositefild.value=''
})