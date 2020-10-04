<?php

namespace App\Repositories\Eloquent;

use App\Models\Comment;
use Illuminate\Database\Eloquent\Model;

class CommentRepository extends BaseRepository
{
    public function __construct(Comment $model)
    {
        parent::__construct($model);
    }

    public function create(array $attributes): Model
    {
        return $this->model->create($attributes);
    }

    public function listComments($productId)
    {
        return $this->model->where('product_id', $productId)->with('user')->get();
    }
}
