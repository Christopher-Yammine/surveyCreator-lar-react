<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;

class UserController extends Controller
{
    public function getSurveys()
    {
        $survey = Survey::all();
        return response()->json([
            "status" => "success",
            "surveys" => $survey
        ], 200);
    }
    public function displaySurvey(Request $request){
        $survey=Survey::join('Questions as q','')
    }
}
