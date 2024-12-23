<?php

// use App\Http\Controllers\SkillExperienceController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('backend.main.main-content');
});

// Route::get('/skills-experience', [SkillExperienceController::class, 'index']);
