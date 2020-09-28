<?php

namespace App\Services;

use App\Repositories\Eloquent\CategoryRepository;
use Illuminate\Http\Request;

class CategoryService{
    protected $categoryRepo;
    protected $productRepo;

    public function __construct(CategoryRepository $categoryRepo)
    {
        $this->categoryRepo = $categoryRepo;
    }

    public function search(Request $request)
    {
        $name = $request->has('name') ? $request->name : '' ;
        return $this->categoryRepo->findByName($name);
    }

    public function list() {
        return $this->categoryRepo->withProductCount();
    }

    public function getById($id)
    {
        return $this->categoryRepo->find($id);
    }

    public function create(Request $request)
    {
        return $this->categoryRepo->create($request->all());
    }

    public function update(Request $request, $id)
    {
        return $this->categoryRepo->update($id, $request->all());
    }

    public function destroy($id)
    {
        return $this->categoryRepo->delete($id);
    }

}
