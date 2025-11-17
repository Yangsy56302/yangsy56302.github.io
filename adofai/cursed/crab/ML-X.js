const fs = require("fs");
const args = process.argv.slice(2);

let file = fs.readFileSync(args[0]).toString();
file = file.replaceAll(/[^\w",:\[\]\{\}\r\n\t\f\v \.!]/g,'');

let json = JSON.parse(file);

let twirlLocations = json.actions.filter(e=>e.eventType == "Twirl").map(e => e.floor);

let add = 0;
let increment = 0;
let turninc = 0.200949;
for (let n = 0; n < json.angleData.length; n++) {
	if (n == twirlLocations[0]) {
		twirlLocations.shift();
		increment += turninc;
	}
	json.angleData[n] = normalizeAngle(json.angleData[n] + add);
	add += increment;
}

function normalizeAngle(angle) {
	let a = angle % 360
	if (a < 0) a = 360 + a;
	return Number(a.toFixed(3));
}

fs.writeFileSync("out.adofai", JSON.stringify(json,false,4));
