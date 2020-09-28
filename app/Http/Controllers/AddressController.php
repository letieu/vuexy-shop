<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AddressController extends Controller
{
    use ApiTrait;

    public function list()
    {
        $addresses = Auth::user()->addresses;
        return $this->success($addresses);
    }

    public function save(Request $request)
    {
        $address = Auth::user()->addresses()->updateOrCreate([
            'address' => $request->address,
            'city' => $request->city,
            'phone' => $request->phone
        ]);

        return $this->success($address);
    }

    public function delete($id)
    {
        Auth::user()->addresses()->destroy($id);

    }
}
