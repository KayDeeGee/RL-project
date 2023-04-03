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
        $newListItem-> start_Date = $request -> startDate;
        $newListItem-> start_Time = $request -> startTime;
        $newListItem-> end_Date = $request -> endDate;
        $newListItem-> end_Time = $request -> endTime;
        $newListItem-> save();

        return response()->json(['message' => 'Task added successfully']);
    }

    public function deleteItem($id) {
        $ListItem = ListItem::find($id);
        $ListItem -> delete();

        return redirect('/');
    }

    public function crossItem($id) {
        $ListItem = ListItem::find($id);

        $ListItem->is_complete = ($ListItem->is_complete == 1) ? 0 : 1;
        $ListItem -> save();
        return redirect('/');
    }



    public function updateItem(Request $request) {
        $ListItem = ListItem::find($request->modalId);
        $ListItem-> name = $request->modalName;
        $ListItem->save();
    
        return redirect('/');
    }

    public function deleteAll(){
        ListItem::truncate();
        
        return redirect('/');
    }

    public function completeAll()
    {
        ListItem::query()->update(['is_complete' => 1]);

        return redirect('/');
    }

}
