const express= require('express');
const addAuthorRouter= express.Router();
const authorModel=require('../model/mScripts');

function router(nav)
{
    addAuthorRouter.get('/', function(req,res)
    {   
    
        res.render('addAuthor',
        {
            nav,
            tittle:"Add Author"
            
        });
    });
    addAuthorRouter.get('/add', function(req,res)
    {   
        var items={
                name:req.query.authorName,
                about:req.query.about,
                image:req.query.image
                }
        var load=authorModel.authorData(items);
        load.save();
        res.redirect("/authors")
        // console.log(req.query.image);
        
    });
return addAuthorRouter;
}
module.exports=router;


