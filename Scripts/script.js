//PLAYER 1

//VARIABLES
console.log("datamain = " + datamain)

const br1data = datamain.inputplayer1.find(x => x.name === "mover");
const bl1data = datamain.inputplayer1.find(s => s.name === "movel");
const bt1data = datamain.inputplayer1.find(w => w.name === "movet");
const bd1data = datamain.inputplayer1.find(t => t.name === "moved");
const ba1data = datamain.inputplayer1.find(g => g.name === "spell1");
const bz1data = datamain.inputplayer1.find(k => k.name === "spell2");
const be1data = datamain.inputplayer1.find(r => r.name === "spell3");
const br21data = datamain.inputplayer1.find(l => l.name === "spell4")

const buttonright = br1data.key;
const buttonleft = bl1data.key;
const buttontop = bt1data.key;
const buttondown = bd1data.key;
const buttona = ba1data.key;
const buttonz = bz1data.key;
const buttone = be1data.key;
const buttonr = br21data.key;

const buttonright2 = "KeyV";
const buttonleft2 = "KeyC";
const buttontop2 = "KeyZ";
const buttondown2 = "KeyX";
const buttonj = "KeyJ";
const buttonk = "KeyK";
const buttonl = "KeyL";
const buttonm = "Semicolon";

const output = document.getElementById("outputtext");
const output2 = document.getElementById("outputtext2");
const player1explosionstatus = document.getElementById("useplayer1explosion");
const player1firestatus = document.getElementById("useplayer1fire");
const player1punchstatus = document.getElementById("useplayer1punch");
const player1magicbowstatus = document.getElementById("useplayer1magicbow");
const player2explosionstatus = document.getElementById("useplayer2explosion");
const player2firestatus = document.getElementById("useplayer2fire");
const player2punchstatus = document.getElementById("useplayer2punch");
const player2magicbowstatus = document.getElementById("useplayer2magicbow");
const mana1htmlelement = document.getElementById("mana");
const mana2htmlelement = document.getElementById("mana2");
const player2 = document.getElementById("player2");
const player = document.getElementById("player1"); 
const hpp1html = document.getElementById("hpp1");
const hpp2html = document.getElementById("hpp2");

const limitegauche = -25;
const limiteright = 1755;
const limitetop = -35;
const limitedown = 765;

const bowData = datamain.audio.find(f => f.name === "bowshout");
const pasData = datamain.audio.find(a => a.name === "footsteps");
const ambianceData = datamain.audio.find(b => b.name === "musicingame");
const explosionData = datamain.audio.find(c => c.name === "explosion");
const fireData = datamain.audio.find(d => d.name === "fireshout");
const punchData = datamain.audio.find(e => e.name === "punchsound");

var bruitdepas = new Audio(pasData.url);
var ambiance = new Audio(ambianceData.url);
var explosion = new Audio(explosionData.url);
var fire = new Audio(fireData.url);
var punch = new Audio(punchData.url);
var magicbow = new Audio(bowData.url);

document.addEventListener("keydown", inputPlayer1);

var manaplayer1 = 50;
var manaplayer2 = 50;

var hpplayer1 = 100;
var hpplayer2 = 100;

let ambianceStarted = false;

//FONCTIONS
//Lancement de l'audio
//window.alert("Welcome to Magical Battles, defeat your opponent!");
document.addEventListener("keydown", function startAmbiance() {
    if (!ambianceStarted) {
		ambiance.play().catch(e => console.log("Audio error : ", e));
        ambianceStarted = true;
    }
});


//Déplacer le personnage
function movePlayer1(direction){

	if (!player.style.left) player.style.left = "15px";
	if (!player.style.top) player.style.top = "325px";

	let left = parseInt(player.style.left);
	let top = parseInt(player.style.top);
	const speed = 20;

	switch (direction){
		case "top":
			console.log("From datamain = ", bt1data);
			mana1htmlelement.innerText = manaplayer1;
			mana1htmlelement.style.color = "white";
			if(manaplayer1 < 50){
				mana1htmlelement.style.color = "#267300";
				manaplayer1 = manaplayer1 + 0.5;
			}
			mana1htmlelement.innerText = manaplayer1;
			output.style.color = "green";
			output.innerText = "Move top";
			top = top - speed;
			console.log("Move up -- vertical position = " + top);
			bruitdepas.play();
			break;

		case "bottom":
			console.log("From datamain = ", bd1data);
			mana1htmlelement.innerText = manaplayer1;
			mana1htmlelement.style.color = "white";
			if(manaplayer1 < 50){
				mana1htmlelement.style.color = "#267300";
				manaplayer1 = manaplayer1 + 0.5;
			}
			mana1htmlelement.innerText = manaplayer1;
			output.style.color = "green";
			output.innerText = "Move down";
			top = top + speed;
			console.log("Move down -- vertical position = " + top);
			bruitdepas.play();
			break;
		case "left":
			console.log("From datamain = ", bl1data);
			mana1htmlelement.innerText = manaplayer1;
			mana1htmlelement.style.color = "white";
			if(manaplayer1 < 50){
				mana1htmlelement.style.color = "#267300";
				manaplayer1 = manaplayer1 + 0.5;
			}
			mana1htmlelement.innerText = manaplayer1;
			output.style.color = "green";
			output.innerText = "Move left";
			left = left - speed;
			console.log("Move left -- horizontal position = " + left);
			bruitdepas.play();
			break;
		case "right":
			console.log("From datamain = ", br1data);
			mana1htmlelement.innerText = manaplayer1;
			mana1htmlelement.style.color = "white";
			if(manaplayer1 < 50){
				mana1htmlelement.style.color = "#267300";
				manaplayer1 = manaplayer1 + 1;
			}
			mana1htmlelement.innerText = manaplayer1;
			output.style.color = "green";
			output.innerText = "Move right";
			left = left + speed;
			console.log("Move right -- horizontal position = " + left);
			bruitdepas.play();
			break;
	}
	player.style.left = left + "px";
	player.style.top = top + "px";


		if(left < limitegauche){
			player.style.left = "-25px";
			console.log("Player 1 were blocked ! (left) (" + left + ")");
		}
		if(left > limiteright){
			player.style.left = "1755px";
			console.log("Player 1 were blocked ! (right) (" + left + ")");
		}
		if(top < limitetop){
			player.style.top = "-35px";
			console.log("Player 1 were blocked ! (up) (" + top + ")");
		}
		if(top > limitedown){
			player.style.top = "765px";
			console.log("Player 1 were blocked ! (down) (" + top + ")");
		}

}


//SORTS
function spellPlayer1(spell){
	
	switch (spell){
		case "a":
			console.log("From datamain = ", ba1data);
			mana1htmlelement.style.color = "white"; 
			mana1htmlelement.innerText = manaplayer1; //Ecriture dans l'HTML
			manaplayer1calcul = manaplayer1 - 25; // Calcul du mana après le sort
			if(manaplayer1calcul < 0){
				mana1htmlelement.innerText = manaplayer1;
				output.style.color = "red"
				output.innerText = "Not enough mana !";
				console.log("Not enough mana !"); //Verifie la quantité de mana
				break;
			}else{
				manaplayer1 = manaplayer1 - 25; //Soustrait le mana
				output.style.color = "orange";
				mana1htmlelement.style.color = "red";
				mana1htmlelement.innerText = "- 25 !";
				player1explosionstatus.style.color = "green";
				player1explosionstatus.innerText = "In use"; //CSS et affichage du status
				setTimeout(function changeColor(){
					player1explosionstatus.innerText = "Do not use";
					player1explosionstatus.style.color = "white";
				}, 2000); //Passe le status en "Do not use" après 2 secondes
				output.innerText = "Explosion spell";
				explosion.play(); //Audio
				mana1htmlelement.style.color = "white";


				var posp2left = player2.offsetLeft;
				var posp1left = player.offsetLeft; // use the `player` variable declared above

				// attack should succeed only when players are close enough horizontally
				if (Math.abs(posp1left - posp2left) < 400) {
					console.log("Attaque réussie");
					// Dégâts a appliquer.
					hpplayer2 = hpplayer2 - 25;
					hpp2html.innerText = hpplayer2;
					console.log(hpplayer2);
						if(hpplayer2 <= 0){
							window.alert("Player 1 a gagner avec " + hpplayer1 + " PV ! Quelle humiliation ! ")
						}
					break;

				} else {
					console.log("Echec de l'attaque");
				}
				break;
				
			}

		case "z":
			console.log("From datamain = ", bz1data);
			mana1htmlelement.style.color = "white";
			mana1htmlelement.innerText = manaplayer1;
			manaplayer1calcul = manaplayer1 - 15;
			if(manaplayer1calcul < 0){
				mana1htmlelement.innerText = manaplayer1;
				output.style.color = "red"
				output.innerText = "Not enough mana !";
				console.log("Not enough mana !");
				break;
			}else{
				manaplayer1 = manaplayer1 - 15;
				output.style.color = "red";
				mana1htmlelement.style.color = "red";
				mana1htmlelement.innerText = "- 15 !";
				player1firestatus.style.color = "green";
				player1firestatus.innerText = "In use";
				setTimeout(function changeColor(){
					player1firestatus.innerText = "Do not use";
					player1firestatus.style.color = "white";
				}, 2000);
				output.innerText = "Fire Spell";
				fire.play();


					// attack should succeed only when players are close enough horizontally
					var posp2left = player2.offsetLeft;
					var posp1left = player.offsetLeft;

					if (Math.abs(posp1left - posp2left) < 600) {
						console.log("Attaque réussie");
						// Dégâts a appliquer.
						hpplayer2 = hpplayer2 - 15;
						hpp2html.innerText = hpplayer2;
						console.log(hpplayer2);
							if(hpplayer2 <= 0){
								window.alert("Player 1 a gagner avec " + hpplayer1 + " PV ! Quelle humiliation ! ")
							}
						break;

					} else {
						console.log("Echec de l'attaque");
					}
				break;
			}

		case "e":
			console.log("From datamain = ", be1data);
			mana1htmlelement.style.color = "white";
			mana1htmlelement.innerText = manaplayer1;
			manaplayer1calcul = manaplayer1 - 5;
			if(manaplayer1calcul < 0){
				mana1htmlelement.innerText = manaplayer1;
				output.style.color = "red"
				output.innerText = "Not enough mana !";
				console.log("Not enough mana !");
				break;
			}else{
				manaplayer1 = manaplayer1 - 5;
				output.style.color = "red";
				mana1htmlelement.style.color = "red";
				mana1htmlelement.innerText = "- 5 !";
				output.style.color = "yellow";
				player1punchstatus.style.color = "green";
				player1punchstatus.innerText = "In use";
				setTimeout(function changeColor(){
					player1punchstatus.innerText = "Do not use";
					player1punchstatus.style.color = "white";
				}, 2000);
				output.innerText = "Punch";
				punch.play();

					// attack should succeed only when players are close enough horizontally
					var posp2left = player2.offsetLeft;
					var posp1left = player.offsetLeft;

					if (Math.abs(posp1left - posp2left) < 200) {
						console.log("Attaque réussie");
						// Dégâts a appliquer.
						hpplayer2 = hpplayer2 - 10;
						hpp2html.innerText = hpplayer2;
						console.log(hpplayer2);
							if(hpplayer2 <= 0){
								window.alert("Player 1 a gagner avec " + hpplayer1 + " PV ! Quelle humiliation ! ")
							}
						break;

					} else {
						console.log("Echec de l'attaque");
					}
				break;
			}

		case "r":
			console.log("From datamain = ", br21data);
			mana1htmlelement.style.color = "white";
			mana1htmlelement.innerText = manaplayer1;
			manaplayer1calcul = manaplayer1 - 10;
			if(manaplayer1calcul < 0){
				mana1htmlelement.innerText = manaplayer1;
				output.style.color = "red"
				output.innerText = "Not enough mana !";
				console.log("Not enough mana !");
				break;
			}else{
				manaplayer1 = manaplayer1 - 10;
				output.style.color = "brown";
				mana1htmlelement.style.color = "red";
				mana1htmlelement.innerText = "- 10 !";
				player1magicbowstatus.style.color = "green";
				player1magicbowstatus.innerText = "In use";
				setTimeout(function changeColor(){
					player1magicbowstatus.innerText = "Do not use";
					player1magicbowstatus.style.color = "white";
				}, 2000);
				output.innerText = "Explosion spell";
				output.innerText = "Magic Bow";
				magicbow.play();

				var posp2left = player2.offsetLeft;
					var posp1left = player.offsetLeft;

					if (Math.abs(posp1left - posp2left) < 2000) {
						console.log("Attaque réussie");
						// Dégâts a appliquer.
						hpplayer2 = hpplayer2 - 18;
						hpp2html.innerText = hpplayer2;
						console.log(hpplayer2);
							if(hpplayer2 <= 0){
								window.alert("Player 1 a gagner avec " + hpplayer1 + " PV ! Quelle humiliation ! ")
							}
						break;

					} else {
						console.log("Echec de l'attaque");
					}
				break;
			}
	}
}


//PLAYER 2


//DEPLACEMENT J2
function movePlayer2(direction){

	if (!player2.style.left) player2.style.left = "1800px";
	if (!player2.style.top) player2.style.top = "325px";

	let left2 = parseInt(player2.style.left);
	let top2 = parseInt(player2.style.top);
	const speed = 20;

	switch (direction){
		case "top":
			mana2htmlelement.innerText = manaplayer2;
			mana1htmlelement.style.color = "white";
			if(manaplayer2 < 50){
				mana1htmlelement.style.color = "#267300";
				manaplayer2 = manaplayer2 + 0.5;
			}
			mana2htmlelement.innerText = manaplayer2;
			output2.style.color = "green";
			output2.innerText = "Move top";
			top2 = top2 - speed;
			console.log("Move up -- vertical position = " + top2);
			bruitdepas.play();
			break;
		case "bottom":
			mana2htmlelement.innerText = manaplayer2;
			mana2htmlelement.style.color = "white";
			if(manaplayer2 < 50){
				mana2htmlelement.style.color = "#267300";
				manaplayer2 = manaplayer2 + 0.5;
			}
			mana2htmlelement.innerText = manaplayer2;
			output2.style.color = "green";
			output2.innerText = "Move down";
			top2 = top2 + speed;
			console.log("Move down -- vertical position = " + top2);
			bruitdepas.play();
			break;
		case "left":
			mana2htmlelement.innerText = manaplayer2;
			mana2htmlelement.style.color = "white";
			if(manaplayer2 < 50){
				mana2htmlelement.style.color = "#267300";
				manaplayer2 = manaplayer2 + 0.5;
			}
			mana2htmlelement.innerText = manaplayer2;
			output2.style.color = "green";
			output2.innerText = "Move left";
			left2 = left2 - speed;
			console.log("Move left -- horizontal position = " + left2);
			bruitdepas.play();
			break;
		case "right":
			mana1htmlelement.innerText = manaplayer1;
			mana1htmlelement.style.color = "white";
			if(manaplayer2 < 50){
				mana2htmlelement.style.color = "#267300";
				manaplayer2 = manaplayer2 + 1;
			}
			mana2htmlelement.innerText = manaplayer2;
			output2.style.color = "green";
			output2.innerText = "Move right";
			left2 = left2 + speed;
			console.log("Move right -- horizontal position = " + left2);
			bruitdepas.play();
			break;
	}
	player2.style.left = left2 + "px";
	player2.style.top = top2 + "px";

		if(left2 < limitegauche){
			player2.style.left = "-25px";
			console.log("Player 2 were blocked ! (left) (" + left + ")");
		}
		if(left2 > limiteright){
			player2.style.left = "1755px";
			console.log("Player 2 were blocked ! (right) (" + left + ")");
		}
		if(top2 < limitetop){
			player2.style.top = "-35px";
			console.log("Player 2 were blocked ! (up) (" + top + ")");
		}
		if(top2 > limitedown){
			player2.style.top = "765px";
			console.log("Player 2 were blocked ! (down) (" + top + ")");
		}
}

//SORTS J2
function spellPlayer2(spell){
	
	switch (spell){
		case "j":
			mana1htmlelement.style.color = "white";
			mana1htmlelement.innerText = manaplayer2;
			manaplayer2calcul = manaplayer2 - 25;
			if(manaplayer2calcul < 0){
				mana2htmlelement.innerText = manaplayer2;
				output2.style.color = "red"
				output2.innerText = "Not enough mana !";
				console.log("Not enough mana !");
				break;
			}else{
				manaplayer2 = manaplayer2 - 5;
				output2.style.color = "orange";
				mana2htmlelement.style.color = "red";
				mana2htmlelement.innerText = "- 25 !";
				player2explosionstatus.style.color = "green";
				player2explosionstatus.innerText = "In use";
				setTimeout(function changeColor(){
					player2explosionstatus.innerText = "Do not use";
					player2explosionstatus.style.color = "white";
				}, 2000);
				output2.innerText = "Explosion spell";
				explosion.play();
				mana1htmlelement.style.color = "white";

					var posp2left = player2.offsetLeft;
					var posp1left = player.offsetLeft; // use the `player` variable declared above

					// attack should succeed only when players are close enough horizontally
					if (Math.abs(posp1left - posp2left) < 400) {
						console.log("Attaque réussie");
						// Dégâts a appliquer.
						hpplayer1 = hpplayer1 - 25;
						hpp1html.innerText = hpplayer1;
						console.log(hpplayer1);
							if(hpplayer1 <= 0){
								window.alert("Player 2 a gagner avec " + hpplayer2 + " PV ! Quelle humiliation ! ")
							}
						break;

					} else {
						console.log("Echec de l'attaque");
					}
				break;
			}
		case "k":
			mana2htmlelement.style.color = "white";
			mana2htmlelement.innerText = manaplayer2;
			manaplayer2calcul = manaplayer2 - 15;
			if(manaplayer2calcul < 0){
				mana2htmlelement.innerText = manaplayer2;
				output2.style.color = "red"
				output2.innerText = "Not enough mana !";
				console.log("Not enough mana !");
				break;
			}else{
				manaplayer2 = manaplayer2 - 15;
				output2.style.color = "red";
				mana2htmlelement.style.color = "red";
				mana2htmlelement.innerText = "- 15 !";
				player2firestatus.style.color = "green";
				player2firestatus.innerText = "In use";
				setTimeout(function changeColor(){
					player2firestatus.innerText = "Do not use";
					player2firestatus.style.color = "white";
				}, 2000);
				output2.innerText = "Fire Spell";
				fire.play();

				var posp2left = player2.offsetLeft;
					var posp1left = player.offsetLeft; // use the `player` variable declared above

					// attack should succeed only when players are close enough horizontally
					if (Math.abs(posp1left - posp2left) < 600) {
						console.log("Attaque réussie");
						// Dégâts a appliquer.
						hpplayer1 = hpplayer1 - 15;
						hpp1html.innerText = hpplayer1;
						console.log(hpplayer1);
							if(hpplayer1 <= 0){
								window.alert("Player 2 a gagner avec " + hpplayer2 + " PV ! Quelle humiliation ! ")
							}
						break;

					} else {
						console.log("Echec de l'attaque");
					}
				break;
			}
		case "l":
			mana2htmlelement.style.color = "white";
			mana2htmlelement.innerText = manaplayer2;
			manaplayer2calcul = manaplayer2 - 5;
			if(manaplayer2calcul < 0){
				mana1htmlelement.innerText = manaplayer2;
				output2.style.color = "red"
				output2.innerText = "Not enough mana !";
				console.log("Not enough mana !");
				break;
			}else{
				manaplayer2 = manaplayer2 - 5;
				output2.style.color = "red";
				mana2htmlelement.style.color = "red";
				mana2htmlelement.innerText = "- 5 !";
				output2.style.color = "yellow";
				player2punchstatus.style.color = "green";
				player2punchstatus.innerText = "In use";
				setTimeout(function changeColor(){
					player2punchstatus.innerText = "Do not use";
					player2punchstatus.style.color = "white";
				}, 2000);
				output2.innerText = "Punch";
				punch.play();

				var posp2left = player2.offsetLeft;
					var posp1left = player.offsetLeft; // use the `player` variable declared above

					// attack should succeed only when players are close enough horizontally
					if (Math.abs(posp1left - posp2left) < 200) {
						console.log("Attaque réussie");
						// Dégâts a appliquer.
						hpplayer1 = hpplayer1 - 10;
						hpp1html.innerText = hpplayer1;
						console.log(hpplayer1);
							if(hpplayer1 <= 0){
								window.alert("Player 2 a gagner avec " + hpplayer2 + " PV ! Quelle humiliation ! ")
							}
						break;

					} else {
						console.log("Echec de l'attaque");
					}
				break;
			}
		case "m":
			mana2htmlelement.style.color = "white";
			mana2htmlelement.innerText = manaplayer2;
			manaplayer2calcul = manaplayer2 - 10;
			if(manaplayer2calcul < 0){
				mana2htmlelement.innerText = manaplayer2;
				output2.style.color = "red"
				output2.innerText = "Not enough mana !";
				console.log("Not enough mana !");
				break;
			}else{
				manaplayer2 = manaplayer2 - 10;
				output2.style.color = "brown";
				mana2htmlelement.style.color = "red";
				mana2htmlelement.innerText = "- 10 !";
				player2magicbowstatus.style.color = "green";
				player2magicbowstatus.innerText = "In use";
				setTimeout(function changeColor(){
					player2magicbowstatus.innerText = "Do not use";
					player2magicbowstatus.style.color = "white";
				}, 2000);
				output2.innerText = "Explosion spell";
				output2.innerText = "Magic Bow";
				magicbow.play();

				var posp2left = player2.offsetLeft;
					var posp1left = player.offsetLeft; // use the `player` variable declared above

					// attack should succeed only when players are close enough horizontally
					if (Math.abs(posp1left - posp2left) < 2000) {
						console.log("Attaque réussie");
						// Dégâts a appliquer.
						hpplayer1 = hpplayer1 - 18;
						hpp1html.innerText = hpplayer1;
						console.log(hpplayer1);
							if(hpplayer1 <= 0){
								window.alert("Player 2 a gagner avec " + hpplayer2 + " PV ! Quelle humiliation ! ")
							}
						break;

					} else {
						console.log("Echec de l'attaque");
					}
				break;
			}
	}
}


//Connaître la touche pressé
function inputPlayer1(e){
	//PLAYER 1
	if(e.code == buttonright){
		movePlayer1("right");
		console.log("Input : " + buttonright);
	}
	if(e.code == buttonleft){
		movePlayer1("left");
		console.log("Input : " + buttonleft);
	}
	if(e.code == buttontop){
		movePlayer1("top");
		console.log("Input : " + buttontop);
	}
	if(e.code == buttondown){
		movePlayer1("bottom");
		console.log("Input : " + buttondown);
	}
	if(e.code == buttona){
		spellPlayer1("a");
		console.log("A explosion spell by Player 1 started !");
	}
	if(e.code == buttonz){
		spellPlayer1("z");
		console.log("A fire spell by Player 1 started !");
	}
	if(e.code == buttone){
		spellPlayer1("e");
		console.log("The player one do a punch !");
	}
	if(e.code == buttonr){
		spellPlayer1("r");
		console.log("The player 1 use a Magic Bow");
	}

	//PLAYER1
	if(e.code == buttontop2){
		movePlayer2("top");
		console.log("Input : " + buttontop2);
	}
	if(e.code == buttondown2){
		movePlayer2("bottom");
		console.log("Input : " + buttondown2);
	}
	if(e.code == buttonleft2){
		movePlayer2("left");
		console.log("Input : " + buttonleft2);
	}
	if(e.code == buttonright2){
		movePlayer2("right");
		console.log("Input : " + buttonright2);
	}
	if(e.code == buttonj){
		spellPlayer2("j");
	}
	if(e.code == buttonk){
		spellPlayer2("k");
	}
	if(e.code == buttonl){
		spellPlayer2("l");
	}
	if(e.code == buttonm){
		spellPlayer2("m");
	}
}