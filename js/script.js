// for no1 donation box 
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
    <p class="text-pText px-3 "> Date: ${new Date()}</p>`;

    const historyContainer = document.getElementById("history-box");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    // history section code 
    }

})


// for no2 donation box 
document.getElementById('donation-btn2').addEventListener('click', function(e){
    e.preventDefault();
    const donateInput2 = parseFloat(document.getElementById('donate-input2').value);
    const donateBalance2 = document.getElementById('donate-balance2');
    const coinDonateAmount = document.getElementById('coin-donate-amount');

    if(donateInput2 <= 0 ){
        alert('Please enter an amount greater than zero.');
        document.getElementById('my_modal_2').close();
    }

    else if (isNaN(donateInput2)){
        alert('Invalid Donation Amount');
        document.getElementById('my_modal_2').close();
    }

    else if (coinDonateAmount.innerText < donateInput2) {
        alert('donation amount is greater than the account balance');
        document.getElementById('my_modal_2').close();
    }
    
    else {
    // input section code
    let floatDonateBalance2 = parseFloat(donateBalance2.innerText);
    let totalDonate2 =  donateInput2 + floatDonateBalance2 ;
    donateBalance2.innerText = totalDonate2;

    let floatCoinDonateAmount = parseFloat(coinDonateAmount.innerText);
    let afterTotalDonate = floatCoinDonateAmount -  donateInput2 ;
    coinDonateAmount.innerText = afterTotalDonate;
    // input section code

    // history section code 
    const donationSubject2 = document.getElementById('donation-subject2').innerText;
    const historyItem2 = document.createElement("div");

    historyItem2.className ="bg-white rounded-lg border border-[#e8e8e8] p-6 border-2 shadow-sm ";
    
    historyItem2.innerHTML= `
    <p class="font-bold px-3 py-2 "> ${donateInput2} Taka is donated for ${donationSubject2}</p>
    <p class="text-pText px-3 "> Date: ${Date().toLocaleString()}</p>`;

    const historyContainer2 = document.getElementById("history-box");
    historyContainer2.insertBefore(historyItem2, historyContainer2.firstChild);
    // history section code 
    }

})


// for no3 donation box 
document.getElementById('donation-btn3').addEventListener('click', function(e){
    e.preventDefault();
    const donateInput3 = parseFloat(document.getElementById('donate-input3').value);
    const donateBalance3 = document.getElementById('donate-balance3');
    const coinDonateAmount = document.getElementById('coin-donate-amount');

    if(donateInput3 <= 0 ){
        alert('Please enter an amount greater than zero.');
        document.getElementById('my_modal_3').close();
    }

    else if (isNaN(donateInput3)){
        alert('Invalid Donation Amount');
        document.getElementById('my_modal_3').close();
    }

    else if (coinDonateAmount.innerText < donateInput3) {
        alert('donation amount is greater than the account balance');
        document.getElementById('my_modal_3').close();
    }
    
    else {
    // input section code
    let floatDonateBalance3 = parseFloat(donateBalance3.innerText);
    let totalDonate3 =  donateInput3 + floatDonateBalance3 ;
    donateBalance3.innerText = totalDonate3;

    let floatCoinDonateAmount = parseFloat(coinDonateAmount.innerText);
    let afterTotalDonate = floatCoinDonateAmount -  donateInput3 ;
    coinDonateAmount.innerText = afterTotalDonate;
    // input section code

    // history section code 
    const donationSubject3 = document.getElementById('donation-subject3').innerText;
    const historyItem3 = document.createElement("div");

    historyItem3.className ="bg-white rounded-lg border border-[#e8e8e8] p-6 border-2 shadow-sm ";
    
    historyItem3.innerHTML= `
    <p class="font-bold px-3 py-2 "> ${donateInput3} Taka is donated for ${donationSubject3}</p>
    <p class="text-pText px-3 "> Date: ${Date().toLocaleString()}</p>`;

    const historyContainer3 = document.getElementById("history-box");
    historyContainer3.insertBefore(historyItem3, historyContainer3.firstChild);
    // history section code 
    }

})
