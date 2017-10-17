import { Tamagotchi, Food } from './../js/tamagotchi.js';

$(document).ready(() => {
  let image_url;
  var xhr = $.get("http://api.giphy.com/v1/gifs/hKsiDTLWZpefu?api_key=ef0NEkq0nfkPeoKCnPYJWsaa7uW7IqAl");
  xhr.done((data) => {
    image_url = data.data.images.original.webp;
  });

  let user_tamagotchi;
  $("#tamagotchi-form").submit((event) => {
    event.preventDefault();
    $("#form-card").hide();
    $("#tamagotchi-card").show();

    user_tamagotchi = new Tamagotchi($("#name").val(), $('input[name=animal]:checked').val());
    // Triggers the digestFood func from the backend which takes one food level away from Gumdrop every so many seconds
    user_tamagotchi.digestFood();
    user_tamagotchi.expendStaminaChilling();
    user_tamagotchi.moodSwing();

    $("#tamagotchi-img").html(`<img src="${user_tamagotchi.img}">`);
    $("#tamagotchi-name").html("Name: " + user_tamagotchi.name);

    setInterval(() => {
      $("#foodlevel").html("Foodlevel: " + user_tamagotchi.foodlevel);
      $("#stamina").html("Stamina: " + user_tamagotchi.stamina);
      $("#mood").html("Mood: " + user_tamagotchi.mood);
      if(user_tamagotchi.foodlevel <= 0 || user_tamagotchi.stamina <= 0 || user_tamagotchi.mood <=0) {
        $("#tamagotchi-card").hide();
        $("#heading").hide();
        $("#restart").show();
        $("body").css({backgroundImage: `url(${image_url})`});
      }
    }, 1000);

    $("#play").click(() => {
      user_tamagotchi.play();
    });

    $("#eat").click(() => {
      let carrot = new Food("Giant Carrot", 3);
      user_tamagotchi.feedFood(carrot);
    });

    $("#nap").click(() => {
      user_tamagotchi.nap();
    });

    $("#sleep").click(() => {
      user_tamagotchi.sleep();
    });
  });
});
