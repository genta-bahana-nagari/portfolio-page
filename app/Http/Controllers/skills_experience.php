<?php

namespace App\Http\Controllers;

use App\Models\Skills;
use App\Models\Experience;
use Illuminate\Http\Request;

class SkillExperienceController extends Controller
{
    public function index()
    {
        $skill = Skills::all();
        $experiences = Experience::all();
        return view('skills-experience', compact('skills', 'experiences'));
    }
}
