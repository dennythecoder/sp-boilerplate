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

/*

	listName: String of list name
	fields:  Object with destination field names as keys and received attribute names as values
		example:  var fields = {
					title: 'ows_Title',
					id:    'ows_ID'
					};
	callback: Function that accepts array parameter
		example: function(arr){
                           for(var i = 0;  i < arr.length; i++){
			   	console.log(arr[i].title);
			   }
			 }

	altogether:
	
		getListItems( 'Todo',
			      {
			      	title:'ows_Title',
				id:   'ows_ID'
			      },
			      function(arr){
			      	for(var i = 0;  i < arr.length; i++){
			   	   console.log(arr[i].title);
			   	}
			      }
			     );

*/

function getListItems(listName, fields, callback){	
	$().SPServices({
		operation: "GetListItems",
		async: false,
		listName: "Todo",
		completefunc: function(data, status){
			var arr = [];
			$(data.responseXML).SPFilterNode("z:row").each(function(){
				var item = {};
				for(var key in fields){
				    var attr = fields[key];
					item[key] = $(this).attr(attr);
				}
				arr.push(item);
   			});
   			 callback(arr);
		}});
}


