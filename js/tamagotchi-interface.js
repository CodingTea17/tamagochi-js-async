import { Tamagotchi } from './../js/tamagotchi.js';

$(document).ready(() => {
  let user_tamagotchi;
  $("#name-yo-tama").submit((event) => {
    event.preventDefault();
    user_tamagotchi = new Tamagotchi($("#name").val());
    // Triggers the digestFood func from the backend which takes one food level away from Gumdrop every so many seconds
    user_tamagotchi.digestFood();
    user_tamagotchi.expendStaminaChilling();
    user_tamagotchi.moodSwing();

    $("#tama-name").html("Name: " + user_tamagotchi.name);

    setInterval(() => {
      $("#foodlevel").html("Foodlevel: " + user_tamagotchi.foodlevel);
      $("#stamina").html("Stamina: " + user_tamagotchi.stamina);
      $("#mood").html("Mood: " + user_tamagotchi.mood);
    }, 1000);
  });



});
