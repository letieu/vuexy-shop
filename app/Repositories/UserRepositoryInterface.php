<?php

namespace App\Repositories;

use phpDocumentor\Reflection\Types\Collection;

interface UserRepositoryInterface
{
    public function all($perPage);
    public function findByName($name);
}
