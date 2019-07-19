<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="./lib/bootstrap.min.css" >
    <title>Boilerplate</title>
  </head>
  <body>

	<div class="container" id="app">
		
		<form>
			<div class="form-group">
				<label for="todoText">Text</label>
				<input v-focus v-model="title" type="text" class="form-control" id="todoText" placeholder="Todo text">
			</div>
			<button class="btn">Cancel</button>
			<button @click="onSubmit" class="btn btn-primary">Create</button>
		</form>
	</div>
	<div class="alert alert-success" role="alert" style="display:none">
	  Todo created!
	</div>

	<!--dependencies-->
	<script src="./lib/jquery+popper+bootstrap+vue.js"></script>
	<script src="./lib/jquery.SPServices-2014.02.js"></script>
	<script>
		
		/*
			format data pairs like [
									  ["key1", value1], 
									  ["key2", value2]
								   ]
		*/
		
		
		Vue.directive('focus', {
		  inserted: function (el) {
		    el.focus()
		  }
		})
		
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

		
	
		new Vue({
		
			el:"#app",
			data:{
				title:""
			},
			methods:{
				onSubmit:function(){
					createNewItem("Todo",
								  [[ "Title", this.title]],
								  this.onSubmitted
								  );
								
				},
				onSubmitted:function(xData, status){
					$(".alert").show();
					setTimeout(function(){
						window.location.href = "https://usaf.dps.mil/teams/aetc/prototype-sandbox/app/home.aspx";
						}, 750);
				}
			}
		
		})
		
		
	
	
	</script>

  </body>
</html>
