<?php
//thêm sp ưa thích
include('connect/connect.php');
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$user_id = $obj['user_id'];
$product_id = $obj['product_id'];



	
	$sql = "DELETE FROM `favor` WHERE user_id = $user_id AND product_id = $product_id";
	$result = $mysqli->query($sql);
	if($result){
		echo 'THANH_CONG';
	}
	else{
		echo 'KHONG_THANH_CONG';
	}


?>