document.getElementById('donate-btn').addEventListener('click', function(){
    document.getElementById('donation-box').classList.remove('hidden')
    document.getElementById('history-box').classList.add('hidden')
})
document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('donation-box').classList.add('hidden')
    document.getElementById('history-box').classList.remove('hidden')
})