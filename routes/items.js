const express = require('express');
const { withErrorHandling } = require('../controllers/errors');
const { getItems, postItem } = require('../controllers/items');
const itemsRouter = express.Router();

itemsRouter
  .route('/')
  .get(withErrorHandling(getItems))
  .post(withErrorHandling(postItem));

module.exports = itemsRouter;
