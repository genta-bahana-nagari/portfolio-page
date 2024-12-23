@extends('backend.template.porto')
    @section('hero')
        <div class="profile-section text-center">
            <!-- Profile Image -->
            <img src="profile.jpg" alt="Genta's Photo" class="profile-img">
            <!-- Intro Section -->
            <h1 class="intro">Yup, it's me folks<br>Call me Genta</h1>
            <p>Information & Network System Student</p>
            <p>Web Development | Linux System Management</p>
            <p>Network Administration | IoT Project Management</p>
            <p>Music Enthusiast</p>
            <p>Karawitan | Classic Orchestra | Theater Musical</p>

            <!-- Buttons -->
            <div class="button-group">
            <a href="#say-hello" class="btn btn-light">Say Hello</a>
            <a href="#my-project" class="btn btn-light">My Project</a>
            <a href="#download-cv" class="btn button-yellow">Download CV here</a>
            </div>
        </div>

        <!-- Icon Bar -->
        <div class="icon-bar text-center">
            <a href="#"><i class="bi bi-house"></i></a>
            <a href="#"><i class="bi bi-folder"></i></a>
            <a href="#"><i class="bi bi-envelope"></i></a>
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
        </div>
    @endsection