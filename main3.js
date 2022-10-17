
var inputfield = document.querySelector(".inputfield");
var button = document.querySelector("#button");
var h2 = document.querySelector("#random");


button.addEventListener('click',function(){

	if(inputfield.value === '')
	{
		alert("Please fill the inputfield");
	}
	else{
h2.textContent = inputfield.value;
inputfield.value = '';
	}
})