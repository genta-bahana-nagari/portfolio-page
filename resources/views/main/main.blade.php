@extends('template.porto-main')

  <!-- Begin Content -->
  <!-- Hero -->
  @section('main')
  <link href="{{ asset('assets/style/hero.css') }}" rel="stylesheet">
  <div class="container hero">
    <div class="row align-items-center" style="padding-right: 5%; padding-left: 5%;">
      <!-- Gambar -->
      <div class="col-md-6 text-center">
        <div class="image-container">
          <img src="{{ asset('assets/image/SOC02150.jpg') }}" alt="Genta">
        </div>
      </div>

      <!-- Teks -->
      <div class="col-md-6" id="text-side" style="color: white;">
        <div class="row">
          <h2 class="intro">Yup, it's me folks</h2>
          <h1 class="intro">Call me Genta</h1>
        </div>
        <!-- Divider -->
        <div class="d-flex flex-wrap align-items-center py-1 my-1 border-top"></div>
        <!-- End Divider -->
        <div class="row" id="my-info">
          <p>Information & Network System Student
            <br>Web Developer | Linux System Manager
            <br>Network Administrator | IoT Project Manager
          </p>
          <p>Music Enthusiast
            <br>Karawitan | Classic Orchestra | Theater Musical
          </p>
        </div>
        <!-- Divider -->
        <div class="d-flex flex-wrap align-items-center py-1 my-1 border-top"></div>
        <!-- End Divider -->
        <div class="row" style="margin-left: 1%; margin-right: 1%; width: auto;">
          <a href="#about" class="btn button-yellow">Read More</a>
        </div>
      </div>
    </div>
  </div>
<!-- Divider -->

<link href="{{ asset('assets/style/about.css') }}" rel="stylesheet">
<div class="container">
      <div class="row align-items-center" style="padding-right: 5%; padding-left: 5%;">
      <h1 class="title">About Me</h1>
        <div class="col-md-7">
          <h5 id="about">
            Hi there! I'm Gabriel Possenti Genta Bahana Nagari. Everyone calls me Genta. I'm a
            dedicated Vocational High School student from Yogyakarta, Indonesia.
          </h5>
          <p style="margin-top: 3%;" id="child-about">
            I have a passion for learning and adapting quickly to new environments. Currently preparing for intern
            to gain hands-on experience and enhance my skills through real-world projects.I am driven by a strong desire to grow, make my family proud, and contribute effectively in every task I take on.
          </p>
          <p id="child-about">
            I specialize in <strong>Web Development</strong> and <strong>System Administration</strong>.
            I enjoy working on projects where I can solve complex problems, collaborate with teams, and create valuable solutions. 
            <div class="row justify-content-center align-items-center">
            <a href="https://drive.google.com/file/d/1NmUUAFNKFQH_wYrx2fyxm24nF3HVjBl-/view?usp=drive_link"
              target="_blank" class="btn button-yellow" style="width: auto;">Download CV (pdf)</a>
            </div>
        </div>
        <div class="col-md-5">
          <table style="width: 100%; border: 1;" class="tabel1">
            <tr>
              <td class="imaget-table">
                <img src="https://gentabahana.me/assets/image/Table_Image.jpg" class="card-img-top" alt="...">
              </td>
            </tr>
            <tr>
              <td class="title-cell">Quick Detail About Me</td>
            </tr>
            <tr>
              <td class="cell">Gabriel Possenti Genta Bahana Nagari</td>
            </tr>
            <tr>
              <td class="cell">2nd Depok Sleman State Vocational School</td>
            </tr>
            <tr>
              <td class="cell">Network and Application Information System (SIJA)</td>
            </tr>
            <tr>
              <td class="cell">Motto: Help me to do it myself</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
</div>

<link href="{{ asset('assets/style/skill.css') }}" rel="stylesheet">
<div class="container skill" style="color: white;">
    <div class="row align-items-justify skills" style="padding-right: 5%; padding-left: 5%;">
        <h1 class="title text-center" style="margin-top: 3%;">My Top Skills</h1>
        <h5 class="text-center" id="brief">
            Take a look on my top skills. Tap one of these for details.
        </h5>
        <div class="row align-items-center justify-items-center">
            <div class="col-md-6" id="kolom-card">
                <div class="card" style="width: auto; background-color: black; border: solid 1px white; color: white;
                cursor: pointer;" data-bs-toggle="modal" data-bs-target="#WebDevelopment">
                    <div class="card-body d-flex align-items-center">
                        <img src="{{ asset('assets/image/web-development-svgrepo-com.png') }}" class="image-card"
                            alt="Web Development Icon">
                        <div>
                            <h5 class="card-title">Web Development</h5>
                            <p class="card-text">
                                Simple page with HTML, CSS, Bootstrap, a little spice of Javascript. Continue to higher frameworks such as WordPress and Laravel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6" id="kolom-card">
                <div class="card" style="width: auto; background-color: black; border: solid 1px white; color: white;
                cursor: pointer;" data-bs-toggle="modal" data-bs-target="#NetworkAdmin">
                    <div class="card-body d-flex align-items-center">
                        <img src="{{ asset('assets/image/router-svgrepo-com.png') }}" class="image-card"
                            alt="Web Development Icon">
                        <div>
                            <h5 class="card-title">Network Administration</h5>
                            <p class="card-text">
                            Designing a proper topology, choosing the correct protocols for many needs. Either Cisco or Mikrotik, both have excellent performance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-items-center justify-items-center">
            <div class="col-md-6" id="kolom-card">
                <div class="card" style="width: auto; background-color: black; border: solid 1px white; color: white;
                cursor: pointer;" data-bs-toggle="modal" data-bs-target="#SystemManagement">
                    <div class="card-body d-flex align-items-center">
                        <img src="{{ asset('assets/image/computer-svgrepo-com.png') }}" class="image-card"
                            alt="Web Development Icon">
                        <div>
                            <h5 class="card-title">System Management</h5>
                            <p class="card-text">
                            Handling configurations, user control, and ensuring reliability, including troubleshooting and maintenance. Proficient in Linux and Windows system, integrating hardware with supporting software for optimal performance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6" id="kolom-card">
                <div class="card" style="width: auto; background-color: black; border: solid 1px white; color: white;
                cursor: pointer;" data-bs-toggle="modal" data-bs-target="#IoT">
                    <div class="card-body d-flex align-items-center">
                        <img src="{{ asset('assets/image/smart-3-svgrepo-com.png') }}" class="image-card"
                            alt="Web Development Icon">
                        <div>
                            <h5 class="card-title">IoT Development</h5>
                            <p class="card-text">
                            Building interconnected systems with IoT devices to enable automation and remote monitoring. Familiar with Arduino and ESP’s and integrating them with sensors and wireless communication protocols
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-items-center justify-items-center">
            <div class="col-md-6" id="kolom-card">
                <div class="card" style="width: auto; background-color: black; border: solid 1px white; color: white;
                cursor: pointer;" data-bs-toggle="modal" data-bs-target="#Database">
                    <div class="card-body d-flex align-items-center">
                        <img src="{{ asset('assets/image/database-svgrepo-com.png') }}" class="image-card"
                            alt="Web Development Icon">
                        <div>
                            <h5 class="card-title">Database Management</h5>
                            <p class="card-text">
                            Managing and optimizing relational databases like MySQL for efficient data storage and retrieval. Skilled in designing database schemas, writing complex queries, and ensuring data integrity and security.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6" id="kolom-card">
                <div class="card" style="width: auto; background-color: black; border: solid 1px white; color: white;
                cursor: pointer;" data-bs-toggle="modal" data-bs-target="#ProjectManage">
                    <div class="card-body d-flex align-items-center">
                        <img src="{{ asset('assets/image/web-development-svgrepo-com.png') }}" class="image-card"
                            alt="Web Development Icon">
                        <div>
                            <h5 class="card-title">Project Management</h5>
                            <p class="card-text">
                            Managing and optimizing any projects. Web development, IoT building, 
                            system management, database, or any other stuffs. All in synchronous steps, combined with best communication also respects between teams.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  <link href="{{ asset('assets/style/contact.css') }}" rel="stylesheet">
    <div class="container contact" style="justify-content: center; text-align: center;">
      <h1 class="title" style="text-align: center;">Let's Talk Together!</h1>
      <h5 class="text-center" id="brief">
        Feel free to reach out for further collaboration and inovations.
      </h5>
      <ul class="navbar-nav account mt-3" style="flex-direction: row; justify-content: center; align-items: center;">
        <div class="nav-item">
          <a class="social-account" href="https://www.instagram.com/gentabahananagari/https://www.instagram.com/gentabahananagari/"
          target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div class="nav-item">
          <a class="social-account" aria-current="page" href="https://www.linkedin.com/in/genta-bahana-nagari/" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div class="nav-item">
          <a class="social-account" href="https://github.com/genta-bahana-nagari" target="_blank">
            </i><i class="fa-brands fa-github"></i>
          </a>
        </div>
        <div class="nav-item">
          <a class="social-account" href="mailto:gentapossenti@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
        <div class="nav-item">
          <a class="social-account" href="https://discord.com/users/1190112258181837031" target="_blank">
            <i class="fa-brands fa-discord"></i>
          </a>
        </div>
      </ul>
    </div>
  @endsection