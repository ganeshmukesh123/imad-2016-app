var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne = {
    title: 'Article One | Ganesh',
    heading: 'Article One',
    date: 'sep 5 2016',
    content: `
    <p>
            This is article one     This is article one     This is article one     This is article one
        </p>
        
        <p>
            This is article one     This is article one     This is article one     This is article one
        </p>
        
        <p>
            This is article one     This is article one     This is article one     This is article one
        </p>
        
        <p>
            This is article one     This is article one     This is article one     This is article one
        </p>`
};
function createtemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmltemplate=
    `
            <html>
            <head>
                <title>
                       ${title}
                </title>
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div>
                <a href="/">Home</a>
                </div>
                <hr>
                <h3>
                     ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                     ${content}
                </div>
            </body>
        </html>
    `;
    return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-one', function (req, res) {
  res.send(createtemplate(articleOne));
  });
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
