const spaceButton = document.querySelector(".space_button")

spaceAnimation();

function spaceAnimation() {
    setInterval(
        function(){
            spaceButton.classList.add("pressed");
            setTimeout(function (){spaceButton.classList.remove("pressed")}, 400);
        },800
    )
}

setTimeout(
    function(){
        spaceButton.remove();
    },
    3200
)