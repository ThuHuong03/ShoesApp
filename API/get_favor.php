<?php

	include('connect/connect.php');
	$user_id = $_GET['user_id'];

	$favors = $mysqli->query("SELECT product_id FROM favor WHERE user_id = $user_id ");
	
	if ($favors == null  ) { // Kiểm tra xem mảng $favors có rỗng hay không
		echo json_encode([]); // Nếu rỗng, trả về mảng JSON rỗng
	}

	 else 
	 {
		while ($row = $favors->fetch_object()){
	    
		$favor[] = $row;
	}

	
	echo json_encode($favor);


	 }
	
?>