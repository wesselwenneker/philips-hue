const BRIDGE_URL = "192.168.178.172"  // IP adres van de bridge
const API_KEY = "l1SJ36Y-mE6pM48fRULsOjfFIv2tyV68AWtcXNjB"  //sleutel om de bridge aan te sturen
const BASE_URL = `http://${BRIDGE_URL}/api/${API_KEY}/lights/` //beginstuk van de url
let aantalSeconden = 0;
let rood = '{"on": true, "bri": 150, helderheid, "hue": 0, "sat": 100}'
let groen = '{"on": true, "bri": 150, helderheid, "hue": 20000, "sat": 200}'
let geen = '{"on": false}'
let helderheid = 150;

function sendRequest(lampNumber, body){
	let http = new XMLHttpRequest();
       let url = BASE_URL + lampNumber + "/state";
	http.open("PUT", url);  //We gebruiken de URL om een PUT request naartoe te sturen
	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200){
			console.log(http.responseText);
		}
	}
		http.send(body);  //Stuur de body van je request naar de bridge
}
function letter_a(){
	console.log("de letter a")
  sendRequest(1, rood);
  sendRequest(2, groen);
  sendRequest(3, geen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_b(){
	console.log("de letter b")
  sendRequest(1, groen);
  sendRequest(2, rood);
  sendRequest(3, rood);
  sendRequest(4, rood);
  sendRequest(5, body);
}
function letter_c(){
	console.log("de letter c")
  sendRequest(1, groen);
  sendRequest(2, rood);
  sendRequest(3, groen);
  sendRequest(4, rood);
  sendRequest(5, geen);
}
function letter_d(){
	console.log("de letter d")
  sendRequest(1, groen);
  sendRequest(2, rood);
  sendRequest(3, rood);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_e(){
	console.log("de letter e")
  sendRequest(1, rood);
  sendRequest(2, geen);
  sendRequest(3, geen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_f(){
	console.log("de letter f")
  sendRequest(1, rood);
  sendRequest(2, rood);
  sendRequest(3, groen);
  sendRequest(4, rood);
  sendRequest(5, geen);
}
function letter_g(){
	console.log("de letter g")
  sendRequest(1, groen);
  sendRequest(2, groen);
  sendRequest(3, rood);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_h(){
	console.log("de letter h")
  sendRequest(1, rood);
  sendRequest(2, rood);
  sendRequest(3, rood);
  sendRequest(4, rood);
  sendRequest(5, geen);
}
function letter_i(){
	console.log("de letter i")
  sendRequest(1, rood);
  sendRequest(2, rood);
  sendRequest(3, geen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_j(){
	console.log("de letter j")
  sendRequest(1, rood);
  sendRequest(2, groen);
  sendRequest(3, groen);
  sendRequest(4, groen);
  sendRequest(5, geen);
}
function letter_k(){
	console.log("de letter k")
  sendRequest(1, groen);
  sendRequest(2, rood);
  sendRequest(3, groen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_l(){
	console.log("de letter l")
  sendRequest(1, rood);
  sendRequest(2, groen);
  sendRequest(3, geen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_m(){
	console.log("de letter m")
  sendRequest(1, groen);
  sendRequest(2, groen);
  sendRequest(3, geen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_n(){
	console.log("de letter m")
  sendRequest(1, groen);
  sendRequest(2, rood);
  sendRequest(3, geen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_o(){
	console.log("de letter o")
  sendRequest(1, groen);
  sendRequest(2, groen);
  sendRequest(3, groen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_p(){
	console.log("de letter p")
  sendRequest(1, rood);
  sendRequest(2, groen);
  sendRequest(3, groen);
  sendRequest(4, rood);
  sendRequest(5, geen);
}
function letter_q(){
	console.log("de letter q")
  sendRequest(1, groen);
  sendRequest(2, groen);
  sendRequest(3, rood);
  sendRequest(4, groen);
  sendRequest(5, geen);
}
function letter_r(){
	console.log("de letter r")
  sendRequest(1, rood);
  sendRequest(2, groen);
  sendRequest(3, rood);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_s(){
	console.log("de letter s")
  sendRequest(1, rood);
  sendRequest(2, rood);
  sendRequest(3, rood);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_t(){
	console.log("de letter t")
  sendRequest(1, groen);
  sendRequest(2, geen);
  sendRequest(3, geen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_u(){
	console.log("de letter u")
  sendRequest(1, rood);
  sendRequest(2, rood);
  sendRequest(3, groen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_v(){
	console.log("de letter v")
  sendRequest(1, rood);
  sendRequest(2, rood);
  sendRequest(3, rood);
  sendRequest(4, groen);
  sendRequest(5, geen);
}
function letter_w(){
	console.log("de letter w")
  sendRequest(1, rood);
  sendRequest(2, groen);
  sendRequest(3, groen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_x(){
	console.log("de letter x")
  sendRequest(1, groen);
  sendRequest(2, rood);
  sendRequest(3, rood);
  sendRequest(4, groen);
  sendRequest(5, geen);
}
function letter_y(){
	console.log("de letter y")
  sendRequest(1, groen);
  sendRequest(2, rood);
  sendRequest(3, groen);
  sendRequest(4, groen);
  sendRequest(5, geen);
}
function letter_z(){
	console.log("de letter z")
  sendRequest(1, groen);
  sendRequest(2, groen);
  sendRequest(3, rood);
  sendRequest(4, rood);
  sendRequest(5, geen);
}
morse = {
  "a": letter_a,
  "b": letter_b,
  "c": letter_c,
  "d": letter_d,
  "e": letter_e,
  "f": letter_f,
  "g": letter_g,
  "h": letter_h,
  "i": letter_i,
  "j": letter_j,
  "k": letter_k,
  "l": letter_l,
  "m": letter_m,
  "n": letter_n,
  "o": letter_o,
  "p": letter_p,
  "q": letter_q,
  "r": letter_r,
  "s": letter_s,
  "t": letter_t,
  "u": letter_u,
  "v": letter_v,
  "w": letter_w,
  "x": letter_x,
  "y": letter_y,
  "z": letter_z
}
function zoeker() {
  var h1 = document.getElementById("h1_2")
	h1.innerHTML = input.value;
  invoer = input.value;
	console.log("Zoeker werkt	");

  let index = 0;
  while (invoer[index]){
    console.log(invoer[index]);
		aantalSeconden += 5000
		if (invoer[index] == "a"){
			setTimeout(function(){letter_a()}, aantalSeconden);
		}
		else if (invoer[index] == "b"){
			setTimeout(function(){letter_b()}, aantalSeconden);
		}
		else if (invoer[index] == "c"){
			setTimeout(function(){letter_c()}, aantalSeconden);
		}
		else if (invoer[index] == "d"){
			setTimeout(function(){letter_d()}, aantalSeconden);
		}
		else if (invoer[index] == "e"){
			setTimeout(function(){letter_e()}, aantalSeconden);
		}
		else if (invoer[index] == "f"){
			setTimeout(function(){letter_f()}, aantalSeconden);
		}
		else if (invoer[index] == "g"){
			setTimeout(function(){letter_g()}, aantalSeconden);
		}
		else if (invoer[index] == "h"){
			setTimeout(function(){letter_h()}, aantalSeconden);
		}
		else if (invoer[index] == "i"){
			setTimeout(function(){letter_i()}, aantalSeconden);
		}
		else if (invoer[index] == "j"){
			setTimeout(function(){letter_j()}, aantalSeconden);
		}
		else if (invoer[index] == "k"){
			setTimeout(function(){letter_k()}, aantalSeconden);
		}
		else if (invoer[index] == "l"){
			setTimeout(function(){letter_l()}, aantalSeconden);
		}
		else if (invoer[index] == "m"){
			setTimeout(function(){letter_m()}, aantalSeconden);
		}
		else if (invoer[index] == "n"){
			setTimeout(function(){letter_n()}, aantalSeconden);
		}
		else if (invoer[index] == "o"){
			setTimeout(function(){letter_o()}, aantalSeconden);
		}
		else if (invoer[index] == "p"){
			setTimeout(function(){letter_p()}, aantalSeconden);
		}
		else if (invoer[index] == "q"){
			setTimeout(function(){letter_q()}, aantalSeconden);
		}
		else if (invoer[index] == "r"){
			setTimeout(function(){letter_r()}, aantalSeconden);
		}
		else if (invoer[index] == "s"){
			setTimeout(function(){letter_s()}, aantalSeconden);
		}
		else if (invoer[index] == "t"){
			setTimeout(function(){letter_t()}, aantalSeconden);
		}
		else if (invoer[index] == "u"){
			setTimeout(function(){letter_u()}, aantalSeconden);
		}
		else if (invoer[index] == "v"){
			setTimeout(function(){letter_v()}, aantalSeconden);
		}
		else if (invoer[index] == "w"){
			setTimeout(function(){letter_w()}, aantalSeconden);
		}
		else if (invoer[index] == "x"){
			setTimeout(function(){letter_x()}, aantalSeconden);
		}
		else if (invoer[index] == "y"){
			setTimeout(function(){letter_y()}, aantalSeconden);
		}
		else if (invoer[index] == "z"){
			setTimeout(function(){letter_z()}, aantalSeconden);
		}
		index++;
  }
}
var input = document.getElementById("input")
knop.addEventListener("click", zoeker);


let aanknop = document.getElementById("aanknop");
aanknop.addEventListener("click", verander);
function verander(){
	if (aanknop.innerHTML == "Zet de lampen uit"){
		sendRequest(1, geen);
		sendRequest(2, geen);
		sendRequest(3, geen);
		sendRequest(4, geen);
		sendRequest(5, geen);
		aanknop.innerHTML = "Zet de lampen aan";
	}
	else if (aanknop.innerHTML == "Zet de lampen aan"){
		aanknop.innerHTML = "Zet de lampen uit";
		sendRequest(1, rood);
		sendRequest(2, rood);
		sendRequest(3, rood);
		sendRequest(4, rood);
		sendRequest(5, rood);
	}
	helderheid_hoog.addEventListener("click", omhoog)
	helderheid_omlaag.addEventListener("click", omlaag) 
