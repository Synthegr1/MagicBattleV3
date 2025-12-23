const ambiance = new Audio("Audio/lobby.mp3");

let ambianceStarted = false;

window.alert("Press any key for start !");

document.addEventListener("click", () => {
    if (!ambianceStarted) {
        ambiance.play()
            .then(() => console.log("Audio started"))
            .catch(e => console.log("Audio error:", e));
        ambianceStarted = true;
    }
});

function returnMain(){
	window.location.href = "index.html";
}