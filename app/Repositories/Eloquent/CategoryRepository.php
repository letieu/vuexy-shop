<?php

namespace App\Repositories\Eloquent;

use App\Models\Category;
use Illuminate\Database\Eloquent\Model;

class CategoryRepository extends BaseRepository
{
    public function __construct(Category $model)
    {
        parent::__construct($model);
    }

    public function find($id): ?Model
    {
        return $this->model->query()->where('id', $id)->with('products')->first();
    }

    public function withProductCount() {
        return $this->model->query()->withCount('products')->get();
    }

    public function withProducts() {
        return $this->model->query()->with('products')->get();
    }

}
