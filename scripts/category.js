let categoryBtn = document.getElementById("categoryBtn");
categoryBtn.addEventListener("click", category);

function category() {
	if (!ajax) {
		console.log("AJAX not init");
		return;
	}
	let category = document.getElementById("selectCategory").value;
	ajax.onreadystatechange = ResultCategory;
	ajax.open("POST", "main/category.php");
	ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	ajax.send(`category=${category}`);
}

function ResultCategory() {
	if (ajax.readyState == 4) {
		if (ajax.status == 200) {
			// Получение результата формата XML 
			let obj = ajax.responseXML.firstChild.children;
			// Формируем таблицу для вывода информации
			let output = '<table border = "1">' +
				'<captoin>Category: ' +
				document.getElementById("selectCategory").value +
				'</b></caption>';
			for (let i = 0; i < obj.length; i++) {
				output += "<tr>";
				output += "<td>"+obj[i].children[0].textContent+"</td>";
				output += "<td>"+obj[i].children[1].textContent+"</td>";
				output += "<td>"+obj[i].children[2].textContent+"</td>";
				output += "<td>"+obj[i].children[3].textContent+"</td>";
				output += "</tr>";
			}
			output += '</table>';
			result.innerHTML = output;
		} 
		else console.log(ajax.status + " - " + ajax.statusText);
		ajax.abort();
	}
}