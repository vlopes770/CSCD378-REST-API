<?php

	$verb = $_SERVER['REQUEST_METHOD'];
	$uri = $_SERVER['REQUEST_URI'];
	$query = $_GET['query'];
	$uriType= $_GET['uriType'];
	$uriArray = explode("/",$uri);
	//echo ($uriArray[1]."\n");
	
	if($verb == 'GET')
	{	
		if($uriType=='brands');
		{
			if($query == 'details')
			{
				echo("returns brand details");
			}
			if($query=='candesigns')
			{
				echo("returns can designs");
			}
			if($query=='flavors')
			{
				echo("returns flavors");
			}
		}
		if($uriType=='cans')
		{
			if($query=='details')
			{
				echo("returns can details");
			}
			
		}
		if($uriType=='companies')
		{
			if($query=='details')
			{
				echo("returns company details");
			}
			if($query=='brands')
			{
				echo("returns brands of the company");
			}
		}
		if($uriType=='flavors')
		{
			if($query=='details')
			{
				echo("returns flavor details");
			}
			if($query=='cans')
			{
				echo("returns cans of the flavor");
			}
			if($query=='brands')
			{
				echo("returns flavors of the brand");
			}
			if($query=='companies')
			{
				echo("returns flavors of the company");
			}
		}
	}
	if($ver=="POST")
	{
		if($uriType=="cans")
		{
			if($query=='userReview')
			{
				echo("posts user review");
			}
		}
	}
		
		/*echo($_SERVER['DOCUMENT_ROOT']);
		$query = $_GET['name'];
		$test = "test";
		include ("can.php");
		//echo("can.".$query.".php");*/
	}
	
?>