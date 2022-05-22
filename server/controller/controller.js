var Itemdb = require('../model/model');

// create and save new items for inventory
exports.create = (req, res)=>{
	if (!req.body) {
		res.status(400).send({ message : "Input can't be empty!"});
		return;
	}
	if (!req.body.quantity < 0) {
		res.status(400).send({ message : "Quantity can't be lower than zero!"});
		return;
	}

	// new item
	const item = new Itemdb({
		item: req.body.item,
		quantity: req.body.quantity,
		location: req.body.location
	})

	// save item in the database
	item
		.save(item)
		.then(data=>{
			//res.send(data)
			res.redirect('/')
		})
		.catch(err=>{
			res.status(500).send({
				message: err.message || "Error with the create operation"
			});
		});
}

// retrieve and return all items or retrieve a single item
exports.find = (req, res)=>{

	if (req.query.id) {
		const id = req.query.id;

		Itemdb.findById(id)
			.then(data=>{
				if (!data){
					res.status(404).send({ message: "Not found with id:"+ id})
				} else{
					res.send(data)
				}
			})
			.catch(err=>{
				res.status(500).send({message: "Error retrieving item with id:"+id})
			})
	}
	else{
		Itemdb.find()
			.then(item=>{
				res.send(item)
			})
			.catch(err =>{
				res.status(500).send({message: err.message || "Error Occured while retrieving item info"})
			})
	}
}

// Update an item
exports.update = (req, res)=>{
	if (!req.body){
		return res
		 .status(400)
		 .send({message: "Data to update can not be empty"})
	}

	const id = req.params.id;
	Itemdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
		.then(data =>{
			if (!data) {
				res.status(404).send({ message: `Cannot update item with ${id}. Maybe item not found.`})
			} else{
				res.send(data)
			}
		})
		.catch(err =>{
			res.status(500).send({message: "Error update item info"})
		})
}

// Delete an item from inventory
exports.delete = (req, res)=>{
	const id = req.params.id;

	Itemdb.findByIdAndDelete(id)
		.then(data=>{
			if (!data) {
				res.status(404).send({message: `Cannot Delete with id ${id}. Perhaps id is wrong`})
			}
		})
		.catch(err =>{
			res.status(500).send({
				message: "Could not delete Item with id=" + id
			});
		})
}










