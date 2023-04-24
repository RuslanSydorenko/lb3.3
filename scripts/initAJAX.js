let ajax; 

try {
	ajax = new ActiveXObject("Microsoft.XMLHTTP");
} catch (e) {
	try {
		ajax = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			ajax = new XMLHttpRequest();
		} catch (e) {
			ajax = 0;
		} 
	}
}

let result = document.getElementById("result");