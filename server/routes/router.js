'use strict';

const path = require('path');
const con = require('../mysqlconn'); 
const express = require('express');

const assert = require('assert');
const router = express.Router();
const mysql_db = process.env.MYSQL_DB || 'v7nosqohyskirint';

//task
router.get('/api/v1/task', (req, res, next) => {
  console.log('getting task get. mysql_db is mysql_db is ',mysql_db);

  con.query('call ' + mysql_db + '.task_get();', function (err, rows) {
    if(err){
      console.log('err is ', err);
      return next(err);
    } else if(rows) {
      console.log('calling task get returning', rows[0].length);
      return res.json(rows[0]);
    }
  });
});

router.post('/api/v1/task', (req, res, next) => {
    console.log('in task insert req.body is ', req.body);

  var insertString = 'call ' + mysql_db + '.task_insert(\'' +
    req.body.title        + '\', \'' + 
    req.body.description  + '\', \'' + 
    req.body.assigned     + '\', ' + 
    req.body.categoryID   + ');';
  console.log('in put task insert_string is ', insertString);
  con.query(insertString, function (err, rows) {
    if(err){
      return next(err);
    } else if(rows) {
      return res.status(200).json({
        status:'insert successful'
      });
    }
  });  

});

router.put('/api/v1/task', (req, res, next) => {
  console.log('getting task get ');

  console.log('in task update req.body is ', req.body);

  con.query('call ' + mysql_db + '.task_update(\'' +
    req.body.id           + '\', \'' + 
    req.body.title        + '\', \'' + 
    req.body.description  + '\', \'' + 
    req.body.assigned     + '\', \'' + 
    req.body.categoryID   + '\');', 
    function (err, rows) {
    if(err){
      return next(err);
    } else if(rows) {
      return res.status(200).json({
        status:'update successful'
      });
    }
  });

});

router.delete('/api/v1/task/:id', (req, res, next) =>{
  console.log('in task delete req.params is ', req.params);
  
  con.query('call ' + mysql_db + '.task_delete(\'' +
  req.params.id  + '\');', function(err,rows){
    
    if(err){
      return next(err);
    } else if(rows) {
      return res.status(200).json({
        status:'delete successful'
      });
    }
  });
});

//category
router.get('/api/v1/category', (req, res, next) => {
  console.log('getting category get. mysql_db is mysql_db is ',mysql_db);

  con.query('call ' + mysql_db + '.category_get();', function (err, rows) {
    if(err){
      console.log('err is ', err);
      return next(err);
    } else if(rows) {
      console.log('calling category get returning', rows[0].length);
      return res.json(rows[0]);
    }
  });
});

router.post('/api/v1/category', (req, res, next) => {
    console.log('in category insert req.body is ', req.body);

  var insertString = 'call ' + mysql_db + '.category_insert(\'' +
    req.body.title        + '\', \'' + 
    req.body.description  + '\');';

  console.log('in put category insert_string is ', insertString);
  con.query(insertString, function (err, rows) {
    if(err){
      return next(err);
    } else if(rows) {
      return res.status(200).json({
        status:'insert successful'
      });
    }
  });  

});

router.put('/api/v1/category', (req, res, next) => {
  console.log('getting category get ');

  console.log('in category update req.body is ', req.body);

  con.query('call ' + mysql_db + '.category_update(\'' +
    req.body.id           + '\', \'' + 
    req.body.title        + '\', \'' + 
    req.body.description  + '\');', 
    function (err, rows) {
    if(err){
      return next(err);
    } else if(rows) {
      return res.status(200).json({
        status:'update successful'
      });
    }
  });

});

router.delete('/api/v1/category/:id', (req, res, next) =>{
  console.log('in category delete req.params is ', req.params);
  
  con.query('call ' + mysql_db + '.category_delete(\'' +
  req.params.id  + '\');', function(err,rows){
    
    if(err){
      return next(err);
    } else if(rows) {
      return res.status(200).json({
        status:'delete successful'
      });
    }
  });
});

router.get('/', (req, res, next) => {
  res.sendFile(path.join(
    __dirname, '..', '..', 'client', 'index.html'));
});



module.exports = router;

