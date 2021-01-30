//get counting element
const counter = document.getElementById("counter")
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const button = document.querySelectorAll('button')[3]
const likes = document.getElementsByClassName("likes")[0]

minus.addEventListener('click', handleMinus, true)
plus.addEventListener('click', handlePlus, true)
heart.addEventListener('click', handleHeart, true)

//increase inner HTML + 1 every second
function handleMinus(e) {counter.innerHTML -- }
function handlePlus(e) {counter.innerHTML ++ }


function handleHeart(e){
    let second = counter.innerHTML
    clicks = 0
    //for each second, add clicks then restart loop
        likes.innerHTML += `<li class="emoji">${second} has been liked <span>1</span> time</li>`
        heart.onclick = ++clicks
}


pleaseWork = function handleTimer() {
    timer = setInterval(setTime, 1000) 
    function setTime() {
        // ++seconds;
        ++counter.innerHTML;
    }
}

pleaseWork()

//get buttons


//add listener to click on buttons

button.addEventListener('click', event => {
    if(event.target.id === 'pause'){
    //change button to resume
    //pause timer
    clearInterval(timer)
    minus.removeEventListener('click', handleMinus, true)
    plus.removeEventListener('click', handlePlus, true)
    heart.removeEventListener('click', handleHeart, true)
    button.id =  'resume'
    button.innerHTML =  'resume'
    }
    else if(event.target.id === 'resume'){
    //resume timer
    //change text to 'pause'
    pleaseWork()
    minus.addEventListener('click', handleMinus, true)
    plus.addEventListener('click', handlePlus, true)
    heart.addEventListener('click', handleHeart, true)
    button.id =  'pause'
    button.innerHTML =  'pause'
    }
})
