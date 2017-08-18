var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');

var config = {
    user:'singhabhimanyu186',
    database:'singhabhimanyu186',
    host: 'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
}

var app = express();
app.use(morgan('combined'));

var articles = {

'article-one' :{
    title : "Hi, this is Article-One",
    heading: "Article-One",
    content: `<p>Lorem Ipsum</p>
<p> Lorem Ipsum 1</p> `
},

'article-two' : {
    
    title : "Hi, this is Article-Two",
    heading: "Article-Two",
    content: `<p>Lorem Ipsum Article 2</p>
<p> Lorem Ipsum 1</p> `
    },

'article-three' : {
     title : "Hi, this is ArticleThree",
    heading: "Article-Three",
    content: `<p>Lorem Ipsum</p>
<p> Lorem Ipsum 1</p> `
    
}

};

    
function HTMLTemplate(data){
    title = data.title;
    heading = data.heading;
    content = data.content;
    var template = `
    <html>
    <head> 
    <title>${title}</title>
    <meta name="viewport" content="width-device-width, initial-scale=1"/> 
    
    
    <style>
        .container{
         max-width: 800px;
        margin: 0 auto;
        font-family: sans-serif;
        color: #881414;
        padding-top: 60px;
        padding-left: 20px;
        padding-right: 20px;
            
        }
        
        ul li:nth-child(2n){
            
            background-color: #ccc;
            
        }
        
        ul li:nth-child(2n+1){
            
           background-color: #eee;
            
        }
    </style>
      
    </head>
    <body>
        <div class = "container">
        <div>
            <a href = '/'>Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            August 2 2017
        </div>
        <div>
           ${content}
        </div>
        </div>
        </hr>
        <div>
        <p>Comments Section</p>
        <input type = "text" id="cmt_txt" placeholder = "write your comment here!"></input>
        <input type = "submit" value = "Comment" id="submit_cmt"></input>
        <ul id="cmt_list"></ul>
        </div>
        </div>
        
        <script type="text/javascript" src="/ui/article.js">
            </script> 
        
    </body>
    
    
    
</html>
 `;
 return template;
    }

var pool = new Pool(config);
app.get('/test-db', function(req,res){
    
 pool.query('SELECT * FROM test', function(err,result){
     if(err){
         res.status(500).send(err.toString());
         
         
     }
     
     else{
         
         res.send(JSON.stringify(result));
         
     }
     
     
 });   

    
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req,res){
    
  counter = counter + 1;
  res.send(counter.toString());
    
    
    
});

var comments = [];
app.get('/comment',function(req,res)
{
  var comment_name = req.query.comment;
  comments.push(comment_name);
  res.send(JSON.stringify(comments));
    
}


);

var names = [];
app.get('/submit-name', function(req,res){
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
    
    
    
    
});

app.get('/articles/:articleName', function (req, res){
    
    pool.query("SELECT * FROM article WHERE title = $1", [req.params.articleName] , function(err,result){
        
        if(err){
            res.status(500).send(err.toString());
            
            
        }
        
        else{
            if(result.rows.length === 0){res.status(404).send('Article not found');}
            else{
                
                var articleData = result.rows[0];
                 res.send(HTMLTemplate(articleData));
                
            }
            
            
            
        }
        
        
        
        
    });
   
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/article.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

function hash(input,salt){
    
    var hashed = crypto.pbkdf25Sync(input,salt,10000,512,'sha512');
    return hashed.toString('hex');
}

app.get('/hash/:input', function(req,res){
    
    var hashedString = hash(req.params.input,'this-is-some-random-string');
    res.send(hashedString);
});






// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
