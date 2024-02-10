document.addEventListener("DOMContentLoaded", function () {
    const balloonContainer = document.querySelector(".balloons");
    const balloonCount = 20; // Number of balloons to display

    for (let i = 0; i < balloonCount; i++) {
        createBalloon();
    }

    function createBalloon() {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 100 + "%";
        balloon.style.animationDuration = Math.random() * 6 + 3 + "s";
        balloonContainer.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 8000); // Remove balloon after 8 seconds
    }
});


