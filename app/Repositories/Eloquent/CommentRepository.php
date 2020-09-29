<?php

namespace App\Repositories\Eloquent;

use App\Models\Comment;
use App\Repositories\CommentRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

class CommentRepository extends BaseRepository implements CommentRepositoryInterface
{

    public function __construct(Comment $model)
    {
        parent::__construct($model);
    }

    public function list($productId): LengthAwarePaginator
    {
        return $this->model->where('product_id', $productId)->with('user')->paginate();
    }

}
