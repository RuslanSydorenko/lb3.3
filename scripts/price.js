let priceBtn = document.getElementById("priceBtn");
priceBtn.addEventListener("click", price);

function price() {
	if (!ajax) {
		console.log("AJAX not init");
		return;
	}
	let min = document.getElementById("min").value;
	let max = document.getElementById("max").value;
	ajax.onreadystatechange = ResultPrice;
	ajax.open("POST", "main/price.php");
	ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	ajax.send(`minPrice=${min}&maxPrice=${max}`);
}

function ResultPrice() {
	if (ajax.readyState == 4) {
		if (ajax.status == 200) {
			let arr = JSON.parse(ajax.response);	// Перевод из JSON в obj (массив)
			let output = '<table border = "1">';
			arr.forEach(function(i) {
				output += "<tr>";
				output += "<td>"+i['name']+"</td>";
				output += "<td>"+i['price']+"</td>";
				output += "<td>"+i['quantity']+"</td>";
				output += "<td>"+i['quality']+"</td>";
				output += "</tr>";
			});
			output += "</table>"
			result.innerHTML = output;
		} 
		else console.log(ajax.status + " - " + ajax.statusText);
		ajax.abort();
	}
}