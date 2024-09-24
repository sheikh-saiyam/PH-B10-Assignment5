document.getElementById('donate-btn').addEventListener('click', function(){
    document.getElementById('donation-box').classList.remove('hidden')
    document.getElementById('history-box').classList.add('hidden')
})

document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('donation-box').classList.add('hidden')
    document.getElementById('history-box').classList.remove('hidden')
})

const donationPageBtn = document.getElementById('donate-btn');
const historyPageBtn = document.getElementById('history-btn');

historyPageBtn.addEventListener("click", function(){

    historyPageBtn.classList.add('bg-[#B4F461]');
    // historyPageBtn.classList.remove('');

    donationPageBtn.classList.remove('bg-[#B4F461]');
})

donationPageBtn.addEventListener("click", function(){

    historyPageBtn.classList.remove('bg-[#B4F461]');
    // historyPageBtn.classList.add('bg-slate-100 ');

    donationPageBtn.classList.add('bg-[#B4F461]');
    
})