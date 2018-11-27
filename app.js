const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, 'public');
var port = process.env.PORT || 8080;
app.use(express.static(publicPath));
app.use(express.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    if(req.get('Host')) {
       next();
    } else {
      res.status(400).send('invalid request... add a host header plz');
    }
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});