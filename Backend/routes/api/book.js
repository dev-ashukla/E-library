const express = require('express');
const router = express.Router();

//Load Book model
const Book = require('../../models/book.js')



//  all books in the library  
router.get('/all-books', async (req, res)=> {
    
    await Book.find()
        .then(bookList =>{
            if(bookList != null && bookList.length > 0){
                res.json(bookList).status(200)
                console.log(bookList)
            }
            else{res.status(404).json({Message : "No books Found"})}
        })
        .catch(err => res.status(500).json({error : err }))
})

// all available books
router.get('/available-books', async (req,res)=>{
    console.log("availableBook API hit")
    await Book.find({availability : true})
        .then(books => {res.json(books).status(200);
            console.log("available-book api hit");
        })
        .catch(e =>{res.status(500).json({error : e});
    console.log(e)})
})

// borrowed books
// all available books
router.get('/borrowed-books', async (req,res)=>{
    console.log("Boorowed Book API hit")
    await Book.find({borrowed : true})
        .then(books => {res.json(books).status(200);
        })
        .catch(e =>{res.status(500).json({error : e});
    console.log(e)})
})

//  find book by book id
router.get('/:id', (req,res) => {
    Book.findById(req.params.id)
        .then(book => {res.json(book).status(200);
        console.log(`Fetched Book by ID: ${req.params.id}`)})
        .catch(err => res.status(404).json({message: `No book with ${req.params.id}`}))
})



module.exports = router