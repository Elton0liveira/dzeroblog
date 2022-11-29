var i = 0;
const video = ['black.mp4'];
const vid = document.querySelector('#vid');
const parag = document.querySelector('#parag');
const ex = document.querySelector('#ex');
var tempo = 30;
// ex.addEventListener("click", tempo());

function mudar() {
    vid.src = "im" + video[i];
    parag.innerHTML = 'Video: <b>' + video[i] + '<b>';
    i++;
    if (i == video.length) {i = 0}
    setTimeout(function () { mudar() }, tempo * 800);

}
mudar();