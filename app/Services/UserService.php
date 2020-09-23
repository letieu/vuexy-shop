<?php

namespace App\Services;

use App\Repositories\UserRepositoryInterface;
use Illuminate\Http\Request;

class UserService
{
    protected $userRepo;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepo = $userRepository;
    }

    public function index(Request $request)
    {
        if ($request->has('name')) {
            return $this->userRepo->findByName($request->name);
        }
        return $this->userRepo->all(15);
    }

    public function update(Request $request, $id)
    {
        $attributes = $request->except('name');
        return $this->userRepo->update($id, $attributes);
    }

    public function show($id)
    {
        return $this->userRepo->find($id);
    }

    public function destroy($id)
    {
        return $this->userRepo->delete($id);
    }

}
