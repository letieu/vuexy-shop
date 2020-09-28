<?php

namespace App\Http\Controllers;

use App\Services\BranchService;
use Illuminate\Http\Request;

class BranchController extends Controller
{
    protected $branchService;
    use ApiTrait;

    public function __construct(BranchService $branchService)
    {
        $this->branchService = $branchService;
    }

    public function index(Request $request)
    {
        try {
            $categories = $this->branchService->list();
        } catch (\Exception $exception) {
            return $this->error([], $exception->getMessage());
        }

        return $this->success($categories);
    }

    public function store(Request $request)
    {
        try {
            $branch = $this->branchService->create($request);
        } catch (\Exception $exception) {
            return $this->error([], $exception->getMessage());
        }

        return $this->success($branch);
    }

    public function show($id)
    {
        try {
            $branch = $this->branchService->getById($id);
        } catch (\Exception $exception) {
            return $this->error([], $exception->getMessage());
        }

        return $this->success($branch);
    }

    public function update(Request $request, $id)
    {
        try {
            $branch = $this->branchService->update($request, $id);
        } catch (\Exception $exception) {
            return $this->error([], $exception->getMessage());
        }

        return $branch;
    }

    public function destroy($id)
    {
        $res = $this->branchService->destroy($id);

        if ($res == 0) {
            return $this->error([], 'delete fail');
        }

        return $this->success($res);
    }
}
