const timer = document.getElementById('counter');
const minusButton = document.getElementById('minus')
let count = 0;
let intervalId;
let isPaused = false;
const submitButton = document.getElementById('submit');
const commentPage = document.getElementsByClassName('comments')[0];
    const commentLine = document.getElementById('comment-input');
function startTimer(){
    intervalId = setInterval(() => {
        if (!isPaused){
            count++
            timer.textContent = `${count}`
        }
    },1000)
}

minusButton.addEventListener('click',() => {
    if (count > 0){
        count --;
    }
    timer.textContent = `${count}`
    
})
const addButton = document.getElementById('plus')
addButton.addEventListener('click',() =>{
    count++;
    timer.textContent = `${count}`
})

const likeButton = document.getElementById('heart')
const displayLike = document.querySelector('.likes')
likeButton.addEventListener('click',() =>{
    const li = document.createElement('li')
    li.textContent = `${count} Likes were added`
    displayLike.appendChild(li)
})

const pauseButton = document.getElementById('pause')
pauseButton.addEventListener('click',() =>{
    isPaused = !isPaused
    if(isPaused){
        clearInterval(intervalId)
        minusButton.disabled = true;
        addButton.disabled = true;
        likeButton.disabled = true;
        submitButton.disabled = true;
        pauseButton.textContent = "Resume";
    }else{
        startTimer()
        minusButton.disabled = false;
        addButton.disabled = false;
        likeButton.disabled = false;
        submitButton.disabled = false;
        pauseButton.textContent = "Pause";

    }
})
submitButton.addEventListener('click',(e) =>{
    e.preventDefault();
    const div = document.createElement('div') 
    div.textContent = commentLine.value;
    commentPage.appendChild(div)
    commentLine.value = ''
})

document.addEventListener('DOMContentLoaded',() =>{
    startTimer();

    timer.textContent = `${count}`
})


