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
    let likeList = document.getElementById(`${second}`)
   
    if (likeList === null){
        likeList = document.createElement('li')
        likes.appendChild(likeList)
        likeList.id = `${second}`
        num = 1
        likeList.innerHTML = `${second} has been liked <span> ${num} </span> time`
    }
    else {
        likeList.innerHTML = `${second} has been liked <span> ${num++} </span> times`
    }   
}  


pleaseWork = function handleTimer() {
    timer = setInterval(function () {++counter.innerHTML}, 1000) 
    // timer = setInterval(setTime, 1000) 
    // function setTime() {
    // {++counter.innerHTML};
    // }
}

pleaseWork()

//add listener to click on buttons

button.addEventListener('click', event => {
    if(event.target.id === 'pause'){
    //change button to resume
    //pause timer
    clearInterval(timer)
    minus.disabled = true
    plus.disabled = true
    heart.disabled = true
    // minus.removeEventListener('click', handleMinus, true)
    // plus.removeEventListener('click', handlePlus, true)
    // heart.removeEventListener('click', handleHeart, true)
    button.id =  'resume'
    button.innerHTML =  'resume'
    }
    else if(event.target.id === 'resume'){
    //resume timer
    //change text to 'pause'
    pleaseWork()
    minus.disabled = false
    plus.disabled = false
    heart.disabled = false
    // minus.addEventListener('click', handleMinus, true)
    // plus.addEventListener('click', handlePlus, true)
    // heart.addEventListener('click', handleHeart, true)
    button.id =  'pause'
    button.innerHTML =  'pause'
    }
})

 
const commentBox = document.getElementById("comment-form");
const commentList = document.getElementById("list");

commentBox.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault();
  const newComment = document.getElementById("comment-input").value;
 commentList.innerHTML += `<p>${newComment}</p>`
 event.target.reset()
}
