 const mongoose = require('mongoose');

 var schema = new mongoose.Schema({
 	item: {
 		type: String,
 		required: true
 	},
 	quantity: {
 		type: Number,
 		required: true
 	},
 	location: {
 		type: String,
 		required: true
 	}
 })

 const Itemdb = mongoose.model('itemdb', schema);

 module.exports = Itemdb;