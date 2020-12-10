const express= require('express');
const logRouter= express.Router();

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

logRouter.get('/', function(req,res)
{   
    console.log(req.query);
    res.render('login',
    {
        nav,
        tittle:"Login"
        
    });
    console.log(req.query);
});
logRouter.get('/signup', function(req,res)
{   
    const bookIndex=req.params.bookIndex;
    res.render('signup',
    {
        nav,
        tittle:"Signup"
        
    });
});
return logRouter;
}
module.exports=router;


