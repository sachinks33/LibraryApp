const express= require('express');
const logRouter= express.Router();
const userModel=require('../model/mScripts');

function router(nav)
{
// //data loading
// const fs = require('fs');
// var details

// //book details
// fs.readFile('./src/data/datas.json', (err, data) => {
//     if (err) throw err;
//     details = JSON.parse(data);
// });

// logRouter.get('/', function(req,res)
// {   
//     console.log(req.query);
//     res.render('login',
//     {
//         nav,
//         tittle:"Login"
        
//     });
//     console.log(req.query);
// });
// logRouter.get('/signup', function(req,res)
// {   
//     const bookIndex=req.params.bookIndex;
//     res.render('signup',
//     {
//         nav,
//         tittle:"Signup"
        
//     });
// });

//signup page
    logRouter.get('/', function(req,res)
    {   

        res.render('login',
        {
            nav,
            tittle:"Login",
            message:""
            
        });
    });

    logRouter.get('/validation', function(req,res)
    {   
        var items={
                email:req.query.email,
                pass:req.query.password,
                }
        userModel.userData.find({emailId:items.email},).then(function(userDetails){
            console.log(userDetails[0].emailId);
            //console.log(error);

            if(!userDetails)
            {
                res.render('login',
                {
                    nav,
                    tittle:"Login",
                    message:"Invalid username and password"
            
                });
            }
            else
            {
                if(userDetails[0].password==items.pass)
                {
                    res.redirect("/books")
                    
                }
                else
                {
                    res.render('login',
                    {
                        nav,
                        tittle:"Login",
                        message:"Invalid username and password"
            
                    });
                }
            }
            



            // for(let i=0; i<userDetails.length; i++)
            // {
            //     if(userDetails[i].emailId==items.email)
            //     {
            //         if(userDetails[i].password==items.pass)
            //         {
            //             
            //             break;
            //         }
            //         else{
            //             console.log("invalid credential");
            //         }
            //     }
            //     console.log("success");
            // }

        });
        
        
    });



//signup page
    logRouter.get('/signup', function(req,res)
    {   
    
        res.render('signup',
        {
            nav,
            tittle:"Signup"
            
        });
    });
    logRouter.get('/add', function(req,res)
    {   
        var items={
                name:req.query.name,
                emailId:req.query.email,
                mobile:req.query.mobile,
                password:req.query.password,
                userType:"user",

                }
        var load=userModel.userData(items);
        load.save();
        res.redirect("/books")
        
    });
return logRouter;
}
module.exports=router;


