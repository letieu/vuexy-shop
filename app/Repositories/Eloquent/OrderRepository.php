<?php

namespace App\Repositories\Eloquent;

use App\Models\Order;
use App\Repositories\OrderRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class OrderRepository extends BaseRepository implements OrderRepositoryInterface
{
    public function __construct(Order $model)
    {
        parent::__construct($model);
    }

    public function create(array $attributes): Model
    {
        $order = $this->model->create([
            'total' => $attributes['total'],
            'paid' => false,
            'user_id' => Auth::id(),
            'address_id' => $attributes['address']
        ]);

        foreach($attributes['products'] as $product) {
            $order->products()->attach($product['id'], ['quantity' => $product['quantity']]);
        }

        return $order->refresh();
    }

    public function list()
    {
        return $this->model->with('user')->with('products')->with('address')->paginate(15);
    }
}
