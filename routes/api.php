<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Auth::routes();

Route::prefix('users')->name('user.')->group(function () {
    Route::get('/', [UserController::class, 'index'])->name('index');
    Route::get('/{id}', [UserController::class, 'show'])->name('show');
    Route::delete('/{id}', [UserController::class, 'destroy'])->name('destroy');
});

Route::prefix('products')->name('products.')->group(function () {
    Route::get('/new', [App\Http\Controllers\ProductController::class, 'new']);
    Route::get('/find', [App\Http\Controllers\ProductController::class, 'findByIds'])->name('find-ids');
    Route::post('/{id}/comments', [App\Http\Controllers\ProductController::class, 'createComment']);
    Route::get('/{id}/comments', [App\Http\Controllers\ProductController::class, 'comments']);
});

Route::prefix('address')->middleware('auth:sanctum')->group(function() {
    Route::get('/', [\App\Http\Controllers\AddressController::class, 'list']);
    Route::post('/', [\App\Http\Controllers\AddressController::class, 'save']);
    Route::delete('/{id}', [\App\Http\Controllers\AddressController::class, 'delete']);
});

Route::apiResource('products', ProductController::class);
Route::apiResource('categories', CategoryContrller::class);
Route::apiResource('branches', BranchController::class);
Route::apiResource('orders', OrderController::class);


