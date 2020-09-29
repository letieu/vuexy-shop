<?php
namespace App\Repositories;

use Illuminate\Pagination\LengthAwarePaginator;

interface CommentRepositoryInterface
{
    public function list($productId): LengthAwarePaginator;
}
