const { addBudget, getBudget, deleteBudget } = require('../controller/budget');
const { addExpense, getExpense, deleteExpense } = require('../controller/expense');

const router = require('express').Router()


router.post('/add-budget',addBudget)
      .get('/get-budget',getBudget)
      .delete('/delete-budget/:id',deleteBudget)
      .post('/add-expense',addExpense)
      .get('/get-expense',getExpense)
      .delete('/delete-expense/:id',deleteExpense)

module.exports= router