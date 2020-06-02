<?php 
if (inset($_POST['submit'])){
	$Nome= $_POST['Nome'];
	$Cognome= $_POST['Cognome'];
	$Email= $_POST['Email'];
	$CAP= $_POST['CAP'];
	$Provincia= $_POST['Provincia'];
	$Telefono= $_POST['Telefono'];
	$fCV= $_POST['fCV'];
	$NomeFile= $_POST['NomeFile'];
	$WebPageFrom= $_POST['WebPageFrom'];
	
	$mailTo = "mirmpro95@gmail.com";
	$header = "From: ".$Email;
	$text = "You have recived an from ". $Nome.".\n\n";
	mail($mailTo, $Nome, $Cognome, $Email, $CAP, $Provincia, $Telefono, $fCV, $NomeFile, $WebPageFrom);
	header("Location: index.html?mailsend");
	
}