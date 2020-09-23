<?php

namespace App\Repositories;

interface ProductRepositoryInterface
{
    public function all($perPage, $filter);
}
