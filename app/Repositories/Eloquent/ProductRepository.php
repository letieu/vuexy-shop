<?php

namespace App\Repositories\Eloquent;

use App\Models\Product;
use App\Repositories\ProductRepositoryInterface;
use Illuminate\Database\Eloquent\Model;

class ProductRepository extends BaseRepository implements ProductRepositoryInterface
{
    public function __construct(Product $model)
    {
        parent::__construct($model);
    }

    public function all($perPage, $filter)
    {
        return $this->model::query()
            ->name($filter)
            ->price($filter)
            ->branch($filter)
            ->category($filter)
            ->with('branch')
            ->with('category')
            ->paginate($perPage);
    }

    public function find($id): ?Model
    {
        return $this->model->with('branch')->with('category')->where('id', $id)->first();
    }
}
