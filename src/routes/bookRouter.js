const express= require('express');
const bookRouter= express.Router();
function router(nav)
{
//data loading
const fs = require('fs');
var details

//book details
fs.readFile('./src/data/datas.json', (err, data) => {
    if (err) throw err;
    details = JSON.parse(data);
});

bookRouter.get('/', function(req,res)
{   
    // res.send("hello");
    res.render('books',
    {
        nav,
        tittle:"Books",
        details
        
    });
});
bookRouter.get('/:bookIndex', function(req,res)
{   
    const bookIndex=req.params.bookIndex;
    res.render('book',
    {
        nav,
        tittle:"Book",
        book:details.books[bookIndex]
        
    });
});
return bookRouter;
}
module.exports=router;