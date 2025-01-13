<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Genta Bahana</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link href="{{ asset('assets/style/main-layout.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/style/main-modal.css') }}" rel="stylesheet">
  <link rel="icon" type="image/jpeg" href="{{ asset('assets/image/ICON 2.png') }}">
</head>
  <body style="background-color: black;">
    <!-- Header -->
    <nav class="navbar navbar-expand-lg sticky-top" style="background-color: black;">
      <div class="container">
        <a class="navbar-brand" href="#">GENTA.Porto</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" id="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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

    <!-- Main Content -->
    <div class="container-fluid">
      @yield('main')
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
    
    <div class="modal fade" id="WebDevelopment" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-center align-content-center">
            <h5 class="text-center">Web Development</h5>
          </div>
          <div class="modal-body">
          Simple page with HTML, CSS, Bootstrap, a little spice of Javascript. Continue to higher frameworks such as WordPress and Laravel.
          <table style="width: 100%; border: none; justify-content: center; margin-top: 3%;">
            <tr>
              <td class="cell-skill">
                <img class="icon-skill" id="HTML"
                src="https://static-00.iconduck.com/assets.00/html-5-icon-896x1024-okm7c3dg.png" alt="...">
              </td>
              <td class="cell-skill">
                <img class="icon-skill" id="CSS"
                src="https://static-00.iconduck.com/assets.00/css-3-icon-878x1024-f8npzpbm.png" alt="...">
              </td>
              <td class="cell-skill">
                <img class="icon-skill" id="Bootstrap"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="...">
              </td>
              <td class="cell-skill">
                <img class="icon-skill" id="Javascript"
                src="{{ asset('assets/image/javascript-svgrepo-com.png') }}" alt="...">
              </td>
              <td class="cell-skill">
                <img class="icon-skill" id="Laravel"
                src="https://static-00.iconduck.com/assets.00/laravel-icon-995x1024-dk77ahh4.png" alt="...">
              </td>
            </tr>
          </table>
          </div>
          <div class="modal-footer d-flex justify-content-center align-content-center">
            <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="NetworkAdmin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-center align-content-center">
            <h5 class="text-center">Network Administration</h5>
          </div>
          <div class="modal-body">
          Designing a proper topology, choosing the correct protocols for many needs. Either Cisco or Mikrotik, both have excellent performance.
          <table style="width: 100%; border: none; justify-content: center; margin-top: 3%;">
            <tr>
              <td class="cell-skill" style="margin: auto;">
                <img id="Cisco" style="height: 40px;"
                src="{{ asset('assets/image/cisco-svgrepo-com.png') }}" alt="...">
              </td>
              <td class="cell-skill" style="margin: auto;">
                <img id="Cisco" style="height: 60px;"
                src="{{ asset('assets/image/router-svgrepo-com.png') }}" alt="...">
              </td>
              <td class="cell-skill" style="margin: auto;">
                <img id="Cisco" style="height: 60px;"
                src="{{ asset('assets/image/mikrotik.webp') }}" alt="...">
              </td>
            </tr>
          </table>
          </div>
          <div class="modal-footer d-flex justify-content-center align-content-center">
            <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="SystemManagement" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-center align-content-center">
            <h5 class="text-center">System Management</h5>
          </div>
          <div class="modal-body">
          Handling configurations, user control, and ensuring reliability, including troubleshooting and maintenance. Proficient in Linux and Windows system, integrating hardware with supporting software for optimal performance.
          <table style="width: 100%; border: none; justify-content: center; margin-top: 3%;">
            <tr>
              <td class="cell-skill" style="margin: auto;">
                <img id="Cisco" style="height: 50px;"
                src="{{ asset('assets/image/windows.png') }}" alt="...">
              </td>
              <td class="cell-skill" style="margin: auto;">
                <img id="Cisco" style="height: 50px;"
                src="{{ asset('assets/image/debian.png') }}" alt="...">
              </td>
              <td class="cell-skill" style="margin: auto;">
                <img id="Cisco" style="height: 50px;"
                src="{{ asset('assets/image/Ubuntu.png') }}" alt="...">
              </td>
              <td class="cell-skill" style="margin: auto;">
                <img id="Cisco" style="height: 60px;"
                src="{{ asset('assets/image/cpu.png') }}" alt="...">
              </td>
            </tr>
          </table>
          </div>
          <div class="modal-footer d-flex justify-content-center align-content-center">
            <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="IoT" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-center align-content-center">
            <h5 class="text-center">IoT Development</h5>
          </div>
          <div class="modal-body">
          Building interconnected systems with IoT devices to enable automation and remote monitoring. Familiar with Arduino and ESP’s and integrating them with sensors and wireless communication protocols
          <table style="width: 100%; border: none; justify-content: center; margin-top: 3%;">
            <tr>
              <td class="cell-skill" style="margin: auto;">
                <img id="Cisco" style="height: 50px;"
                src="{{ asset('assets/image/iot.png') }}" alt="...">
              </td>
              <td class="cell-skill" style="margin: auto;">
                <img id="Cisco" style="height: 50px;"
                src="{{ asset('assets/image/arduino.png') }}" alt="...">
              </td>
              <td class="cell-skill" style="margin: auto;">
                <img id="Cisco" style="height: 50px;"
                src="{{ asset('assets/image/node-red.png') }}" alt="...">
              </td>
            </tr>
          </table>
          </div>
          <div class="modal-footer d-flex justify-content-center align-content-center">
            <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="modal fade" id="Database" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-center align-content-center">
            <h5 class="text-center">Database Management</h5>
          </div>
          <div class="modal-body">
          Managing and optimizing relational databases like MySQL for efficient data storage and retrieval. Skilled in designing database schemas, writing complex queries, and ensuring data integrity and security.
          <!-- <table style="width: 100%; border: none; justify-content: center; margin-top: 3%;">
            <tr>
              <td class="cell-skill" style="margin: auto;">
                <img id="Cisco" style="height: 50px;"
                src="{{ asset('assets/image/iot.png') }}" alt="...">
              </td>
              <td class="cell-skill" style="margin: auto;">
                <img id="Cisco" style="height: 50px;"
                src="{{ asset('assets/image/arduino.png') }}" alt="...">
              </td>
              <td class="cell-skill" style="margin: auto;">
                <img id="Cisco" style="height: 50px;"
                src="{{ asset('assets/image/node-red.png') }}" alt="...">
              </td>
            </tr>
          </table> -->
          </div>
          <div class="modal-footer d-flex justify-content-center align-content-center">
            <p class="close-modal" data-bs-dismiss="modal">Done reading</p>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="ProjectManage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-center align-content-center">
            <h5 class="text-center">Project Management</h5>
          </div>
          <div class="modal-body">
          Managing and optimizing any projects. Web development, IoT building, system management, database, or any other stuffs. All in synchronous steps, combined with best communication also respects between teams.
          <!-- <table style="width: 100%; border: none; justify-content: center; margin-top: 3%;">
            <tr>
              <td class="cell-skill" style="margin: auto;">
                <img id="Cisco" style="height: 50px;"
                src="{{ asset('assets/image/iot.png') }}" alt="...">
              </td>
              <td class="cell-skill" style="margin: auto;">
                <img id="Cisco" style="height: 50px;"
                src="{{ asset('assets/image/arduino.png') }}" alt="...">
              </td>
              <td class="cell-skill" style="margin: auto;">
                <img id="Cisco" style="height: 50px;"
                src="{{ asset('assets/image/node-red.png') }}" alt="...">
              </td>
            </tr>
          </table> -->
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