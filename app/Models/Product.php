<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'price', 'description', 'category_id', 'branch_id', 'image'];

    public function category()
    {
        return $this->belongsTo('App\Models\Category', 'category_id');
    }

    public function branch()
    {
        return $this->belongsTo('App\Models\Branch', 'branch_id');
    }

    public function comments()
    {
        return $this->hasMany('App\Models\Comment', 'product_id');
    }

    public function scopeName($query, $request)
    {
        if ($request->has('name')) {
            $query->where('name', 'like', "%" . $request['name'] ."%");
        }

        return $query;
    }

    public function scopeCategory($query, $request)
    {
        if ($request->has('category')) {
            $query->where('category_id', $request['category']);
        }

        return $query;
    }

    public function scopeBranch($query, $request)
    {
        if ($request->has('branch')) {
            $query->where('branch_id', $request['branch']);
        }

        return $query;
    }

    public function scopePrice($query, $request)
    {
        if ($request->has('price')) {
            $query->where('price', '<', $request['price'] * 10000);
        }

        return $query;
    }
}
