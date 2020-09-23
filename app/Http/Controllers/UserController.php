<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepositoryInterface;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    protected $userService;

    use ApiTrait;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function index(Request $request)
    {
        try {
            $users = $this->userService->index($request);
        } catch (\Exception $exception) {
            return $this->error([], $exception->getMessage());
        }

        return $this->success($users);
    }

    public function update(Request $request)
    {
        $currentUserId = Auth::id();
        try {
            $user = $this->userService->update($request, $currentUserId);
        } catch (\Exception $exception) {
            return $this->error([], $exception->getMessage());
        }

        return $this->success($user);
    }

    public function show($id)
    {
        $user = $this->userService->show($id);

        return $this->success($user);
    }

    public function destroy($id)
    {
        return $this->success([
            'done' => $this->userService->destroy($id)
        ], 'delete done');
    }
}
