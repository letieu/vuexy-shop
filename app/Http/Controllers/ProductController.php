<?php

namespace App\Http\Controllers;

use App\Helpers\ImageHelper;
use App\Services\ProductService;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    protected $productService;
    use ApiTrait;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }
    public function index(Request $request)
    {
        try {
            $products = $this->productService->search($request);
        } catch (\Exception $exception) {
            $this->error([], $exception->getMessage());
        }

        return $this->success($products);
    }

    public function store(Request $request)
    {
        try {
            $product = $this->productService->create($request);
        } catch (\Exception $exception) {
            $this->error([], $exception->getMessage());
        }

        return $this->success($product);
    }

    public function show($id)
    {
        try {
            $product = $this->productService->detail($id);
        } catch (\Exception $exception) {
            $this->error([], $exception->getMessage());
        }

        return $this->success($product);
    }

    public function update(Request $request, $id)
    {
        try {
            $product = $this->productService->update($request, $id);
        } catch (\Exception $exception) {
            $this->error([], $exception->getMessage());
        }

        return $this->success($product);
    }

    public function destroy($id)
    {
        if ($this->productService->destroy($id)) return $this->success($id, 'deleted');

        return $this->error([], 'cant delete');
    }

    public function findByIds(Request $request)
    {
        try {
            $products = $this->productService->findByIds($request);
        } catch (\Exception $exception) {
            return $this->error($exception->getMessage());
        }

        return $this->success($products);
    }

    public function addComment(Request $request, $id)
    {
        $comment = $this->productService->addComment($request, $id);

        return $this->success($comment);
    }

    public function getComments($id)
    {
        $comments = $this->productService->getComments($id);

        return $this->success($comments);
    }
}
