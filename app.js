const express= require('express');
const app= new express();
const port=process.env.PORT || 2000;
const fs = require('fs');
const nav=[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"},{link:"/addBook",name:"Add Book",},{link:"/addBook/addAuthor",name:"Add Author",},{link:"/login",name:"Logout",}];
const nav2=[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"},{link:"/addBook",name:"Add Book",},{link:"/addBook/addAuthor",name:"Add Author",},{link:"/login",name:"Login",}];
const bookRouter=require('./src/routes/bookRouter')(nav);
const addRouter=require('./src/routes/addRouter')(nav);
const logRouter=require('./src/routes/logRouter')(nav2);
const authorRouter=require('./src/routes/authorRouter')(nav);


app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', __dirname+'/src/views');
app.use('/books',bookRouter);
app.use('/addBook',addRouter);
app.use('/login',logRouter);
app.use('/authors',authorRouter);

fs.readFile('./src/data/datas.json', (err, data) => {
    if (err) throw err;
    details = JSON.parse(data);
});
// main page
app.get('/', function(req,res)
{
    res.render('index',
    {
        nav,
        tittle:"Library",
        details
    });
    // res.send("hello");
    //const {name,password}=req. ;
    
});


app.get('/login', (req, res) =>{ 
    
    res.render('login',
    {
    nav,
    tittle:"Login",
    msg:''
    });
});
app.get('/logout', (req, res) =>{ 
    
    res.render('login',
    {
    nav,
    tittle:"Login"

    });
});
// app.post('/login', function(req,res)
// {
//     const {name,password}=req.body;
//     console.log(name);

// });

app.get('/registration', (req, res) =>{ 
    
    res.render('registration',
    {
    nav,
    tittle:"Registration"

    });
});

app.post('/registration', (req, res) =>{ 
    const { name, email, mobile, password } = req.body;
    console.log(req.body);
});


app.listen(port, ()=>{console.log("Server ready at"+port )});  

// log validation
