<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Type;

class SurveyController extends Controller
{
    public function addType(Request $request)
    {
        $type = new Type();
        $type->description = $request->description;
        $type->save();
        return response()->json([
            "status" => "success"
        ], 200);
    }
    public function ShowTypes()
    {
        $type = Type::all();
        return response()->json([
            "status" => "success",
            "types" => $type
        ], 200);
    }
}
