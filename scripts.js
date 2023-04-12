document.getElementById('link1').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
    <div class="home">
         <div class="home-content">
         <h1>Junhai Zhang</h1><br>
         <p>A Tech Savvy Database Administator</p><br>
         <ul class="social">
           <li><a href="mailto:w0457612@nscc.ca"><i class="fas fa-envelope"></i></a></li>
           <li><a href="https://www.linkedin.com/in/junhai-zhang-6bb77b1b8/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
           <li><a href="https://twitter.com/davidzjh75" target="_blank"><i class="fab fa-twitter"></i></a></li>
           <li><a href="https://www.facebook.com/profile.php?id=100039955426219" target="_blank"><i class="fab fa-facebook"></i></a></li>
         </ul>
         </div>

  </div>`;
  });
  
  document.getElementById('link2').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
    <div class="goals-container">
  <h2>My Goals</h2>
  <div class="goals-grid">
    <div class="goal-card">
      <div class="goal-icon"><i class="fas fa-laptop-code"></i></div>
      <h3>Become a Full-Stack Web Developer</h3>
      <p>Learn and master front-end and back-end web development technologies to build comprehensive web applications.</p>
    </div>
    <div class="goal-card">
      <div class="goal-icon"><i class="fas fa-code-branch"></i></div>
      <h3>Contribute to Open-Source Projects</h3>
      <p>Join the open-source community by contributing to projects and helping improve existing software.</p>
    </div>
    <div class="goal-card">
      <div class="goal-icon"><i class="fas fa-graduation-cap"></i></div>
      <h3>Obtain a Master's Degree in Computer Science</h3>
      <p>Further my education in computer science and specialize in a specific field to advance my career.</p>
    </div>
    <div class="goal-card">
      <div class="goal-icon"><i class="fas fa-mobile-alt"></i></div>
      <h3>Learn Mobile App Development</h3>
      <p>Expand my skillset by learning mobile app development for iOS and Android platforms.</p>
    </div>
    <div class="goal-card">
      <div class="goal-icon"><i class="fas fa-users"></i></div>
      <h3>Build a Professional Network</h3>
      <p>Connect with other professionals in the tech industry and attend conferences and meetups to expand my network.</p>
    </div>
    <div class="goal-card">
       <div class="goal-icon"><i class="fas fa-pen-fancy"></i></div>
       <h3>Start a Tech Blog</h3>
       <p>Share my knowledge and experiences in web development by writing articles and tutorials on a personal blog.</p>
    </div>
    <!-- Add more goal cards here -->
  </div>
  </div>`;
  });
  
  document.getElementById('link3').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
    <div class="skills-container">
    <h2>My Skills</h2>
    <div class="skills">
    <div class="skill">
        <p>SQL</p>
        <div class="skill-bar">
          <div class="skill-level" data-level="90"></div>
        </div>
      </div>
      <div class="skill">
        <p>HTML</p>
        <div class="skill-bar">
          <div class="skill-level" data-level="90"></div>
        </div>
      </div>
      <div class="skill">
        <p>CSS</p>
        <div class="skill-bar">
          <div class="skill-level" data-level="85"></div>
        </div>
      </div>
      <div class="skill">
        <p>Java</p>
        <div class="skill-bar">
          <div class="skill-level" data-level="75"></div>
        </div>
      </div>
      <div class="skill">
        <p>JavaScript</p>
        <div class="skill-bar">
          <div class="skill-level" data-level="70"></div>
        </div>
      </div>
      <div class="skill">
        <p>Python</p>
        <div class="skill-bar">
          <div class="skill-level" data-level="70"></div>
        </div>
      </div>
      <!-- Add more skill items here -->
    </div>
    </div>`;
    animateSkillBars();
  });

  function animateSkillBars() {
    const skillLevels = document.getElementsByClassName("skill-level");
  
    for (let i = 0; i < skillLevels.length; i++) {
      const skillLevel = skillLevels[i];
      const level = skillLevel.getAttribute("data-level");
      skillLevel.style.width = level + "%";
    }
  }
  
  // Call the animateSkillBars function when the page loads
//   window.onload = animateSkillBars;
  
  document.getElementById('link4').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
    <div class="container">
    <div class="content">
      <div class="work-experience">
        <h2>Work Experience</h2>
        <div class="job">
          <h3>IT System Specialist - IBM (China) Co., Ltd  (2012-2014)</h3>
          <ul>
            <li>Provide ICT technical support</li>
            <li>Delivery of ICT technology solutions</li>
            <li>Ensure customer satisfaction</li>
          </ul>
        </div>
        <div class="job">
          <h3>System Remote Engineer - HP (China) Co., Ltd  (2007-2012)</h3>
          <ul>
            <li>Captured best practices and shared knowledge</li>
            <li>Dig into problems and figure out root cause</li>
            <li>Escalate complex problems and coordinate with the backline</li>
          </ul>
        </div>
      </div>
      <div class="education">
        <h2>Education</h2>
        <p>Diploma of IT Database Administration - Nova Scotia Community College (2022-now)</p>
        <p>Bachelor of Automatic Control  - Dalian University of Technology (1994-1998)</p>
      </div>
      <div class="languages">
        <h2>Languages</h2>
        <ul>
          <li>English - Fluent</li>
          <li>Mandarin - Fluent</li>
        </ul>
      </div>
    </div>
    </div>
  </div>`;
    
      
  });
  
  document.getElementById('link5').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
    <div class="contact-container">
    <h2>Contact Me</h2>
        <form id="contact-form" name="contact" method="post" data-netlify="true" data-netlify-recaptcha="true">
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" name="firstname" required>
        
        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" name="lastname" required>
        
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
        
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        <div data-netlify-recaptcha="true"></div>
        <button type="submit">Send</button>

    </form>
    </div>`;
  });
  