document.getElementById('donate-btn').addEventListener('click', function(){
    document.getElementById('donation-box').classList.remove('hidden')
    document.getElementById('history-box').classList.add('hidden')
})

document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('donation-box').classList.add('hidden')
    document.getElementById('history-box').classList.remove('hidden')
})


// const donationPageBtn = document.getElementById('donate-btn');
// const historyPageBtn = document.getElementById('history-btn');

// historyPageBtn.addEventListener("click", function(){
//     document.getElementById('donation-box').classList.add('hidden')
//     document.getElementById('history-box').classList.remove('hidden')

//     historyPageBtn.classList.add('bg-[#B4F461]');
//     historyPageBtn.classList.remove('bg-slate-100 ');

//     donationPageBtn.classList.remove('bg-[#B4F461]');
//     donationPageBtn.classList.add('bg-slate-100 ');
// })

// donationPageBtn.addEventListener("click", function(){
//     document.getElementById('donation-box').classList.remove('hidden')
//     document.getElementById('history-box').classList.add('hidden')
//     historyPageBtn.classList.remove('bg-[#B4F461]');
//     historyPageBtn.classList.add('bg-slate-100 ');

//     donationPageBtn.classList.add('bg-[#B4F461]');
//     donationPageBtn.classList.remove('bg-slate-100');
// })


// document.addEventListener("DOMContentLoaded", function () {
//   // Get the current page URL
//   const currentPage = window.location.pathname;

//   // Get the buttons
//   const donationButton = document.getElementById("donation-btn");
//   const historyButton = document.getElementById("history-btn");

//   // checking btn before applying styles
//   if (donationButton && historyButton) {
//     // Check which page is active and change button colors
//     if (currentPage.includes("index.html")) {
//       // Set the colors for button
//       donationButton.style.backgroundColor = "#B4F461";
//       historyButton.style.backgroundColor = "";
//     } else if (currentPage.includes("history.html")) {
//       historyButton.style.backgroundColor = "#B4F461";
//       donationButton.style.backgroundColor = "";
//     }
//   }
// });



// const historyTab = document.getElementById('history-btn');
// const donationTab = document.getElementById("donation-btn");
// historyTab.addEventListener('click', function(){

//     historyTab.classList.add( 'bg-yellow-200');


//     donationTab.classList.remove('bg-yellow-200');

//     document.getElementById('donation-box').classList.add('hidden');

//     document.getElementById("history-box").classList.remove("hidden");
// })

// donationTab.addEventListener('click', function(){
//     donationTab.classList.add('bg-yellow-200')

//     historyTab.classList.remove('bg-yellow-200');

//     // document.getElementById('donation-box').classList.remove('hidden');

//     // document.getElementById("history-box").classList.add("hidden");

// })