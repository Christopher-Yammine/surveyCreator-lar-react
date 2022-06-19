<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;
use App\Models\Survey;
use App\Models\Type;

class AdminController extends Controller
{
    public function addSurvey(Request $request)
    {
        $survName = new Survey();
        $survName->name = $request->name;
        $survName->save();
        $id_surv = $survName->id;

        if ($request->type == 1) {



            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $id_surv;
            $question->text = $request->text;
            $question->choice = $request->choice0;
            $question->save();

            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $id_surv;
            $question->text = $request->text;
            $question->choice = $request->choice1;
            $question->save();

            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $id_surv;
            $question->text = $request->text;
            $question->choice = $request->choice2;
            $question->save();

            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $id_surv;
            $question->text = $request->text;
            $question->choice = $request->choice3;
            $question->save();
        } else if ($request->type == 2) {

            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $id_surv;
            $question->text = $request->text;
            $question->choice = $request->choice0;
            $question->save();

            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $id_surv;
            $question->text = $request->text;
            $question->choice = $request->choice1;
            $question->save();
        } else if ($request->type == 3) {
            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $id_surv;
            $question->text = $request->text;
            $question->choice = null;
            $question->save();
        } else if ($request->type == 4) {



            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $id_surv;
            $question->text = $request->text;
            $question->choice = $request->choice0;
            $question->save();

            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $id_surv;
            $question->text = $request->text;
            $question->choice = $request->choice1;
            $question->save();

            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $id_surv;
            $question->text = $request->text;
            $question->choice = $request->choice2;
            $question->save();

            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $id_surv;
            $question->text = $request->text;
            $question->choice = $request->choice3;
            $question->save();
        }

        return response()->json([
            "status" => "success",
            "id_serv" => $id_surv
        ], 200);
    }

    public function addRest(Request $request)
    {
        if ($request->type == 1) {



            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $request->id_survey;
            $question->text = $request->text;
            $question->choice = $request->choice0;
            $question->save();

            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $request->id_survey;
            $question->text = $request->text;
            $question->choice = $request->choice1;
            $question->save();

            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $request->id_survey;
            $question->text = $request->text;
            $question->choice = $request->choice2;
            $question->save();

            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $request->id_survey;
            $question->text = $request->text;
            $question->choice = $request->choice3;
            $question->save();
        } else if ($request->type == 2) {

            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $request->id_survey;
            $question->text = $request->text;
            $question->choice = $request->choice0;
            $question->save();

            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $request->id_survey;
            $question->text = $request->text;
            $question->choice = $request->choice1;
            $question->save();
        } else if ($request->type == 3) {
            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $request->id_survey;
            $question->text = $request->text;
            $question->choice = null;
            $question->save();
        } else if ($request->type == 4) {



            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $request->id_survey;
            $question->text = $request->text;
            $question->choice = $request->choice0;
            $question->save();

            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $request->id_survey;
            $question->text = $request->text;
            $question->choice = $request->choice1;
            $question->save();

            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $request->id_survey;
            $question->text = $request->text;
            $question->choice = $request->choice2;
            $question->save();

            $question = new Question();
            $question->id_type = $request->id_type;
            $question->id_survey = $request->id_survey;
            $question->text = $request->text;
            $question->choice = $request->choice3;
            $question->save();
        }

        return response()->json([
            "status" => "success"
        ], 200);
    }
}
