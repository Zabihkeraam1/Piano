let numberOfButton = document.querySelectorAll(".button").length;
for (let i = 0; i <= numberOfButton; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function() {
        var buttonClicked = this.innerHTML;
        sound(buttonClicked);
    });
    document.addEventListener("keypress", function(e) {
        sound(e.key.toUpperCase());
    });

    function sound(key) {
        switch (key) {
            case "A":
                var audio = new Audio("sound/a1.mp3");
                audio.play();
                break;
            case "S":
                var audio = new Audio("sound/a2.mp3");
                audio.play();
                break;
            case "D":
                var audio = new Audio("sound/a3.mp3");
                audio.play();
                break;
            case "F":
                var audio = new Audio("sound/a4.mp3");
                audio.play();
                break;
            case "G":
                var audio = new Audio("sound/a11.mp3");
                audio.play();
                break;
            case "H":
                var audio = new Audio("sound/a6.mp3");
                audio.play();
                break;
            case "J":
                var audio = new Audio("sound/a7.mp3");
                audio.play();
                break;
            case "K":
                var audio = new Audio("sound/a8.mp3");
                audio.play();
                break;
            case "L":
                var audio = new Audio("sound/a10.mp3");
                audio.play();
                break;
            default:
                console.log(buttonClicked);
        }
    }
}