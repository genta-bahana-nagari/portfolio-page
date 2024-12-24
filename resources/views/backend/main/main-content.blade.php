@extends('backend.template.porto-layout')

  <!-- Begin Content -->
  <!-- Hero -->
  @section('main-hero')
  <style>
    .image-container {
      max-width: 350px; 
      height: 467px;
      border-top-left-radius: 35px;
      border-top-right-radius: 35px;
      overflow: hidden;
      position: relative;
    }

    .image-container img {
      width: 100%;
      height: 100%; 
      object-fit: cover;
      object-position: bottom;
    }

    .hero {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h2 .intro {
      font-size: 2em;
    }

    h1 .intro {
      font-size: 3em;
    }

    .intro {
      font-weight: bold;
      color: white;
      text-align: end;
    }

    #my-info {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 16px;
      font-weight: 500;
      text-align: end;
    }

    .button-yellow {
      background-color: #ffc107; /* Warna kuning */
      color: black;
      font-weight: bold;
      padding: 10px 20px;
      border: none;
      border-radius: 20px;
      text-decoration: none;
      transition: color 0.3s ease; /* Smooth color transition on hover */
    }

    .button-yellow:hover {
      background-color: black; /* Warna kuning */
      color: white;
    }

    .btn-light {
      margin-right: 10px; /* Beri sedikit jarak antar tombol */
      font-weight: bold;
    }

    #text-side {
      margin-top: 5%;
    }

    @media (max-width: 768px) {
      .image-container {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 225px;
        height: 300px;
        border-top-left-radius: 35px;
        border-top-right-radius: 35px;
        overflow: hidden;
        position: relative;
      }

      .intro {
        text-align: center;
      }

      h2 .intro {
        font-size: 18px;
      }

      h1 .intro {
        font-size: 20px;
      }

      #my-info {
        text-align: center; 
        font-size: 14px;
      }
    }
  </style>

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
  @yield('main-about')
  @endsection

<!-- Divided Content -->

<!-- About Me -->
  @section('main-about')
  <style>
      .title {
        padding-right: 3%;
        padding-left: 3%;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 2.3em;
        font-weight: 650;
        text-align: center;
        color: white;
      }

      .title  {
        text-align: end;
      }

      #brief {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;
        font-weight: 500;
        text-align: justify;
        color: white;
      }

      #about {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 18px;
        font-weight: 650;
        text-align: justify;
        color: white;
      }

      #child-about {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;
        font-weight: 500;
        text-align: justify;
        color: white;
        text-decoration: none;
      }

      .tabel1 {
        border: 1px solid #FFFFFF;
        color: #FFFFFF;
        font-weight: bold;
      }

      .image-table {
        max-width: 300px; 
        height: 400px;
        overflow: hidden;
        position: relative;
      }

      .image-table img {
        object-fit: cover;
        object-position: center;
      }

      .cell {
        padding-top: 2.5%;
        padding-bottom: 2.5%;
        padding-left: 2.5%;
        border: 1px solid #FFFFFF;
        font-family: Verdana, Arial, Helvetica, sans-serif;
        font-size: 14px;
        text-align: start;
      }

      .title-cell {
        text-align: start;
        padding-top: 2.5%;
        padding-bottom: 2.5%;
        padding-left: 2.5%;
        font-size: 18px;
        font-weight: 700;
      }

      @media (max-width: 768px) {
        .title {
          text-align: center;
          font-size: 1.5em;
          margin-top: 10%;
        }

        .tabel1 {
          margin-top: 8%;
        }

        #brief {
          font-size: 14px;
        }

        #about {
          font-size: 16px;
          text-align: center;
        }

        #child-about {
          font-size: 14px;
          text-align: center;
        }

        .title-cell {
          font-size: 16px;
          font-weight: 650;
          text-align: center;
        }

        .cell {
          font-size: 13px;
          text-align: center;
        }
      }
    </style>

    <div class="container">
      <div class="row align-items-center" style="padding-right: 5%; padding-left: 5%;">
      <h1 class="title">About Me</h1>
        <div class="col-md-7">
          <h5 id="about">
            Hi there! I'm Gabriel Possenti Genta Bahana Nagari. Everyone calls me Genta. I'm a
            dedicated Vocational High School student from Yogyakarta, Indonesia.
          </h5>
          <p style="margin-top: 3%;" id="child-about">
            I have a passion for learning and adapting quickly to new environments. Currently interning
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
                <img src="{{ asset('assets/image/Table_Image.jpg') }}" class="card-img-top" alt="...">
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
  @endsection

  <!-- Skill-Experience -->
  @section('main-skill-experience')
  <style>
    .cell-skill,.cell-experience {
      text-align: center;
    }

    .icon-skill,.icon-experience {
      max-width: 100px;
      max-height: auto;
      flex-direction: row;
      justify-content: center;
      margin: 5%;
    }

    .icon-skill,.icon-experience {
      cursor: pointer;
    }

    @media (max-width: 768px) {
      .icon-skill,.icon-experience {
        max-width: 55px;
        margin: 5%;
      }
    }
  </style>
  <div class="container" style="color: white;">
    <div class="row align-items-justify skills" style="padding-right: 5%; padding-left: 5%;">
      <h1 class="title text-center">Skills</h1>
      <h5 class="text-center" id="brief">
      Tap or click these icons for my detail skills.
      </h5>
      <table style="width: 100%; border: none; justify-content: center; margin-top: 3%;">
        <tr>
          <td class="cell-skill">
            <img class="icon-skill" data-bs-toggle="modal" data-bs-target="#HTML"
            src="https://static-00.iconduck.com/assets.00/html-5-icon-896x1024-okm7c3dg.png" alt="...">
          </td>
          <td class="cell-skill">
            <img class="icon-skill" data-bs-toggle="modal" data-bs-target="#CSS"
            src="https://static-00.iconduck.com/assets.00/css-3-icon-878x1024-f8npzpbm.png" alt="...">
          </td>
          <td class="cell-skill">
            <img class="icon-skill" data-bs-toggle="modal" data-bs-target="#Bootstrap"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="...">
          </td>
        </tr>
        <tr>
          <td class="cell-skill">
            <img class="icon-skill" data-bs-toggle="modal" data-bs-target="#MariaDB"
            src="https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vert_white-transparent.png" alt="...">
          </td>
          <td class="cell-skill">
            <img class="icon-skill" data-bs-toggle="modal" data-bs-target="#Laravel"
            src="https://static-00.iconduck.com/assets.00/laravel-icon-995x1024-dk77ahh4.png" alt="...">
          </td>
          <td class="cell-skill">
            <img class="icon-skill" data-bs-toggle="modal" data-bs-target="#MySQL"
            src="https://camo.githubusercontent.com/8315ae4f54ff162215cb8b1adff1a35e14be6fa662578bda0a3aca73198e913e/68747470733a2f2f63646e342e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6c6f676f732d332f3138312f4d7953514c2d313032342e706e67" alt="...">
          </td>
        </tr>
        <tr>
          <td class="cell-skill">
            <img class="icon-skill" data-bs-toggle="modal" data-bs-target="#Network"
            src="https://cdn-icons-png.flaticon.com/512/926/926076.png" alt="...">
          </td>
          <td class="cell-skill">
            <img class="icon-skill" data-bs-toggle="modal" data-bs-target="#Linux"
            src="https://cdn-icons-png.flaticon.com/512/6124/6124995.png" alt="...">
          </td>
          <td class="cell-skill">
            <img class="icon-skill" data-bs-toggle="modal" data-bs-target="#Arduino"
            src="https://static-00.iconduck.com/assets.00/arduino-icon-2048x1397-pmu0lemh.png" alt="...">
          </td>
        </tr>
        <tr>
          <td class="cell-skill">
          </td>
          <td class="cell-skill">
            <img class="icon-skill" data-bs-toggle="modal" data-bs-target="#Node-RED"
            src="https://nodered.org/about/resources/media/node-red-icon-2.png" alt="...">
          </td>
          <td class="cell-skill">
          </td>
        </tr>
      </table>
    </div>
    <div class="row align-items-justify experience" style="padding-right: 5%; padding-left: 5%; padding-top: 5%;">
      <h1 class="title text-center">Experience</h1>
      <h5 class="text-center" id="brief">
      Tap or click these icons my detail experience.
      </h5>
      <table style="width: 100%; border: none; justify-content: center;">
        <tr>
          <td class="cell-experience">
            <img class="icon-experience" data-bs-toggle="modal" data-bs-target="#Project-Manager"
            src="https://cdn-icons-png.flaticon.com/512/10857/10857083.png" alt="...">
          </td>
          <td class="cell-experience">
            <img class="icon-experience" data-bs-toggle="modal" data-bs-target="#PAKS"
            src="{{ asset('assets/image/PAKS.png') }}" alt="...">
          </td>
          <td class="cell-experience">
            <img class="icon-experience" data-bs-toggle="modal" data-bs-target="#OSIS-Depsa"
            src="https://1.bp.blogspot.com/-2VW_PDL3bDg/Xv9Yd7uI_II/AAAAAAAAabQ/Qat_ulPfomULym9Or-qzOC2BnPSS4HajwCLcBGAsYHQ/s1600/logo-osis_237-design.png" alt="...">
          </td>
        </tr>
        <tr>
          <td class="cell-experience">
          </td>
          <td class="cell-experience">
            <img class="icon-experience" data-bs-toggle="modal" data-bs-target="#Karawitan"
            src="{{ asset('assets/image/Logo_Karawitan.jpg') }}" alt="...">
          </td>
          <td class="cell-experience">
          </td>
        </tr>
      </table>
    </div>
  </div>  
  @endsection

  <!-- portfolio -->
  @section('main-portfolio')
  <style>
    .card-img-top {
      height: 200px;
      object-fit: cover;
      width: 100%;
    }

    .link-github {
      text-decoration: none;
      color: white;
      transition: color 0.3s ease;
    }

    .link-github:hover {
      text-decoration: underline;
      color: #9b9b9b;
    }

    .card img,.card-body {
      color: white;
      background-color:black;
      border: solid 1px white;
    }

    #to-view-code {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;
        font-weight: 500;
        text-align: justify;
        color: white;
        text-decoration: none;
      }

    @media (max-width: 768px) {
      #option {
        flex-direction: row; 
        justify-content: center;
      }

      #to-view-code {
        margin: 15px;
        font-size: 13px;
      }
    }
  </style>
  <div class="container" style="color: white;">
    <div class="row align-items-justify" style="padding-right: 5%; padding-left: 5%;">
      <h1 class="title text-center">Portfolio</h1>
      <h5 class="text-center" id="brief"> Take a look on my previous project.
        <br>
        Check on
        <span>
          <a href="https://github.com/genta-bahana-nagari" class="link-github"
          target="_blank">GitHub</a>
        </span>
        <span>
          for more.
        </span>
      </h5>
      <div class="col-md-4 pt-3">
        <div class="card image-card" style="width: 100%; border: none">
          <img src="{{ asset('assets/image/Sinvent.png') }}" class="card-img-top" alt="...">
          <div class="card-body" style="text-align: center;">
            <h5 class="card-text">Inventory System</h5>
            <p>Laravel based inventory system with high reliability and data acuracy.</p>
            <div class="d-flex flex-wrap align-items-center py-1 my-1 border-top" id="option"></div>
              <a href="https://sinvent.gentabahana.me" id="to-view-code" target="_blank">Live Preview</a>
              <span>
              <a href="https://github.com/genta-bahana-nagari/sinvent24" id="to-view-code" target="_blank">Source Code</a>
              </span>
          </div>
        </div>
      </div>
      <div class="col-md-4 pt-3">
        <div class="card image-card" style="width: 100%; border: none">
          <img src="{{ asset('assets/image/Studio_Karawitan.jpeg') }}" class="card-img-top" alt="...">
          <div class="card-body" style="text-align: center;">
            <h5 class="card-text">Music Studio Webpage</h5>
            <p>Inspired from Stembayo Karawitan Group, with a touch of Wordpress styling.</p>
            <div class="d-flex flex-wrap align-items-center py-1 my-1 border-top" id="view-or-code"></div>
              <a href="https://studio.gentabahana.me" id="to-view-code" target="_blank">Live Preview</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 pt-3">
        <div class="card image-card" style="width: 100%; border: none">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWakPRELH6vYHPPLPNBhc8cOVvJmH0bP2SHw&s" class="card-img-top" alt="...">
          <div class="card-body" style="text-align: center;">
            <h5 class="card-text">ESP Camera</h5>
            <p>Built for P5 school event. Perfect combination of cheap components and inovations.</p>
            <div class="d-flex flex-wrap align-items-center py-1 my-1 border-top" id="view-or-code"></div>
              <a href="#" id="to-view-code" target="_blank">Source Code (TBA)</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-4 justify-content-center align-items-center">
      <a href="https://drive.google.com/file/d/1_Vc9yrPF4kCr_UdkXUhno7jz0hDBGyP3/view?usp=sharing" class="btn button-yellow" style="width: auto;"
      target="_blank">Download Portfolio (pdf)</a>
    </div>
  </div>
  @endsection

  <!-- My Contact -->
  @section('main-contact')
  <style>
      .container.final {
        padding-right: 3%;
        padding-left: 3%;
      }

      .final-para {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;
        font-weight: 500;
        text-align: justify;
        color: white;
      }

      .account {
        gap: 25px;
      }

      .social-account {
        color: white;
        font-size: 1.75em;
        margin-right: 15px;
        transition: color 0.3s ease;
      }

      .social-account:hover {
        color: #e0a800;
      }

      @media (max-width: 768px) {
      .social-account {
          font-size: 1.2em;
          margin-right: 10px;
          gap: 20px;
        }
      }
    </style>
    <div class="container">
      <h1 class="title" style="text-align: center;">Let's Talk Together!</h1>
      <h5 class="text-center" id="brief">
        Feel free to reach out for further collaboration and inovations.
      </h5>
      <ul class="navbar-nav account" style="flex-direction: row; justify-content: center; align-items: center;">
        <div class="nav-item">
          <a class="social-account" href="https://www.instagram.com/gentabahananagari/https://www.instagram.com/gentabahananagari/"
          target="_blank">
            <i class="bi bi-instagram"></i>
          </a>
        </div>
        <div class="nav-item">
          <a class="social-account" aria-current="page" href="https://www.linkedin.com/in/genta-bahana-nagari/" target="_blank">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
        <div class="nav-item">
          <a class="social-account" href="https://github.com/genta-bahana-nagari" target="_blank">
            <i class="bi bi-github"></i>
          </a>
        </div>
        <div class="nav-item">
          <a class="social-account" href="mailto:gentapossenti@gmail.com" target="_blank">
            <i class="bi bi-envelope-fill"></i>
          </a>
        </div>
        <div class="nav-item">
          <a class="social-account" href="https://discord.com/users/1190112258181837031" target="_blank">
            <i class="bi bi-discord"></i>
          </a>
        </div>
      </ul>
    </div>
  @endsection
