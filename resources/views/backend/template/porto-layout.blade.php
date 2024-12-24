<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Genta Bahana Nagari</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css" rel="stylesheet">
  <link href="{{ asset('assets/style/main-layout.css') }}" rel="stylesheet">
  <link rel="icon" type="image/jpeg" href="{{ asset('assets/image/ICON 2.png') }}">
</head>
<body style="background-color: black;">
  <!-- Header -->
  <nav class="navbar navbar-expand-lg sticky-top" style="background-color: black;">
    <div class="container">
      <a class="navbar-brand" href="#">GENTA.Porto</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link custom-nav-link" id="home" aria-current="page" href="#">
              <i class="bi bi-house-door-fill"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-nav-link" id="about-me" href="#about">
              <i class="bi bi-person-square"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-nav-link" id="experience-skill" href="#skill-experience">
              <i class="bi bi-briefcase-fill"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-nav-link" id="project" href="#portfolio">
              <i class="bi bi-journal-bookmark-fill"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Header -->

  <!-- Main Content -->
  <div class="container-fluid begin hero" id="hero">
    @yield('main-hero')
  </div>
  <div class="container-fluid section about" id="about">
    @yield('main-about')
  </div>
  <div class="container-fluid section skill-experience" id="skill-experience">
    @yield('main-skill-experience')
  </div>
  <div class="container-fluid section portfolio" id="portfolio">
    @yield('main-portfolio')
  </div>
  <div class="container-fluid section contact" id="contact">
    @yield('main-contact')
  </div>
  <!-- End Main Content -->

  <!-- Footer -->
  <div class="container-fluid" style="padding-left: 3%; padding-right: 3%;">
    <footer class="d-flex flex-wrap align-items-center py-3 my-1 border-top">
      <div class="container my-auto">
          <div id="footer" class="text-center my-auto" style="color: white;">
              <span>Copyright &copy; 2024 Genta Bahana Nagari All rights reserved.</span>
          </div>
      </div>
    </footer>
  </div>
  <!-- End Footer -->

  <!-- Modal -->
  <style>
    .modal-dialog {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0 auto;
    }
    
    .modal-content {
      width: 88%;
      margin: auto;
      background-color: black;
      color: white;
      border: solid 1px white;
    }

    .modal-header {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-top: 2%;
    }

    .modal-footer p {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 15px;
    }

    .modal-footer:hover {
      cursor: pointer;
    }

    .modal-body {
      text-align: center;
    }

    @media (max-width: 768px) {
      .modal-content {
        width: 75%;
      }

      .modal-footer p {
        font-size: 13px;
      }
    }
  </style>
  
  <div class="modal fade" id="HTML" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center align-content-center">
          <h5 class="text-center">HTML</h5>
        </div>
        <div class="modal-body">
          The "bone" of the digital stage, where words and images find their page, a silent script that shapes the view, the web’s foundation, simple yet true.
        </div>
        <div class="modal-footer d-flex justify-content-center align-content-center">
          <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="CSS" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center align-content-center">
          <h5 class="text-center">CSS</h5>
        </div>
        <div class="modal-body">
          The artist's touch upon the plain, weaving beauty through lines of code’s refrain, it dresses the web in hues and grace, giving life to an empty space.
        </div>
        <div class="modal-footer d-flex justify-content-center align-content-center">
          <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="Bootstrap" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center align-content-center">
          <h5 class="text-center">Bootstrap</h5>
        </div>
        <div class="modal-body">
          A toolkit of elegance, swift to employ, grids and styles that developers enjoy, a ready-made charm for designs to expand, bringing order and art to hand.
        </div>
        <div class="modal-footer d-flex justify-content-center align-content-center">
          <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="MariaDB" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center align-content-center">
          <h5 class="text-center">MariaDB</h5>
        </div>
        <div class="modal-body">
          A guardian of knowledge, structured and free, a vessel of data in harmony, open to all with a song to sing, a database crafted for everything.
        </div>
        <div class="modal-footer d-flex justify-content-center align-content-center">
          <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="Laravel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center align-content-center">
          <h5 class="text-center">Laravel</h5>
        </div>
        <div class="modal-body">
          The melody of logic, elegant and clear, a symphony of code for all to hear, with artisan tools and a crafted flow, it builds the web where ideas grow.
        </div>
        <div class="modal-footer d-flex justify-content-center align-content-center">
          <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="MySQL" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center align-content-center">
          <h5 class="text-center">MySQL</h5>
        </div>
        <div class="modal-body">
          The steadfast keeper of organized thought, a trusted vault where queries are sought, with tables and keys, it holds the chain, connecting the data that systems sustain.
        </div>
        <div class="modal-footer d-flex justify-content-center align-content-center">
          <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="Network" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center align-content-center">
          <h5 class="text-center">Network Administration</h5>
        </div>
        <div class="modal-body">
          The unseen paths where connections run, guiding the data beneath the sun, with protocols vast and routes refined, they bind the networks of humankind.
        </div>
        <div class="modal-footer d-flex justify-content-center align-content-center">
          <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="System" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center align-content-center">
          <h5 class="text-center">System Management</h5>
        </div>
        <div class="modal-body">
          The open frontier where systems thrive, a realm of freedom, alive and alive, from servers to code,
          hardware and software in one rythm and path, it leads the way, shaping the future, day by day.
        </div>
        <div class="modal-footer d-flex justify-content-center align-content-center">
          <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="Arduino" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center align-content-center">
          <h5 class="text-center">Arduino</h5>
        </div>
        <div class="modal-body">
          A canvas for makers, tiny yet vast, where circuits and code unite at last, a playground for dreams to spark and glow, turning simple ideas into a show.
        </div>
        <div class="modal-footer d-flex justify-content-center align-content-center">
          <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="Node-RED" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center align-content-center">
          <h5 class="text-center">Node-RED</h5>
        </div>
        <div class="modal-body">
          A river of logic, visual and clear, connecting the flows we engineer, with drag and drop, ideas take flight, shaping automation with elegant might.
        </div>
        <div class="modal-footer d-flex justify-content-center align-content-center">
          <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="Project-Manager" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center align-content-center">
          <h5 class="text-center">Project Manager</h5>
        </div>
        <div class="modal-body">
          The guide of the team, a compass in hand, ensuring each task goes as planned; a leader who listens, directs, and aligns, weaving group efforts into finished designs.
        </div>
        <div class="modal-footer d-flex justify-content-center align-content-center">
          <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="PAKS" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center align-content-center">
          <h5 class="text-center">PAKS Stembayo</h5>
        </div>
        <div class="modal-body">
          A sanctuary of culture, vibrant and grand, where the arts flourish by heart and hand; serving with passion, I played my part, in crafting the rhythm of creative art.
        </div>
        <div class="modal-footer d-flex justify-content-center align-content-center">
          <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="OSIS-Depsa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center align-content-center">
          <h5 class="text-center">Junior High Student Council</h5>
        </div>
        <div class="modal-body">
          A voice for peers, a beacon to lead, fostering unity through action and deed; shaping the school with care and resolve, the council worked so all could evolve.
        </div>
        <div class="modal-footer d-flex justify-content-center align-content-center">
          <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="modal fade" id="Karawitan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center align-content-center">
          <h5 class="text-center">Karawitan Stembayo</h5>
        </div>
        <div class="modal-body">
          The echo of brass and beautiful melodies, Karawitan sings of a divine heritage; preserving tradition with rhythm and song, we carry this heritage with pride.
        </div>
        <div class="modal-footer d-flex justify-content-center align-content-center">
          <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal -->

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css"></script>
</body>
</html>
