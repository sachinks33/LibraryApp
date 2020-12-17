const express= require('express');
const authorRouter= express.Router();
const authorModel= require('../model/mScripts');

function router(nav)
{
//authors page
authorRouter.get('/', function(req,res)
{   
    authorModel.authorData.find().then(function(details){

        res.render('authors',
        {
            nav,
            tittle:"Authors",
            details
            
        });
    });
    
});
authorRouter.get('/:authorIndex', function(req,res)
{   
    const authorIndex=req.params.authorIndex;
    authorModel.authorData.findOne({_id:authorIndex}).then(function(authorDetails){
        //console.log(authorDetails.name)
        res.render('author',
        {
            nav,
            tittle:"Author",
            authorDetails
            
        });
    });
    
});

//edit
authorRouter.get('/edit/:id', function(req,res)
{   
    const authorid=req.params.id;
    authorModel.authorData.findOne({_id:authorid}).then(function(authorDetails){
        //console.log(bookIndex);
        res.render('editAuthor',
        {
            nav,
            tittle:"Book",
            authorDetails
            
        });

    });
});
//edit updating
authorRouter.get('/edit/update/:id', function(req,res)
{   
    const authorid=req.params.id;
    var items={
        name:req.query.authorName,
        about:req.query.about,
        image:req.query.image,
        }
    var load=authorModel.authorData.findOneAndUpdate({_id:authorid},{name:items.name, about:items.about, image:items.image},function(err,resu){});
    res.redirect("/authors");
});

//Delete
authorRouter.get('/delete/:id', function(req,res)
{   
    const authorid=req.params.id;
    var items={
        name:req.query.authorName,
        about:req.query.about,
        image:req.query.image,
        }
    var load=authorModel.authorData.findOneAndDelete({_id:authorid},function(err,resu){});
    res.redirect("/authors");
});


return authorRouter;
}
module.exports=router;


