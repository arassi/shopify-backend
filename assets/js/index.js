
$("#add_item").submit(function(event){
	alert("Item Inserted Successfully to the Inventory");
})

$("#update_item").submit(function(event){
	event.preventDefault();

	var unindexed_array = $(this).serializeArray();
    console.log(unindexed_array)
	var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    console.log(data)

	var request = {
		"url": `http://localhost:3000/api/items/${data.id}`,
		"method": "PUT",
		"data": data
	}

	$.ajax(request).done(function(response){
		alert("Item Updated Successfully")
	})
})

const delay = ms => new Promise(res => setTimeout(res, ms));

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
    	console.log("Clicked");
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/items/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Item Deleted Successfully!");
                location.reload();
            })
        }

        location.reload();

    })
}

