const ambiancedata = datamain.audios.find(a => a.name === "birdsound");
const ambiance = new Audio(ambiancedata.url);

let ambianceStarted = false;

document.addEventListener("click", () => {
    if (!ambianceStarted) {
        ambiance.play()
            .then(() => console.log("Audio started"))
            .catch(e => console.log("Audio error:", e));
        ambianceStarted = true;
    }
});

function returnMain(){
	window.location.href = "../index.html";
}
function goPlay(){
    window.location.href = "Html + Css/play.html";
}
function goSettings(){
    window.location.href = "Html + Css/more.html";
}