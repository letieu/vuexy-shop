<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['total', 'paid', 'user_id', 'address_id'];

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }

    public function address()
    {
        return $this->belongsTo('App\Models\Address', 'address_id', 'id');
    }

    public function products()
    {
        return $this->belongsToMany('App\Models\Product', 'orders_products','order_id', 'product_id')->withPivot('quantity');
    }
}
