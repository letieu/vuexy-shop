<?php

namespace App\Repositories\Eloquent;

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
        return $this->model->create($attributes);
    }

    public function update($id, array $attributes): ?Model
    {
        return $this->model->find($id)->update($attributes);
    }

    public function delete($id): bool
    {
        return $this->model->delete($id);
    }

    public function findByName($name)
    {
        return $this->model->where('name','like', "%" . $name . "%")->get();
    }
}
