<html>
<head>
    <title>Contact us form using php mysql</title>
    <link rel="stylesheet" type="text/css" href="../CSS/style.css">
    <style>.about-section {
			  padding: 50px;
			  text-align: center;
			  background-color: #ffffff;
			  color: rgb(0, 0, 0);}
              #back {
  background-color: white;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h3 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color:black;
}

.form-control {
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-success {
  background-color: green;
  color: #100f0f;
  border: none;
}

.btn-danger {
  background-color: #dc3545;
  color: #fff;
  border: none;
  margin-left: 10px;
}


            </style>

</head>
<body>
<nav>
        <div class="logo">
            <img src="../images/Logo.png" alt="World Data Explorer logo">
        </div>

        <div class="title">

            <h1>World Data Explorer</h1>
        </div>
        <ul class="nav-links">
            <li><a href="../HTML/index.html">HOME</a></li>
            <li><a href="../HTML/about.html">ABOUT US</a></li>
            <li><a href="contactform.php">BIOGRAPHY</a></li>
            <li><a href="contactform.php">CONTACT US</a></li>
        </ul>
    </nav>
    </br></br></br></br></br></br>
    <h2>SENT SUCCESSFULLY</h2>
   
    
	  
    <?php
include("config.php");
extract($_POST);

$sql = "INSERT INTO `contactform`(`firstname`, `lastname`, `phone`, `email`, `message`) 
VALUES ('".$firstname."','".$lastname."',".$phone.",'".$email."','".$message."')";
$result = $mysqli->query($sql);

if(!$result){
    die("Couldn't enter data: ".$mysqli->error);
}

// Use the user's first name in the thank you message
echo '<div style="background-color: #F0F8FF; padding: 20px;">';
echo '<p style="font-size: 24px; font-weight: bold; margin-bottom: 10px; text-align: center;">Thank You, '.$firstname.'!</p>';
echo '<p style="font-size: 18px; margin-bottom: 20px;text-align: center;">We have received your message and will get back to you soon.</p>';
echo '</div>';

$mysqli->close();
?>
</br></br></br></br></br></br>
    <footer>
		<div class="footer-content">
			<div class="logo">
				<img src="../images/Logo.png" alt="World Data Explorer logo">
			</div>
		  <h3>World Data Explorer</h3>
		  <div>
			<h3>Useful Links</h3>
			<ul>
			  <li><a href="../HTML/index.html">Home</a></li>
			  <li><a href="../HTML/about.html">About</a></li>
			  <li><a href="contactform.php">Biography</a></li>
			  <li><a href="contactform.php">Contact Us</a></li>
			</ul>
		</div>		
		
		  <p>&copy; Copyright 2023 | All Rights Reserved</p>
		
	  </footer>
</body>

</html>

