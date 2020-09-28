<?php
namespace App\Services;
use Illuminate\Http\Request;

class OrderService
{
    protected $orderRepo;

    // TODO bind interface for all repo
    public function __construct(\App\Repositories\Eloquent\OrderRepository $orderRepo)
    {
        $this->orderRepo = $orderRepo;
    }
    public function list()
    {
        return $this->orderRepo->list();
    }

    public function getById($id)
    {
        return $this->orderRepo->find($id);
    }

    public function create(Request $request)
    {
        return $this->orderRepo->create($request->all());
    }

    public function update(Request $request, $id)
    {
        return $this->orderRepo->update($id, $request->all());
    }

    public function destroy($id)
    {
        return $this->orderRepo->delete($id);
    }
}
