@extends('backend.template.porto')

  @section('hero')
  <style>
    .image-container {
      width: 350px; /* Sesuaikan dengan desain */
      height: 467px; /* Untuk rasio 3:4 */
      border-radius: 20px; /* Membuat sudut melengkung */
      overflow: hidden; /* Memastikan bagian gambar di luar kontainer tidak terlihat */
      position: relative; /* Untuk memastikan gambar tetap di dalam kontainer */
    }

    .image-container img {
      width: 100%;
      height: 100%; /* Memastikan gambar sesuai ukuran kontainer */
      object-fit: cover; /* Memastikan crop bagian atas tetap proporsional */
      object-position: bottom; /* Fokus crop pada bagian atas gambar */
    }

    .hero {
      display: flex;
      align-items: center; /* Pusatkan konten secara vertikal */
      justify-content: center;
      padding-top: 4%;
    }

    .intro {
      font-family: 'Arial', sans-serif;
      font-weight: bold;
      color: white;
    }

    .button-yellow {
      background-color: #ffc107; /* Warna kuning */
      color: black;
      font-weight: bold;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      text-decoration: none;
    }

    .button-yellow:hover {
      background-color: #e0a800; /* Warna hover untuk tombol */
      text-decoration: underline;
    }

    .btn-light {
      margin-right: 10px; /* Beri sedikit jarak antar tombol */
      font-weight: bold;
    }

    #text-side {
      margin-top: 5%;
    }
  </style>

  <div class="container hero">
    <div class="row align-items-center">
      <!-- Gambar -->
      <div class="col-md-6 text-center">
        <div class="image-container">
          <img src="{{ asset('assets/image/SOC02150.jpg') }}" alt="Genta">
        </div>
      </div>

      <!-- Teks -->
      <div class="col-md-6 text-end" id="text-side" style="color: white;">
        <h1 class="intro">Yup, it's me folks<br>Call me Genta</h1>
        <p>Information & Network System Student</p>
        <p>Web Development | Linux System Management</p>
        <p>Network Administration | IoT Project Management</p>
        <p>Music Enthusiast</p>
        <p>Karawitan | Classic Orchestra | Theater Musical</p>

        <!-- Tombol -->
        <div class="d-flex mb-3">
          <a href="#say-hello" class="btn btn-light">Say Hello</a>
          <a href="#my-project" class="btn btn-light">My Project</a>
        </div>
        <div class="row d-flex mb-3">
        <a href="#download-cv" class="btn button-yellow">Download CV here</a>
        </div>
      </div>
    </div>
  </div>
  @endsection
