@section('main-about')
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
            <img class="icon-experience"  data-bs-toggle="modal" data-bs-target="#PAKS"
            src="{{ asset('assets/image/PAKS.png') }}" alt="...">
          </td>
          <td class="cell-experience">
            <img class="icon-experience"  data-bs-toggle="modal" data-bs-target="#OSIS-Depsa"
            src="https://1.bp.blogspot.com/-2VW_PDL3bDg/Xv9Yd7uI_II/AAAAAAAAabQ/Qat_ulPfomULym9Or-qzOC2BnPSS4HajwCLcBGAsYHQ/s1600/logo-osis_237-design.png" alt="...">
          </td>
        </tr>
        <tr>
          <td class="cell-experience">
          </td>
          <td class="cell-experience">
            <img class="icon-experience"  data-bs-toggle="modal" data-bs-target="#Karawitan"
            src="{{ asset('assets/image/Logo_Karawitan.jpg') }}" alt="...">
          </td>
          <td class="cell-experience">
          </td>
        </tr>
      </table>
    </div>
  </div>
  @yield('main-portfolio')  
  @endsection