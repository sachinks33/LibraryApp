const express= require('express');
const authorRouter= express.Router();

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

//authors page
authorRouter.get('/', function(req,res)
{   
    // res.send("hello");
    res.render('authors',
    {
        nav,
        tittle:"Authors",
        details
        
    });
});
authorRouter.get('/:authorIndex', function(req,res)
{   
    const authorIndex=req.params.authorIndex;
    res.render('author',
    {
        nav,
        tittle:"Author",
        author:details.authors[authorIndex]
        
    });
});
return authorRouter;
}
module.exports=router;


