
$("#add_item").submit(function(event){
	alert("Item Inserted Successfully to the Inventory");
})

$("#update_item").submit(function(event){
	event.preventDefault();

	var unindexed_array = $(this).serializeArray();
	var data = {}

	$.map(unindexed_array.function(n, i){
		data[n['item']] = n['value']
	})

	var request = {
		"url": `http://localhost:3000/api/items/${data.id}`,
		"method": "PUT",
		"data": data
	}

	$.ajax(request).done(function(response){
		alert("Item Updated Successfully")
	})
})

if (window.location.pathname == "/") {
	$ondelete = $(".table tbody td a.delete");
	$ondelete.click(funtion(){
		var id = $(this).attr("data-id");

		var request = {
		"url": `http://localhost:3000/api/items/${id}`,
		"method": "DELETE",
		}

		if (confirm("Are you sure you want to delete this item?")) {
			$.ajax(request).done(function(response){
			alert("Item Updated Successfully")
			location.reload()
		})

		}
	})
}