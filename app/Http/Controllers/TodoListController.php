<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ListItem;
use Exception;
use Log;

class TodoListController extends Controller
{
    
    public function index() {
        return view('index', ['listItems' => ListItem::all()]);
    }

    public function getItemAll() {
        try {
            $listItem = ListItem::all();
            return response()->json($listItem);
        } catch (Exception $e) {
            //Log::error($e);
        }
    }

    public function saveItem(Request $request) {
        $newListItem = new ListItem;
        $newListItem-> name = $request->description;
        $newListItem-> is_complete =0;
        $newListItem-> end_date = $request -> endDate;
        $newListItem-> end_time = $request -> endTime;
        $newListItem-> save();

        return response()->json(['message' => 'Task added successfully']);
    }

    public function deleteItem($id) {
        $ListItem = ListItem::find($id);
        $ListItem -> delete();

        return response()->json(['message' => 'Task deleted successfully']);
    }

    public function crossItem($id) {
        $ListItem = ListItem::find($id);

        $ListItem->is_complete = ($ListItem->is_complete == 1) ? 0 : 1;
        $ListItem -> save();
        return response()->json([
            'message' => 'Task updated successfully',
            'task' => $ListItem
        ]);
    }

    public function updateItem(Request $request, $id) {
        $ListItem = ListItem::find($id);
        $ListItem-> name = $request->description;
        $ListItem-> end_date = $request -> endDate;
        $ListItem-> end_time = $request -> endTime;
        $ListItem->save();
    
        return  response()->json(['message' => 'Task updated successfully']);
    }

    public function deleteAll(){
        ListItem::truncate();
        
        return  response()->json(['message' => 'Tasks Deleted successfully']);
    }

    public function completeAll()
    {
        ListItem::query()->update(['is_complete' => 1]);

        return  response()->json(['message' => 'Tasks updated successfully']);
    }

}
