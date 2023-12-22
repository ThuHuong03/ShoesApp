<?php
//thêm giỏ hàng
include('connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$user_id = $obj['user_id'];
$product_id = $obj['product_id'];
$quantity = $obj['quantity'];
$size= $obj['size'];


	
	$sql = "INSERT INTO cart(user_id,product_id, quantity,size,checked) VALUES('$user_id','$product_id','$quantity', '$size', 0)";
	$result = $mysqli->query($sql);
	if($result){
		echo 'THANH_CONG';
	}
	else{
		echo 'KHONG_THANH_CONG';
	}


?>