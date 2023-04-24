<?php
	include '../connect.php';

	// Если значение POST пустое присваиваем 0
	if ($_POST['minPrice'] == '') $minPrice = 0;
	else $minPrice = $_POST['minPrice'];

	if ($_POST['maxPrice'] == '') $maxPrice = 0;
	else $maxPrice = $_POST['maxPrice'];

	$sql = 'SELECT name, price, quantity, quality FROM items WHERE price >= :minPrice AND price <= :maxPrice';

	$sth = $dbh->prepare($sql);
	$sth->bindValue(':minPrice', $minPrice);
	$sth->bindValue(':maxPrice', $maxPrice);
	$sth->execute();
	$res = $sth->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($res);