const express= require('express');
const app= new express();
const port=process.env.PORT || 2000;
//const port= 2000;
const nav=[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"},{link:"/addBook",name:"Add Book",},{link:"/addAuthor",name:"Add Author",},{link:"/login",name:"Logout",}];
const nav2=[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"},{link:"/addBook",name:"Add Book",},{link:"/addBook/addAuthor",name:"Add Author",},{link:"/login",name:"Login",}];
const bookRouter=require('./src/routes/bookRouter')(nav);
const addBookRouter=require('./src/routes/addBookRouter')(nav);
const addAuthorRouter=require('./src/routes/addAuthorRouter')(nav);
const logRouter=require('./src/routes/logRouter')(nav2);
const authorRouter=require('./src/routes/authorRouter')(nav);
const bookModel = require('./src/model/mScripts');
//const books=require('./src/model/mScripts');



app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', __dirname+'/src/views');
app.use('/books',bookRouter);
app.use('/addBook',addBookRouter);
app.use('/addAuthor',addAuthorRouter);
app.use('/login',logRouter);
app.use('/authors',authorRouter);
//data loading
const fs = require('fs');
var details

//book details
fs.readFile('./src/data/datas.json', (err, data) => {
    if (err) throw err;
    details = JSON.parse(data);
});

var logdata=0;
app.get('/', function(req,res)
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
    
});


app.listen(port, ()=>{console.log("Server ready at "+port )});  
