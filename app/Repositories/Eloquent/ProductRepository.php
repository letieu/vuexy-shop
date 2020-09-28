<?php

namespace App\Repositories\Eloquent;

use App\Models\Product;
use App\Repositories\ProductRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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
        return $this->model::query()->whereId($id)->with('branch')->with('category')->first();
    }

    public function update($id, array $attributes): ?Model
    {
        $product = $this->model->find($id);
        $product->update($attributes);
        $product['category'] = $product->category;
        $product['branch'] = $product->branch;

        return $product;
    }

    public function findByIds($ids)
    {
        return $this->model->whereIn('id', $ids)->get();
    }

}
