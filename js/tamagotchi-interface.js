import { Tamagotchi } from './../js/tamagotchi.js';

$(document).ready(() => {
  let gummy = new Tamagotchi("Gumdrop");

  setInterval(() => {
    $("#foodlevel").html(gummy.foodlevel);
  }, 300000);
  // Triggers the digestFood func from the backend which takes one food level away from Gumdrop every so many seconds
  gummy.digestFood();
});
