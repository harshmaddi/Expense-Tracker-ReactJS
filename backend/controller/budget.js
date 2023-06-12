const BudgetSchema = require("../models/budgetModel");




exports.addBudget =async(req,res)=>{
    const {title , amount,category,date,description} = req.body
    const budget = BudgetSchema({
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
        res.status(200).json({message:'Budget added sucessfully :)'})
    } catch (error) {
        res.status(500).json({message:'Server Error'})
    }
    console.log(budget);
}

exports.getBudget =async(req,res)=>{
    try {
        const budget = await BudgetSchema.find().sort({createdAt:-1})
        res.status(200).json(budget)
    } catch (error) {
        res.status(500).json({message:'Server Error'})
    }
}

exports.deleteBudget =async(req,res)=>{
   const {id} = req.params;
   console.log(id);
   BudgetSchema.findByIdAndDelete(id)
   .then((budget)=>{
    res.status(200).json({message:'Budget Deleted'})
   })
   .catch((err)=>{
    res.status(500).json({message:'Error Budget Deleted'})
   })
}