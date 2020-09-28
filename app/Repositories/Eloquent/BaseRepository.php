<?php

namespace App\Repositories\Eloquent;

use App\Models\Product;
use App\Repositories\EloquentRepositoryInterface;
use Illuminate\Database\Eloquent\Model;

abstract class BaseRepository implements EloquentRepositoryInterface
{
    protected $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function find($id): ?Model
    {
        return $this->model->find($id);
    }

    public function create(array $attributes): Model
    {
        try {
            return $this->model->create($attributes);
        } catch (\Exception $exception) {
            dd($exception);
        }
    }

    public function update($id, array $attributes): ?Model
    {
        $instance = $this->model->find($id);
        $instance->update($attributes);
        return $instance->refresh();
    }

    public function delete($id): bool
    {
        return $this->model->find($id)->delete() > 0;
    }

    public function findByName($name)
    {
        return $this->model->where('name','like', "%" . $name . "%")->get();
    }
}
