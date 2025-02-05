const express = require("express");
const led1 = "ab_innovates"
const led2 = "gov_ab"
const leds = [led1, led2]

function domeRoutes(io, baseUrl) {
  const router = express.Router();


  router.post('/default', (req, res) => {
    leds.map((led) => {
      io.emit(led, baseUrl + "/gifs/" + led + ".gif");
    });
    console.log('emitting default on DOME');
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

    router.post("/" + led + '/prematch', (req, res) => {
      io.emit(led,  baseUrl + "/pngs/prematch.png");
      console.log('emitting prematch on ' + led);
      res.end();
    });
  });

  return router;
}

module.exports = domeRoutes;