<?php

	include('connect/connect.php');
	$id_bill = $_GET['id_bill'];

	$bill_details = $mysqli->query("SELECT * FROM bill_detail WHERE id_bill = $id_bill ");
	
	

		while ($row = $bill_details->fetch_object()){
	    
		$bill_detail[] = $row;
		}

	
	echo json_encode($bill_detail);


	 
	
?>