const categoriesRouter = require('express').Router();

const { checkAuth } = require('../middlewares/auth');

const { findAllCategories, findCategoryById, createCategory, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName } = require('../middlewares/categories');
const { sendAllCategories, sendCategoryById, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers/categories');

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById);
categoriesRouter.post('/categories', findAllCategories, checkEmptyName, checkIsCategoryExists, checkAuth, createCategory, sendCategoryCreated);
categoriesRouter.put('/categories/:id', findCategoryById, checkEmptyName, checkAuth, updateCategory, sendCategoryUpdated);
categoriesRouter.delete('/categories/:id', checkAuth, deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;
