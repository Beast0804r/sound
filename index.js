var allbuttons=document.querySelectorAll(".drum").length;

for(var i=0; i<allbuttons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        btnAnimation(buttonInnerHTML);

        }
    );
}
document.addEventListener("keypress", function(event){
    makesound(event.key);
    btnAnimation(event.key);
})


function makesound(key){
    switch (key) {
        case "p":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "r":
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;

        case "a":
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;

        case "v":
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;

        case "i":
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;

        case "n":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;

        case "B":
            var tom1 = new Audio("sounds/spk.mp3");
            tom1.play();
            break;
        
        case "b":
            var tom1 = new Audio("sounds/spk.mp3");
            tom1.play();
            break;

    }


}

function btnAnimation(currentkey){
    var activeBtn = document.querySelector("." + currentkey);
    activeBtn.classList.add("pressed");

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },150 );

}