<!doctype html>	<!-- Author:	Silas Little 			 -->
<html lang="en"><!-- Date:	4/18/2020 			 -->						
<head>		<!-- Desc:	Temporary script to process form data -->						
  <title>Thank You</title>	
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="linxixy.css" />
</head>
<!-- 	DIRECTIONS:
	1. Change the comments above to reflect your name and today's date
	2. Replace "YOUR STYLE SHEET" with the path/name of your style sheet.
	3. Replace the contents of the <footer> with your standard footer.
	4. Set the value of the action attribute in your form to "processForm.php"
	5. DO NOT CHANGE THE CODE INSIDE THE PHP TAGS.
-->
<body>
<header>
<img id="headImg" src="images/linxixy.png" alt="Linxixy" title="Linxixy">
</header>
<nav>
<ul>
	<li><a href="index.html" id='homep'>Home</a></li>
	<li><a href="charm.html" id='productp'>Charms</a></li>
	<li><a href="commissions.html" id="commsp">Commissions</a></li>
	<li><a href="emote.html" id='emotep'>Emotes</a></li>
	<li><a href="termsndconds.html" id='termsp'>Terms&amp;Conditions</a></li>
	<li><a href="about.html" id='aboutp'>About</a></li>
</ul>
</nav>
<div id="wrapper">
<aside id="formData">
<?php 
	print_r($_POST);
?>
</aside>
<footer>
<p>&copy; </span><span id="copyright"></span>. Linxixy's Art</p>
</footer>
</div><!-- wrapper -->
<script src="scripts/script.js"></script>
</body>
</html>
