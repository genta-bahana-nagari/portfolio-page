@section('main-portfolio')
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

      .social-account.active {
          color: #ffc107; 
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
      <h1 class="title" style="text-align: center;">Test Test</h1>
      <h5 class="text-center" id="brief">
        Feel free to reach out for further collaboration and inovations.
      </h5>
      <ul class="navbar-nav account" style="flex-direction: row; justify-content: center; align-items: center;">
        <div class="nav-item">
          <a class="nav-link social-account" href="#">
            <i class="bi bi-instagram"></i>
          </a>
        </div>
        <div class="nav-item">
          <a class="nav-link social-account" aria-current="page" href="#">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
        <div class="nav-item">
          <a class="nav-link social-account" href="#">
            <i class="bi bi-github"></i>
          </a>
        </div>
        <div class="nav-item">
          <a class="nav-link social-account" href="#">
            <i class="bi bi-envelope-fill"></i>
          </a>
        </div>
        <div class="nav-item">
          <a class="nav-link social-account" href="#">
            <i class="bi bi-discord"></i>
          </a>
        </div>
      </ul>
    </div>
  @endsection