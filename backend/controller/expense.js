const ExpenseSchema = require("../models/expenseModel");




exports.addExpense =async(req,res)=>{
    const {title , amount,category,date,description} = req.body
    const budget = ExpenseSchema({
        title,
        amount,
        category,
        date,
        description
    })
    try {
        //Validations
        if(!title || !description || !category ||  !date ){
            return res.status(400).json({message:'All fields are mandatory !'})
        }
        if(amount<=0 || !amount==Number){
            return res.status(400).json({message:'Enter correct Number !'})
        }
        await budget.save()
        res.status(200).json({message:'Expense added sucessfully :)'})
    } catch (error) {
        res.status(500).json({message:'Server Error'})
    }
    console.log(budget);
}

exports.getExpense =async(req,res)=>{
    try {
        const budget = await ExpenseSchema.find().sort({createdAt:-1})
        res.status(200).json(budget)
    } catch (error) {
        res.status(500).json({message:'Server Error'})
    }
}

exports.deleteExpense =async(req,res)=>{
   const {id} = req.params;
   console.log(id);
   ExpenseSchema.findByIdAndDelete(id)
   .then((budget)=>{
    res.status(200).json({message:'Expense Deleted'})
   })
   .catch((err)=>{
    res.status(500).json({message:'Error Expense Deleted'})
   })
}