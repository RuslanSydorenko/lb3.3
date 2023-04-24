<?php

	$db_driver = "mysql";		// Тип БД
	$host = "localhost";		// Хост
	$database = "lb_pdo_goods";	// Имя БД
	$dsn = "$db_driver:host=$host; dbname=$database";

	$username = "root";
	$password = "";

	try {
		$dbh = new PDO ($dsn, $username, $password);	// Подключение к БД
	}
	// При ошибке подключения выводим сообщение
	catch (PDOException $e) {
		echo "Error". $e->getMessage();
		die(); 
	}