<?php
use Illuminate\Support\Facades\Route;

Route::get('/', function () {return view('main.main');})->name('main');
Route::get('/home', function () {return view('main.main');})->name('main');
Route::get('/resume', function () {return view('main.resume');})->name('resume');
Route::get('/portfolio', function () {return view('main.portfolio');})->name('portfolio');
Route::get('/contact', function () {return view('main.contact');})->name('contact');