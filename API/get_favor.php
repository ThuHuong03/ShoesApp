<?php

	include('connect/connect.php');
	$user_id = $_GET['user_id'];

	$carts = $mysqli->query("SELECT product_id FROM favor WHERE user_id = $user_id ");
	
	if ($carts == null  ) { // Kiểm tra xem mảng $cart có rỗng hay không
		echo json_encode([]); // Nếu rỗng, trả về mảng JSON rỗng
	}

	 else 
	 {
		while ($row = $carts->fetch_object()){
	    
		$cart[] = $row;
	}

	
	echo json_encode($cart);


	 }
	
?>