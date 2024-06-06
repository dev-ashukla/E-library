const { mongoose } = require("mongoose");

const BookSchema = new mongoose.Schema({
    book_id: {
        type : String,
        required: true
    },
    title: {
        type : String,
        required: true
    },
    isbn : {
        type: String,
        required : true
    },
    author :  {
        type : String,
        required : true
    },
    genre: {
        type : String,
        required : true
    },
    published_date : {
        type : Date
    },
    publisher : {
        type : String
    },
    availability : {
        type : Boolean,
        required : true
    },
    borrowed : {
        type : Boolean,
        required : true
    },
    borrower :  {
        type : String,
    },
    due_date : {
        type : Date,
        required : true
    },
    return_date : {
        type : Date,
        required : true
    },
    fine_ammount : {
        type : Number ,
        required : true
    },
    updated_date : {
        type : Date,
        default : Date.now
    }
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;