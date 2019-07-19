function createNewItem(listName, dataPairs, callback){
	$().SPServices({
		operation: "UpdateListItems",
		async:false,
		batchCmd: "New",
		listName: listName,
		valuepairs: dataPairs,
		completefunc: callback       // callback has xData, Status params
	});
}

function updateItem(listName, id, dataPairs, callback){
	$().SPServices({
		operation: "UpdateListItems",
		async:false,
		batchCmd: "Update",
		listName: listName,
		valuepairs: dataPairs,
		ID:id,
		completefunc: callback       // callback has xData, Status params
	});
}

function getListItems(listName, callback){	
		$().SPServices({
		operation: "GetListItems",
		async: false,
		listName: "Todo",
		completefunc: function(xData, Status){
			
		  var data = $(xData.responseXML).SPFilterNode("z:row")
		  callback(data, Status);
		} 
	});
}


