var yukiw_txt	= "start-ups";
var yukiw_ti		= 0;
var yukiw_i		= 0;
var yukiw_speed	= 100;

function yuki_writer() {
	if (yukiw_i < yukiw_txt.length) {
		document.getElementById("yuki_words").innerHTML += yukiw_txt.charAt(yukiw_i);
		yukiw_i++;
		setTimeout(function () {
			yuki_writer(yukiw_speed, yukiw_txt)
		}, yukiw_speed);
	}
	else {
		setTimeout(function () {
			document.getElementById("yuki_words").innerHTML = "";
			if (yukiw_ti === 0) {
				yukiw_txt = "businesses";
				yukiw_ti++;
			}
			else if (yukiw_ti === 1) {
				yukiw_txt = "artists";
				yukiw_ti++;
			}
			else if (yukiw_ti === 2) {
				yukiw_txt = "start-ups";
				yukiw_ti++;
			}
			else {
				yukiw_txt = "you";
				yukiw_ti = 0;
			}
			yukiw_i = 0;
			yuki_writer();
		}, 1500);
	}
}

function yuki_starter() {
	yuki_writer();
}

window.onload = yuki_starter;


function scroller(id) {
	var offset = -56;

	$('html, body').animate({
		scrollTop: $(id).offset().top + offset
	}, 1000);
}