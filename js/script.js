document.getElementById('donation-btn').addEventListener('click', function(e){
    e.preventDefault();
    const donateInput = parseFloat(document.getElementById('donate-input').value);
    const donateBalance = document.getElementById('donate-balance');
    const coinDonateAmount = document.getElementById('coin-donate-amount');
    if(donateInput < 0 ){
        alert('Negative Number are not allowed');
        document.getElementById('my_modal_1').close();
    }

    else if (isNaN(donateInput)){
        alert('Invalid Donation Amount');
        document.getElementById('my_modal_1').close();
    }

    else if (coinDonateAmount.innerText < donateInput) {
        alert('donation amount is greater than the account balance');
        document.getElementById('my_modal_1').close();
    }
    
    else {
    let floatDonateBalance = parseFloat(donateBalance.innerText);
    let totalDonate =  donateInput + floatDonateBalance ;
    donateBalance.innerText = totalDonate;

    let floatCoinDonateAmount = parseFloat(coinDonateAmount.innerText);
    let afterTotalDonate = floatCoinDonateAmount -  donateInput ;
    coinDonateAmount.innerText = afterTotalDonate;
    }

})
