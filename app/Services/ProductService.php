<?php

namespace App\Services;

use App\Helpers\ImageHelper;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Repositories\Eloquent\BranchRepository;
use App\Repositories\Eloquent\CategoryRepository;
use App\Repositories\Eloquent\CommentRepository;
use App\Repositories\Eloquent\ProductRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductService
{
    public $perPage = 15;

    protected $productRepo;
    protected $categoryRepo;
    protected $branchRepo;
    protected $commentRepo;

    public function __construct(
        ProductRepository $productRepo,
        CategoryRepository $categoryRepo,
        BranchRepository $branchRepo,
        CommentRepository $commentRepo
    ){
        $this->productRepo = $productRepo;
        $this->categoryRepo = $categoryRepo;
        $this->branchRepo = $branchRepo;
        $this->commentRepo = $commentRepo;
    }

    public function search(Request $request)
    {
        $perPage = $this->perPage;
        if ($request->has('perPage')) {
            $perPage = $request->perPage;
        }

        return $this->productRepo->all($perPage, $request);
    }

    public function create(Request $request)
    {
        $request['image'] = ImageHelper::makeImage($request);
        return $this->productRepo->create($request->all());
    }

    public function update(Request $request, $id)
    {
        $request['image'] = ImageHelper::makeImage($request);
        return $this->productRepo->update($id, $request->all());
    }

    public function detail($id)
    {
        return $this->productRepo->find($id);
    }

    public function destroy($id)
    {
        return $this->productRepo->delete($id);
    }

    public function findByIds(Request $request)
    {
        return $this->productRepo->findByIds($request->get('ids'));
    }

    public function createComment(Request $request, $id)
    {
        $comment = $this->commentRepo->create([
           'product_id' => $id,
            'user_id' => Auth::id(),
            'text' => data_get($request, 'text', '')
        ]);

        $comment['user'] = Auth::user();

        return $comment;
    }

    public function listComments($id)
    {
        return $this->commentRepo->listComments($id);
    }
}
