<?php

namespace App\Helpers;

use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ImageHelper
{
    public static function makeImage(Request $request)
    {
        if(!$request->get('image')) return null;
        if ( strlen($request->get('image')) < 100) return $request->get('image');

        $image = $request->get('image');
        $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
        try {
            Image::make($request->get('image'))->save(public_path('images/').$name);
        } catch (\Exception $ex) {
            dd($ex);
        }

        return $name;
    }
}
