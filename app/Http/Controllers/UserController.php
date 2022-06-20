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
    public function displaySurvey(Request $request)
    {
        $survey = Survey::join('Questions as q', 'q.id_survey', '=', 'surveys.id')
            ->join('types as t', 't.id', '=', 'q.id_type')
            ->where('surveys.id', $request->id)
            ->get(['surveys.name', 'q.*', 't.description']);

        return response()->json([
            "status" => "Success",
            "surveys" => $survey
        ], 200);
    }
}
