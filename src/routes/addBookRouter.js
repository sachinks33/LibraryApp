const express= require('express');
const addBookRouter= express.Router();
const bookModel=require('../model/mScripts');

function router(nav)
{
    addBookRouter.get('/', function(req,res)
{   
    
    res.render('addBook',
    {
        nav,
        tittle:"Add Book"
        
    });
});
addBookRouter.get('/add', function(req,res)
{   
    var items={
            name:req.query.bookname,
            author:req.query.author,
            genre:req.query.genre,
            description:req.query.description,
            image:req.query.image 
            }
    var load=bookModel.booksData(items);
    load.save();
    res.redirect("/books")
    // console.log(req.query.image);
    
});
return addBookRouter;
}
module.exports=router;


