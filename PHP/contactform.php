<html>
<head>
    <title>Contact us form using php mysql</title>
    <link rel="stylesheet" type="text/css" href="../CSS/style.css">
</head>
<body>
<nav>
    <div class="logo">
      <a href="../index.html">
        <img src="../images/Logo.png" alt="World Data Explorer logo">
      </a>
    </div>
    <div class="title">
      <a href="../index.html" style="text-decoration: none;">
        <h1>World Data Explorer</h1>
      </a>
    </div>
    <div class="hamburger-menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <ul class="nav-links">
      <li><a href="../index.html">HOME</a></li>
      <li><a href="../HTML/about.html">ABOUT US</a></li>
      <li><a href="contactform.php">BIOGRAPHY</a></li>
      <li><a href="contactform.php">CONTACT US</a></li>
    </ul>
  </nav>
</br></br></br>
    <h2>AUTHOR'S BIOGRAPHY</h2>
    <div class="author-info">
        <img src="../images/profile.jpg">
        <div  class="about-section" >
        <h2 style="color:black;">HELLO!</h2>
        <h2 style="color:black;"> I'm Yvette Tuyambaze</h2>
        <h2 style="color:black;">A third-year computing student at African Leadership College</h2>
       
        </div>
        
        <h3>Experience</h3>
        <ul class="about-section">
        <li>Front-end Web Developer Intern at World Data Explorer Company:</br> Collaborated with senior developers to create responsive </br>and user-friendly websites using HTML, CSS, and Javascript.</li>
           
        </ul>
        <h3>Skills</h3>
        <ul class="about-section">
            <li>Proficiency in Python, Java, and C++ programming languages</li>
            <li>Excellent analytical and data management skills</li>
            <li>Strong project management skills, including project planning, execution, and monitoring</li>
            <li>Effective communication skills, both verbal and written</li>
            <li>Knowledge of web development methodologies and user experience</li>
            <li>Experience with social media marketing and communication strategies</li>
        </ul>
       
    </div>
    </br></br>
    
	  
    <div class="container">
        <h1>CONTACT FORM</h1>
        <form id="back"action="process.php" method="POST">
            <div class="form-group">
                <label for="firstname">Firstname</label>
                <input type="text" name="firstname" id="firstname" class="form-control" placeholder="Enter Firstname" required>
            </div>
            <div class="form-group">
                <label for="lastname">Lastname</label>
                <input type="text" name="lastname" id="lastname" class="form-control" placeholder="Enter Lastname" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" name="phone" id="phone" class="form-control" placeholder="Enter Phone Number" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="Enter Email" required>
            </div>
            <div class="form-group">
            <label for="email">Message</label>
                <textarea  type="textarea" name="message" id="message" class="form-control" placeholder="Enter Message" style="height:90px;" required></textarea>
            </div>
            <div class="form-group">
</br> </br></br></br>
        <button class="btn btn-success" type="submit">Submit</button>
        <button class="btn btn-danger" type="reset">Reset</button>
    </div>
        </form>
    </div>
</br>
    <footer style="margin-left: 100px;">
		<div class="footer-content">
        <a href="../index.html">
			<div class="logo">
			  <img src="../images/Logo.png" alt="World Data Explorer logo">
			</div>
			
		  </a>
		  <a href="../index.html" style="text-decoration: none;">
			<div class="title" style="color:white;">
			  <h1>World Data Explorer</h1>
			</div>
		  </a>
		  <div>
			<h3>Useful Links</h3>
			<ul>
			  <li><a href="../index.html">Home</a></li>
			  <li><a href="../HTML/about.html">About</a></li>
			  <li><a href="contactform.php">Biography</a></li>
			  <li><a href="contactform.php">Contact Us</a></li>
			</ul>
		</div>		
		
		  <p>&copy; Copyright 2023 | All Rights Reserved</p>
		
	  </footer>
    <script>
    
    //Menu javascript codes
    function initializeHamburgerMenu() {
      const hamburgerMenu = document.querySelector('.hamburger-menu');
      const navLinks = document.querySelector('.nav-links');

      hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
      });
    }

    initializeHamburgerMenu();
  </script>
</body>

</html>