var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content={
    title:'first-url | created by abhay',
    heading:'first url html', 
    date:'created on 17th september 2016 ',
    content:`<h5><ul>some pre-requisite</ul></h5>  
                <ol>  
                <li> you have account on <strong>GITHUB</strong></li>  
                <li>you have <strong>LINUX</strong> installed on the system</li>  
                <li>you have account on <strong>NPTEL</strong></li>  
                </ol> 
                <p>  
                    if you fulfill all the above mentioned pre-requisite,then open <strong>cloud.imad.hasura.io</strong>  
                    the login with your github account,after that they will provide a dummy copy of their project forked from their origina website  
                </p>
                <p>  
                    after that you have your own copy of the project and then you add any number of the html pages  
                    happy coding  
                </p>  
              `
};
function createtemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmltemplate=`
<html>  
    <head>  
         <title>${title} </title>
         <meta name="viewport" content="width=device-width,initial-select=1"/>
        <link href="/ui/style.css" rel="stylesheet"> 
    </head> 
 
    <body>  
       <div class=container>
        <div>  
            <a href="/">home</a>  
        </div>  
        <hr/>  
        <h1>${heading}</h1>  
          
          
        <p>  
            ${date};
        </p>  
        <hr/>  
        <div>  
            ${content};
        </div> 
        </div>
</body>  
</html>  
`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/first-url',function(req,res){
  //  res.sendFile(path.join(__dirname, 'ui', 'first-url.html'));
  res.send(createtemplate(htmltemplate));
});

app.get('/content',function(req,res){
    res.sendFile(path.join(__dirname,'ui','content.html'));
});

app.get('/second-url',function(req,res){
    res.sendFile(path.join(__dirname,'ui','second-url.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
