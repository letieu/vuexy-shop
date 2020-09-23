<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'price', 'description', 'category_id', 'branch_id'];

    public function category()
    {
        return $this->belongsTo('App\Models\Category', 'category_id');
    }

    public function branch()
    {
        return $this->belongsTo('App\Models\Branch', 'branch_id');
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
        if ($request->has('categoryId')) {
            $query->were('category_id', $request['categoryId']);
        }

        return $query;
    }

    public function scopeBranch($query, $request)
    {
        if ($request->has('branchId')) {
            $query->where('branch_id', $request['branchId']);
        }

        return $query;
    }

    public function scopePrice($query, $request)
    {
        if ($request->has('price')) {
            $query->where('price', '<', $request['price']);
        }

        return $query;
    }
}
