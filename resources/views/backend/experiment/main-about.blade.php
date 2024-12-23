<!-- portfolio -->
@section('main-hero')
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
     
      #brief, #brief #introduction {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;
        font-weight: 500;
        text-align: justify;
        color: white;
      }

      #brief,#about {
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

      #child-brief {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;
        font-weight: 500;
        text-align: justify;
        color: white;
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
        /* width: 100%;
        height: 100%;  */
        object-fit: cover;
        object-position: center;
        /* object-position: 100% 0; */
      }

      .cell {
        padding-top: 2.5%;
        padding-bottom: 2.5%;
        padding-left: 2.5%;
        border: 1px solid #FFFFFF;
        font-family: Verdana, Arial, Helvetica, sans-serif;
        font-size: 14px;
      }

      .title-cell {
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

        #about {
          font-size: 16px;
        }

        #child-brief {
          font-size: 14px;
        }

        .title-cell {
          font-size: 16px;
          font-weight: 650;
        }

        .cell {
          font-size: 13px;
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
          <p style="margin-top: 3%;" id="child-brief">
            I have a passion for learning and adapting quickly to new environments. Currently interning
            to gain hands-on experience and enhance my skills through real-world projects.I am driven by a strong desire to grow, make my family proud, and contribute effectively in every task I take on.
          </p>
          <p id="child-brief">
            I specialize in <strong>Web Development</strong> and <strong>System Administration</strong>.
            I enjoy working on projects where I can solve complex problems, collaborate with teams, and create valuable solutions. 
          <div class="row text-left" style="margin-left: 25%; margin-right: 25%;">
            <a href="#" class="btn button-yellow">Download CV</a>
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
              <td class="cell">SMK Negeri 2 Depok Sleman</td>
            </tr>
            <tr>
              <td class="cell">Information and Application Network System (SIJA)</td>
            </tr>
            <tr>
              <td class="cell">
                <a href="#" class="card-link" data-bs-toggle="modal" data-bs-target="#More"
                style="color: white; text-decoration: none;">Know more about me
                  <span>
                    <i class="bi bi-caret-right-fill"></i>
                  </span>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  @yield('main-skill-experience')

  <!-- Pop Up -->
  <!-- <div class="modal fade" id="More" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="d-flex text-center justify-content-center align-content-center">More About Me</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer d-flex justify-content-center align-content-center">
          <button type="button" class="btn button-yellow"
          data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div> -->
@endsection