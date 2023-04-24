// let ajax;
// try {
// 	ajax = new XMLHttpRequest(); // Создание компонента XMLHTTP (init AJAX)
// } catch (e) {
// 	ajax = 0;
// }

// ------------------------------------------------------------

let vendorBtn = document.getElementById("vendorBtn");
vendorBtn.addEventListener("click", vendor);

function vendor() {
	// Записываем данные из выпадающего списка 
	let vendor = document.getElementById("selectVendor").value;
	
	// Проверка на ициализацию
	if (!ajax) {
		console.log("AJAX not init");
		return;
	}
	ajax.onreadystatechange = ResultVendor; // Функция обработчик после окончания запроса
	ajax.open("POST", "main/vendor.php"); // Соединение с сервером методом POST
	// Метод декодировки
	ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	ajax.send(`vendor=${vendor}`); // Отправка запроса на сервер со значением
}

// Функция-обработчик возвращаемого рузельтата от сервера 
function ResultVendor() {
	// Если запрос успешен, выводим результат в виде текста
	if (ajax.readyState == 4) {
		if (ajax.status == 200) {
			result.innerHTML = ajax.responseText;
		} 
		else console.log(ajax.status + " - " + ajax.statusText);
		ajax.abort();
	}
}

