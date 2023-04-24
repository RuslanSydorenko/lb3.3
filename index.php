<?php 
	include 'connect.php';	// Подключаем файл connect.php для работы с БД
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Lb_3</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
</head>
<body>
	<script src="scripts/initAJAX.js" defer></script>
	<script src="scripts/vendor.js" defer></script>
	<script src="scripts/category.js" defer></script>
	<script src="scripts/price.js" defer></script>
	<div>
		<form>
			<p>Vendor:</p>
			<select name="vendor" id="selectVendor">
				<?php
					// Запрос на имена производителей и вывод их в выпадающем списке
					$sql = "SELECT v_name FROM vendors";
					foreach($dbh->query($sql) as $row) {
						echo '<option value="'.$row["v_name"].'">'.$row["v_name"].'</option>';
					}
				?>
			</select>
			<input type="button" id="vendorBtn" value="Submit">
		</form>
		<form>
			<p>Category:</p>
			<select name="category" id="selectCategory">
				<?php
					// Запрос на доступные категории
					$sql = "SELECT c_name FROM category";
					foreach($dbh->query($sql) as $row) {
						echo '<option value="'.$row["c_name"].'">'.$row["c_name"].'</option>';
					}
				?>
			</select>
			<input type="button" id="categoryBtn" value="Submit">
		</form>
		<form>
			<p>Min price:</p>
			<input type="number" min = "0" name="minPrice" id="min">
			<p>Max price:</p>
			<input type="number" min = "0" name="maxPrice" id="max">
			<input type="button" id="priceBtn" value="Submit">
		</form>
	</div>
	<div id="result"></div>
</body>
</html>