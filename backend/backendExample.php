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
				echo("returns details");
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
		
		/*echo($_SERVER['DOCUMENT_ROOT']);
		$query = $_GET['name'];
		$test = "test";
		include ("can.php");
		//echo("can.".$query.".php");*/
	}
	
?>