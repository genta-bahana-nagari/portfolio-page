<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Genta Bahana</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link href="{{ asset('assets/style/main-detail.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/style/detail-modal.css') }}" rel="stylesheet">
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
            <a class="nav-link custom-nav-link" id="home-about" aria-current="page" href="{{route('main')}}">
              <i class="fa-solid fa-house-chimney"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-nav-link" id="resume" href="{{route('resume')}}">
              <i class="fa-solid fa-briefcase"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-nav-link" id="portfolio" href="{{route('portfolio')}}">
              <i class="fa-solid fa-file"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link custom-nav-link" id="contact" href="{{route('contact')}}">
              <i class="fa-solid fa-phone"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Header -->
  
  <!-- Mini Hero -->
  <div class="container hero">
    <div class="row align-items-center" id="mini-hero" style="padding-right: 5%; padding-left: 5%;">
      <!-- Image -->
      <div class="col-md-4 text-center text-md-left">
        <div class="image-container">
          <img src="{{ asset('assets/image/SOC02150.jpg') }}" alt="Genta">
        </div>
      </div>
      <!-- Text -->
      <div class="col-md-8" id="text-side" style="color: white;">
        <h3 class="intro">Take a tour on my details. If you have any questions, you can ask them via the contact section.</h3>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="container-fluid">
    @yield('main-detail')
  </div>
  <!-- End Main Content -->

  <!-- Footer -->
  <div class="container-fluid" style="padding-left: 3%; padding-right: 3%;">
    <footer class="d-flex flex-wrap align-items-center py-3 my-1 border-top">
      <div class="container my-auto">
          <div id="footer" class="text-center my-auto" style="color: white;">
              <span>Copyright &copy; 2025 Genta Bahana. All rights reserved.</span>
          </div>
      </div>
    </footer>
  </div>
  <!-- End Footer -->

  <!-- Modal -->
  
  <!-- End Modal -->

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css"></script>
</body>
</html>