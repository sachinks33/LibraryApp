    const { name } = require('ejs');
const express= require('express');
    const bookModel = require('../model/mScripts');
    const bookRouter= express.Router();
    //const booksData= require('../model/mScripts');
    function router(nav)
    {
    //data loading
    // const fs = require('fs');
    // var details

    // //book details
    // fs.readFile('./src/data/datas.json', (err, data) => {
    //     if (err) throw err;
    //     details = JSON.parse(data);
    // });





    bookRouter.get('/', function(req,res)
    {   
        bookModel.booksData.find().then(function(details){
            //console.log(details);
            res.render('books',
            {
                nav,
                tittle:"Books",
                details
                
            });

        });
        
        

        // console.log(books);


    });
    bookRouter.get('/:bookIndex', function(req,res)
    {   
        const bookIndex=req.params.bookIndex;
        bookModel.booksData.findOne({_id:bookIndex}).then(function(bookDetails){
            console.log(bookIndex);
            res.render('book',
            {
                nav,
                tittle:"Book",
                bookDetails
                
            });

        });
    });
//edit
    bookRouter.get('/edit/:id', function(req,res)
    {   
        const bookid=req.params.id;
        bookModel.booksData.findOne({_id:bookid}).then(function(bookDetails){
            //console.log(bookIndex);
            res.render('editBook',
            {
                nav,
                tittle:"Book",
                bookDetails
                
            });

        });
    });
//edit updating
    bookRouter.get('/edit/update/:id', function(req,res)
    {   
        const bookid=req.params.id;
        var items={
            name:req.query.bookname,
            author:req.query.author,
            genre:req.query.genre,
            description:req.query.description,
            image:req.query.image 
            }
        var load=bookModel.booksData.findOneAndUpdate({_id:bookid},{name:items.name, author:items.author, genre:items.genre,description:items.description, image:items.image},function(err,resu){});
        res.redirect("/books");
    });
    //delete
    bookRouter.get('/delete/:id', function(req,res)
    {   
        const bookid=req.params.id;
        var items={
            name:req.query.bookname,
            author:req.query.author,
            genre:req.query.genre,
            description:req.query.description,
            image:req.query.image 
            }
        var load=bookModel.booksData.findOneAndDelete({_id:bookid},function(err,resu){});
        res.redirect("/books");
    });
    return bookRouter;
    }
    module.exports=router;