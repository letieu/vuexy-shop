<?php

namespace App\Http\Controllers;
use Illuminate\Http\Response;

trait ApiTrait
{
    public function success($data = [], $message = '', $code = Response::HTTP_OK)
    {
        return response()->json([
           'status' => 'Success',
           'message' => $message,
           'data' => $data
        ], $code);
    }

    public function error($error = [], $message = '', $code = Response::HTTP_NOT_FOUND)
    {
        return response()->json([
            'status' => 'Error',
            'message' => $message,
            'error' => $error
        ], $code);
    }
}
