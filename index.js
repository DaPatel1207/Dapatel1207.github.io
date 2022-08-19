// Adding Parallax

let mountain = document.querySelector(".mountain");

window.addEventListener("scroll", function () {
	var value = window.scrollY;

	mountain.style.bottom = -value * 0.02 + "%";
});

// Validating postal code
let codeInput = document.getElementById("postal-code");
let label = document.getElementById("postal-label");

codeInput.addEventListener("input", function () {
	var regEx = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;
	if (regEx.test(codeInput.value)) {
		label.innerText = "Valid Code";
	} else {
		label.innerText = "Invalid Code";
	}
});

// Checking hourly rate

let hire = document.getElementById("hiring");
let comment = document.getElementById("comment");
let question = document.getElementById("question");

hiring.addEventListener("click", function () {
	if (hire.checked) {
		document.getElementById("hiring-form").classList.add("show-rate");
	}
});

comment.addEventListener("click", function () {
	if (comment.checked) {
		document.getElementById("hiring-form").classList.remove("show-rate");
	}
});

question.addEventListener("click", function () {
	if (question.checked) {
		document.getElementById("hiring-form").classList.remove("show-rate");
		console.log("working");
	}
});
