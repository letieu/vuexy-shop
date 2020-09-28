<?php
namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

interface EloquentRepositoryInterface
{
    public function find($id): ?Model;
    public function create(array $attributes);
    public function delete($id): bool;
    public function update($id, array $attributes): ?Model;
}
