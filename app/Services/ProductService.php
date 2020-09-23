<?php

namespace App\Services;

use App\Repositories\Eloquent\BaseRepository;
use App\Repositories\Eloquent\BranchRepository;
use App\Repositories\Eloquent\CategoryRepository;
use App\Repositories\Eloquent\ProductRepository;
use Illuminate\Http\Request;

class ProductService
{
    public $perPage = 15;

    protected $productRepo;
    protected $categoryRepo;
    protected $branchRepo;

    public function __construct(
        ProductRepository $productRepo,
        CategoryRepository $categoryRepo,
        BranchRepository $branchRepo
    ){
        $this->productRepo = $productRepo;
        $this->categoryRepo = $categoryRepo;
        $this->branchRepo = $branchRepo;
    }

    public function search(Request $request)
    {
        return $this->productRepo->all($this->perPage, $request);
    }

    public function create(Request $request)
    {
        return $this->productRepo->create($request->all());
    }

    public function update(Request $request, $id)
    {
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
}
