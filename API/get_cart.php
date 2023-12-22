<?php

	include('connect/connect.php');
	$user_id = $_GET['user_id'];

	$carts = $mysqli->query("SELECT * FROM cart WHERE user_id = $user_id and checked= 0");
	
	while ($row = $carts->fetch_object()){
	    
		$cart[] = $row;
	}

	echo json_encode($cart);


?>