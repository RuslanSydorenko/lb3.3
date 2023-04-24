<?php
	include '../connect.php';

	$category = $_POST['category'];		// Передаем значение через POST

	// Формируем SQL запрос
	$sql = 'SELECT name, price, quantity, quality FROM items inner JOIN category ON FID_Category = ID_Category WHERE c_name = :category';

	$sth = $dbh->prepare($sql);	// Инициализация подготовленого запроса
	$sth->bindValue(':category', $category); // Подставляем значение в переменную :category	
	$sth->execute(); // Выполняем подготовленный запрос
	$res = $sth->fetchAll(PDO::FETCH_ASSOC); // ЗАписываем результат в виде ключ-значение

	header('Content-Type:text/xml');
	header("Cache-Control: no-cache, must-revalidate");
	echo '<?xml version="1.0" encoding="utf8"?>';
	echo "<header>";
	foreach($res as $obj) {
		print "<obj>
			<name>".$obj["name"]."</name>
			<price>".$obj["price"]."</price>
			<quantity>".$obj["quantity"]."</quantity>
			<quality>".$obj["quality"]."</quality>
		</obj>";
	}
	echo "</header>";