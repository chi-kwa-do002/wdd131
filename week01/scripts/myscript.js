const button_change = document.querySelector('#change');
const right = document.querySelector('.right')
const left = document.querySelector(".left");

button_change.onclick =() =>{
    if (button_change.textContent ==="change left") {
        right.textContent="Hello left";
        left.textContent="Hello right";
        right.style.backgroundColor="black";
        left.style.backgroundColor ="red";
        right.style.color="white";
        left.style.color ="black";
        button_change.textContent="change right";
    }
    else if( button_change.textContent === "change right"){
        right.textContent="Hello right";
        left.textContent="Hello left";
        right.style.backgroundColor="red";
        left.style.backgroundColor ="black";
        right.style.color="black";
        left.style.color ="white";
        button_change.textContent="change left";
    }

    
}