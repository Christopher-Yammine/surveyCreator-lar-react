<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\UserController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});
Route::post('/addSurvey', [AdminController::class, 'addSurvey'])->name("addSurvey");
Route::post('/addRest', [AdminController::class, 'addRest'])->name("addRest");
Route::post('/addType', [SurveyController::class, 'addType'])->name("addType");
Route::get('/showTypes', [SurveyController::class, 'showTypes'])->name("showTypes");
Route::get('/getSurveys', [UserController::class, 'getSurveys'])->name("getSurveys");
Route::post('/displaySurvey', [UserController::class, 'displaySurvey'])->name("displaySurvey");
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
