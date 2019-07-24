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

function getListItems(listName, callback, fields){	
	$().SPServices({
		operation: "GetListItems",
		async: false,
		listName: "Todo",
		completefunc: function(data, status){
			var arr = [];
			$(data).responseXML.SPFilterNode("z:row").each(function(){
				var item = {};
				for(var key in fields){
				    var attr = fields[key];
					item[key] = $(this).attr(attr);
				}
				arr.push(item);
   			});
   			 cb(arr);
		}});
}


