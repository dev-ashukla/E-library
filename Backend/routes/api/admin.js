const express = require("express")
const router = express.Router();

// loding models
const Book = require("../../models/book.js")
const User = require("../../models/User.js")


// fetching data for admin page
router.get("/data",async (req,res)=>{
    console.log("admin/data api hit")
    try
        {
            const totalBooks =await  Book.countDocuments();
            const borrowedBooks = await Book.countDocuments({borrowed : true})
            const availableBooks = await Book.countDocuments({availability : true})
            const totalUsers = await User.countDocuments()
            res.status(200)
                .json({
                    totalBooks,
                    borrowedBooks,
                    availableBooks,
                    totalUsers
                })
        }
    
    catch(err){
        res.status(404).json({err})
    }
    
    })

    module.exports = router