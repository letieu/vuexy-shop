<?php

namespace App\Http\Controllers;

use App\Services\CategoryService;
use Illuminate\Http\Request;

class CategoryContrller extends Controller
{
    protected $categoryService;
    use ApiTrait;

    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    public function index(Request $request)
    {
        try {
            $categories = $this->categoryService->list();
        } catch (\Exception $exception) {
            return $this->error([], $exception->getMessage());
        }

        return $this->success($categories);
    }

    public function store(Request $request)
    {
        try {
            $category = $this->categoryService->create($request);
        } catch (\Exception $exception) {
            return $this->error([], $exception->getMessage());
        }

        return $this->success($category);
    }

    public function show($id)
    {
        try {
            $category = $this->categoryService->getById($id);
        } catch (\Exception $exception) {
            return $this->error([], $exception->getMessage());
        }

        return $this->success($category);
    }

    public function update(Request $request, $id)
    {
        try {
            $category = $this->categoryService->update($request, $id);
        } catch (\Exception $exception) {
            return $this->error([], $exception->getMessage());
        }

        return $this->success($category);
    }

    public function destroy($id)
    {
        $res = $this->categoryService->destroy($id);

        if ($res == 0) {
            return $this->error([], 'delete fail');
        }

        return $this->success($res);
    }
}
