@section('main-skill-experience')
  <style>
    .image-card-porto img {
      max-width: 100%;
      max-height: 150px;
      size: cover;
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
  </style>
  <div class="container" style="color: white;">
    <div class="row align-items-justify" style="padding-right: 5%; padding-left: 5%;">
      <h1 class="title text-center">Portfolio</h1>
      <h5 class="text-center" id="brief"> Take a look on my previous project. Check on
        <span>
          <a href="#" class="link-github">GitHub</a>
        </span>
        <span>
          for more.
        </span>
      </h5>
      <div class="col-md-4 pt-3">
        <div class="card image-card" style="width: 100%; border: none">
          <img src="https://storage.googleapis.com/go-merchant-production.appspot.com/uploads/2022/03/a50b5a97cd9ee91826449bc79f51ace0_fe9477fa96bd2cbfd6da352cca822dcd_compressed.jpg" class="card-img-top" alt="...">
          <div class="card-body" style="text-align: center;">
            <h5 class="card-text">Inventory Project</h5>
            <p>Laravel based inventory system with high reliability and data acuracy.</p>
            <div class="d-flex flex-wrap align-items-center py-1 my-1 border-top"></div>
            <a href="#">Live Review</a>
            <span>
            <a href="#">Source Code</a>
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-4 pt-3">
        <div class="card image-card" style="width: 100%; border: none">
          <img src="https://storage.googleapis.com/go-merchant-production.appspot.com/uploads/2022/03/a50b5a97cd9ee91826449bc79f51ace0_fe9477fa96bd2cbfd6da352cca822dcd_compressed.jpg" class="card-img-top" alt="...">
          <div class="card-body" style="text-align: center;">
            <h5 class="card-text">Music Studio Page</h5>
            <p>Inspired from Stembayo Karawitan Group, with a touch of Wordpress styling.</p>
            <div class="d-flex flex-wrap align-items-center py-1 my-1 border-top"></div>
            <a href="#">Live Review</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 pt-3">
        <div class="card image-card" style="width: 100%; border: none">
          <img src="https://storage.googleapis.com/go-merchant-production.appspot.com/uploads/2022/03/a50b5a97cd9ee91826449bc79f51ace0_fe9477fa96bd2cbfd6da352cca822dcd_compressed.jpg" class="card-img-top" alt="...">
          <div class="card-body" style="text-align: center;">
            <h5 class="card-text">ESP Camera</h5>
            <p>Built for P5 school event. Perfect combination of cheap components and inovations.</p>
            <div class="d-flex flex-wrap align-items-center py-1 my-1 border-top"></div>
            <a href="#">Source Code</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  @yield('main-contact')
  @endsection