
const arrows = document.querySelectorAll('.arrow');// query selector chooses an item in the html file
const movieLists = document.querySelectorAll('.movie-list');// query selector chooses an item in the html file

// console.log(arrow); use this line to check if code works. click inspect on the webpage then console to see any messages 

arrows.forEach((arrow,i)=>{
    
    const itemNumber = movieLists[i].querySelectorAll('img').length;
    let clickCounter = 0;// counts number of clicks
    arrow.addEventListener('click',()=>{
        const ratio = Math.floor(window.innerWidth/280);// some wizard shit
        clickCounter++;
        
        // basically to restart the horizontal list of items. 
        if(itemNumber - (4+clickCounter) + (4-ratio)>= 0 ){// also some wizard shit
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
    
        }else{
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;// resets the counter

        }
    });      
});




//TOGGLE

const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.container,.navbar-container,.sidebar,.left-menu-icon,.toggle,.movie-list-title');

//when u click the toggle it changes the items to active and the ball to active which is some awesome shit
ball.addEventListener('click',()=>{
    items.forEach((item)=>{
        item.classList.toggle('active');
    })
    ball.classList.toggle('active');
})