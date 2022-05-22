const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add items
 *  @method GET /add-items
 */
route.get('/add-item', services.add_item)

/**
 *  @description for update items
 *  @method GET /update-items
 */
route.get('/update-item', services.update_item)

// API
route.post('/api/items', controller.create)
route.get('/api/items', controller.find)
route.put('/api/items/:id', controller.update)
route.delete('/api/items/:id', controller.delete)

module.exports = route