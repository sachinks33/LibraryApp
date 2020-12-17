
const mongoose= require("mongoose");
mongoose.connect("mongodb+srv://sachinks:sachinks33@libraryapp.s4ffv.mongodb.net/LibraryApp?retryWrites=true&w=majority");
const schema= mongoose.Schema;

//books schema
const bookSchema= new schema({
    name:String,
    author:String,
    genre:String,
    description:String,
    image:String
});
var bookModel=mongoose.model('books',bookSchema);

//Authors schema
const authorSchema= new schema({
    name:String,
    about:String,
    image:String
});
var authorModel=mongoose.model('authors',authorSchema);

//user schema
const userSchema= new schema({
    name:String,
    emailId:String,
    mobile:String,
    password:String,
    userType:String
});
var userModel=mongoose.model('users',userSchema);

module.exports.booksData=bookModel;
module.exports.authorData=authorModel;
module.exports.userData=userModel;