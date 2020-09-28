<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\OrderService;

class OrderController extends Controller
{
    protected $orderService;
    use ApiTrait;

    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    public function index()
    {
        $orders = $this->orderService->list();
        return $this->success($orders);
    }

    public function store(Request $request)
    {
        $order = $this->orderService->create($request);
        return $this->success($order);
    }

    public function show($id)
    {
        $order = $this->orderService->getById($id);
        return $this->success($order);
    }


    public function update(Request $request, $id)
    {
        $order = $this->orderService->update($request, $id);
    }

    public function destroy($id)
    {
        $this->orderService->destroy($id);
    }
}
