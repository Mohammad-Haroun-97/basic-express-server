'use strict';

//dependencies
const express=require('express');
require('dotenv').config();
const PORT =process.env.PORT ||3030

//modules
const errorHandler=require('./error-handlers/500.js');
const notFoundHandler=require('./error-handlers/404.js');
const logger=require('./middleware/logger');
const validator=require('./middleware/validator');
//my app
const app=express();

//routes



//localhost:3030/person?name=haroun
app.get('/person', validator, (req, res) => {
  res.json({
    name: req.query.name,
  });
});




app.use('*', notFoundHandler);
app.use(errorHandler);
app.use(logger);

function start(){
  app.listen(PORT,()=>{
    console.log(`this is port ${PORT}`);
  });
}

module.exports={
  app:app,
  start:start,
};