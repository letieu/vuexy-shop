<?php

namespace App\Services;

use App\Repositories\Eloquent\BranchRepository;
use Illuminate\Http\Request;

class BranchService{
    protected $branchRepo;

    public function __construct(BranchRepository $branchRepository)
    {
        $this->branchRepo = $branchRepository;
    }

    public function search(Request $request)
    {
        $name = $request->has('name') ? $request->name : '' ;
        return $this->branchRepo->findByName($name);
    }

    public function list()
    {
        return $this->branchRepo->withProductCount();
    }

    public function getById($id)
    {
        return $this->branchRepo->find($id);
    }

    public function create(Request $request)
    {
        return $this->branchRepo->create($request->all());
    }

    public function update(Request $request, $id)
    {
        return $this->branchRepo->update($id, $request->all());
    }

    public function destroy($id)
    {
        return $this->branchRepo->delete($id);
    }
}
