document.getElementById('donation-btn').addEventListener('click', function(e){
    e.preventDefault();
    const donateInput = parseFloat(document.getElementById('donate-input').value);
    const donateBalance = document.getElementById('donate-balance');
    const coinDonateAmount = document.getElementById('coin-donate-amount');

    if(donateInput <= 0 ){
        alert('Please enter an amount greater than zero.');
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
    // input section code
    let floatDonateBalance = parseFloat(donateBalance.innerText);
    let totalDonate =  donateInput + floatDonateBalance ;
    donateBalance.innerText = totalDonate;

    let floatCoinDonateAmount = parseFloat(coinDonateAmount.innerText);
    let afterTotalDonate = floatCoinDonateAmount -  donateInput ;
    coinDonateAmount.innerText = afterTotalDonate;
    // input section code

    // history section code 
    const donationSubject = document.getElementById('donation-subject').innerText;
    const historyItem = document.createElement("div");

    historyItem.className ="bg-white rounded-lg border border-[#e8e8e8] p-6 border-2 shadow-sm ";
    
    historyItem.innerHTML= `
    <p class="font-bold px-3 py-2 "> ${donateInput} Taka is donated for ${donationSubject}</p>
    <p class="text-pText px-3 "> Date: ${new Date().toLocaleString()} (Bangladesh Standard Time)</p>`;

    const historyContainer = document.getElementById("history-box");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    // history section code 
    }

})
