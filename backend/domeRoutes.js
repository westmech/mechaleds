const express = require("express");

function domeRoutes(io) {
  const router = express.Router();

  router.post('/default', (req, res) => {
    io.emit("dome ab_innovates", "http://localhost:3000/gifs/0_ab_innovates.gif");
    io.emit("dome gov_ab", "http://localhost:3000/gifs/0_gov_ab.gif");
    console.log('emitting default on DOME');
    res.end();
  });

  router.post('/ab_innovates/countdown', (req, res) => {
    io.emit("dome ab_innovates", "http://localhost:3000/gifs/countdown.gif");
    console.log('emitting countdown on ab_innovates');
    res.end();
  });

  router.post('/ab_innovates/default', (req, res) => {
    io.emit("dome ab_innovates", "http://localhost:3000/gifs/0_ab_innovates.gif");
    res.end();
  });

  router.post('/gov_ab/countdown', (req, res) => {
    io.emit("dome gov_ab", "http://localhost:3000/gifs/countdown.gif");
    console.log('emitting countdown on gov_ab');
    res.end();
  });


  router.post('/gov_ab/default', (req, res) => {
    io.emit("dome gov_ab", "http://localhost:3000/gifs/0_gov_ab.gif");
    res.end();
  });

  return router;
}

module.exports = domeRoutes;