const express = require('express')
const allRoutes = require('./routes/allroutes')

 //app 
const app = express()
const port = 3000;

// ejs
app.set('view engine','ejs')

//middleware and static
app.use(express.static('public'))
app.use('/',allRoutes)

//connected
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });