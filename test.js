
const BRIDGE_URL = "192.168.178.172"  // IP adres van de bridge
const API_KEY = "l1SJ36Y-mE6pM48fRULsOjfFIv2tyV68AWtcXNjB"  //sleutel om de bridge aan te sturen
const BASE_URL = `http://${BRIDGE_URL}/api/${API_KEY}/lights/` //beginstuk van de url


let rood = '{"on": true, "bri": 254, "hue": 0, "sat": 100}'
let groen = '{"on": true, "bri": 200, "hue": 20000, "sat": 200}'
let geen = '{"on": false}'

function letter_a(){
  sendRequest(1, rood);
  sendRequest(2, groen);
  sendRequest(3, geen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_b(){
  sendRequest(1, groen);
  sendRequest(2, rood);
  sendRequest(3, rood);
  sendRequest(4, rood);
  sendRequest(5, body);
}
function letter_c(){
  sendRequest(1, groen);
  sendRequest(2, rood);
  sendRequest(3, groen);
  sendRequest(4, rood);
  sendRequest(5, geen);
}
function letter_d(){
  sendRequest(1, groen);
  sendRequest(2, rood);
  sendRequest(3, rood);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_e(){
  sendRequest(1, rood);
  sendRequest(2, geen);
  sendRequest(3, geen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_f(){
  sendRequest(1, rood);
  sendRequest(2, rood);
  sendRequest(3, groen);
  sendRequest(4, rood);
  sendRequest(5, geen);
}
function letter_g(){
  sendRequest(1, groen);
  sendRequest(2, groen);
  sendRequest(3, rood);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_h(){
  sendRequest(1, rood);
  sendRequest(2, rood);
  sendRequest(3, rood);
  sendRequest(4, rood);
  sendRequest(5, geen);
}
function letter_i(){
  sendRequest(1, rood);
  sendRequest(2, rood);
  sendRequest(3, geen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_j(){
  sendRequest(1, rood);
  sendRequest(2, groen);
  sendRequest(3, groen);
  sendRequest(4, groen);
  sendRequest(5, geen);
}
function letter_k(){
  sendRequest(1, groen);
  sendRequest(2, rood);
  sendRequest(3, groen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_l(){
  sendRequest(1, rood);
  sendRequest(2, groen);
  sendRequest(3, geen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_m(){
  sendRequest(1, groen);
  sendRequest(2, groen);
  sendRequest(3, geen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_n(){
  sendRequest(1, groen);
  sendRequest(2, rood);
  sendRequest(3, geen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_o(){
  sendRequest(1, groen);
  sendRequest(2, groen);
  sendRequest(3, groen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_p(){
  sendRequest(1, rood);
  sendRequest(2, groen);
  sendRequest(3, groen);
  sendRequest(4, rood);
  sendRequest(5, geen);
}
function letter_q(){
  sendRequest(1, groen);
  sendRequest(2, groen);
  sendRequest(3, rood);
  sendRequest(4, groen);
  sendRequest(5, geen);
}
function letter_r(){
  sendRequest(1, rood);
  sendRequest(2, groen);
  sendRequest(3, rood);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_s(){
  sendRequest(1, rood);
  sendRequest(2, rood);
  sendRequest(3, rood);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function lettert_t(){
  sendRequest(1, groen);
  sendRequest(2, geen);
  sendRequest(3, geen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_u(){
  sendRequest(1, rood);
  sendRequest(2, rood);
  sendRequest(3, groen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_v(){
  sendRequest(1, rood);
  sendRequest(2, rood);
  sendRequest(3, rood);
  sendRequest(4, groen);
  sendRequest(5, geen);
}
function letter_w(){
  sendRequest(1, rood);
  sendRequest(2, groen);
  sendRequest(3, groen);
  sendRequest(4, geen);
  sendRequest(5, geen);
}
function letter_x(){
  sendRequest(1, groen);
  sendRequest(2, rood);
  sendRequest(3, rood);
  sendRequest(4, groen);
  sendRequest(5, geen);
}
function letter_y(){
  sendRequest(1, groen);
  sendRequest(2, rood);
  sendRequest(3, groen);
  sendRequest(4, groen);
  sendRequest(5, geen);
}
function letter_z(){
  sendRequest(1, groen);
  sendRequest(2, groen);
  sendRequest(3, rood);
  sendRequest(4, rood);
  sendRequest(5, geen);
}

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

var aanknop = document.getElementById("aanknop");
var uitknop = document.getElementById("uitknop");
aanknop.addEventListener("click", letter_a);
uitknop.addEventListener("click", letter_b);
