const express = require("express");
const led1 = "vex"
const led2 = "tc_energy"
const led3 = "encore"
const leds = [led1, led2, led3]

function domeRoutes(io, baseUrl) {
  const router = express.Router();


  router.post('/default', (req, res) => {
    leds.map((led) => {
      io.emit(led, baseUrl + "/gifs/" + led + ".gif");
    });
    console.log('emitting default on Prairies');
    res.end();
  });

  // requests for each led
  leds.map((led) => {
    console.log("led", led)

    router.post("/" + led + '/countdown', (req, res) => {
      io.emit(led, baseUrl + "/gifs/countdown.gif");
      console.log('emitting countdown on ' + led);
      res.end();
    });

    router.post("/" + led + '/default', (req, res) => {
      io.emit(led, baseUrl + "/gifs/" + led + ".gif");
      console.log('emitting default on ' + led);
      res.end();
    });
  });

  return router;
}

module.exports = domeRoutes;