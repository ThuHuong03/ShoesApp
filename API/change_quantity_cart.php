<?php
//thêm giỏ hàng
include('connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$user_id = $obj['user_id'];
$product_id = $obj['product_id'];
$quantity = $obj['quantity'];
$size= $obj['size'];


	
	$sql = "UPDATE `cart` SET `quantity`= $quantity WHERE user_id= $user_id and product_id= $product_id and size= $size";
	$result = $mysqli->query($sql);
	if($result){
		echo 'THANH_CONG';
	}
	else{
		echo 'KHONG_THANH_CONG';
	}


?>