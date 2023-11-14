let buttons = document.querySelectorAll(".btn");


buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(".active")?.classList.remove("active");
        btn.classList.add('active');   
        
        let content = btn.innerHTML;
        getRating(content);
    })
})

document.getElementById("submit").onclick = openThanksMsg;

function openThanksMsg(){
    document.getElementById("thanksMsg").classList.add("openMsg");
}

function getRating(rating){
    rating = parseInt(rating);
    switch(rating){
        case 1:
            document.getElementById("ratingSelection").innerHTML = "1";
            break;  
        case 2:
            document.getElementById("ratingSelection").innerHTML = "2";
            break;
        case 3:
            document.getElementById("ratingSelection").innerHTML = "3";
            break;
        case 4:
            document.getElementById("ratingSelection").innerHTML = "4";
            break;
        case 5:
            document.getElementById("ratingSelection").innerHTML = "5";
            break;        
    }
}