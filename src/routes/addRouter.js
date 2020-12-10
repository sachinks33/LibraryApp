const express= require('express');
const addRouter= express.Router();

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

addRouter.get('/', function(req,res)
{   
    res.render('addBook',
    {
        nav,
        tittle:"Add Book"
        
    });
});
addRouter.get('/addAuthor', function(req,res)
{   
    const bookIndex=req.params.bookIndex;
    res.render('addAuthor',
    {
        nav,
        tittle:"Add Author"
        
    });
});
return addRouter;
}
module.exports=router;


