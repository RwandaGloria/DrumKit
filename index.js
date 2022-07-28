
var A_audio = new Audio('./sounds/A.mp3');
var B_audio = new Audio('./sounds/B.mp3');
var C_audio = new Audio('./sounds/C.mp3');
var D_audio = new Audio('./sounds/D.mp3');
var E_audio = new Audio('./sounds/E.mp3');
var F_audio = new Audio('./sounds/F.mp3');
var G_audio = new Audio('./sounds/G.mp3');
var H_audio = new Audio('./sounds/H.mp3');
let elemA = document.getElementById('b1');

  elemA.addEventListener("click", () => {

A_audio.play();

  });

  let elemB = document.getElementById('b2');

  elemB.addEventListener("click", () => {

B_audio.play();

  });

  let elemC = document.getElementById('b3');

  elemC.addEventListener("click", () => {

C_audio.play();

  });

  
  let elemD = document.getElementById('b4');

  elemD.addEventListener("click", () => {

D_audio.play();

  });

  let elemE = document.getElementById('b5');

  elemE.addEventListener("click", () => {

E_audio.play();

  });

 
  let elemF = document.getElementById('b6');

  elemF.addEventListener("click", () => {

    F_audio.play(), false;

 
  });
 
  let elemG = document.getElementById('b7');

  elemG.addEventListener("click", () => {

    G_audio.play(), false;

 
  });

  let elemH = document.getElementById('b8');

  elemH.addEventListener("click", () => {

    H_audio.play(), false;

 
  });
 